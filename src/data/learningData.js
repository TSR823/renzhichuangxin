import answersCsv from './datasets/answers.csv?raw';
import materialsCsv from './datasets/materials.csv?raw';
import nodesCsv from './datasets/nodes.csv?raw';
import requirementsCsv from './datasets/requirements.csv?raw';
import studentsCsv from './datasets/students.csv?raw';
import { parseCsv } from './csv';

/**
 * 真实模拟学情数据层。
 * 数据来源：赛题资料包 / 4_赛题数据 / 模拟学情数据。
 * 本模块负责解析 CSV、执行清洗规则、派生个体 / 群体学情与学习建议。
 */

const answers = parseCsv(answersCsv);
const materials = parseCsv(materialsCsv);
export const students = parseCsv(studentsCsv);
export const requirements = parseCsv(requirementsCsv);
export const nodes = parseCsv(nodesCsv);

const materialMap = new Map(materials.map((item) => [item['材料编号'], item]));

/** 学生下拉选项：D01 ~ D40 */
export const STUDENT_OPTIONS = ['全部学生', ...students.map((item) => item['学生编号'])];

/** 学生 → 班级（DC01：D01~D21，DC02：D22~D40） */
const studentClassMap = new Map(
  students.map((item) => [item['学生编号'], item['模拟班级编号']])
);

/** 班级选项及人数，用于群体学情切换 */
export const CLASS_OPTIONS = (() => {
  const counter = new Map();
  students.forEach((item) => {
    const classId = item['模拟班级编号'];
    counter.set(classId, (counter.get(classId) || 0) + 1);
  });
  return [...counter.entries()].map(([id, count]) => ({ id, count }));
})();

/** 学习主题选项：T01 ~ T03 */
export const TOPIC_OPTIONS = ['全部主题', ...new Set(requirements.map((item) => item['主题']))];

/**
 * 知识点 = 课程要求中的“观察指标”（9 个）。
 * materials 只取题目类材料，用于生成练习建议。
 */
export const KNOWLEDGE_POINTS = requirements.map((item) => {
  const kpId = item['指标编号'];
  return {
    id: kpId,
    name: item['观察指标'],
    topicId: item['主题编号'],
    topicName: item['主题'],
    requirement: item['主题目标'],
    materials: materials
      .filter(
        (material) =>
          material['材料类型'] === '题目' &&
          (material['指标编号'] || '').split('、').includes(kpId)
      )
      .map((material) => material['材料编号']),
  };
});

const knowledgePointMap = new Map(KNOWLEDGE_POINTS.map((item) => [item.id, item]));

/** 标准化作答记录，并解析出所属知识点 */
const records = answers.map((row) => {
  const material = materialMap.get(row['材料编号']);
  return {
    recordId: row['记录编号'],
    studentId: row['学生编号'],
    materialId: row['材料编号'],
    topicId: row['主题编号'],
    nodeId: row['节点编号'],
    status: row['评分状态'],
    scoreText: row['得分'],
    score: row['得分'] === '' ? null : Number(row['得分']),
    full: row['满分'] === '' ? null : Number(row['满分']),
    submittedAt: row['模拟提交时间'],
    finalAnswer: row['学生最终作答'],
    kpIds: (material?.['指标编号'] || '').split('、').filter(Boolean),
  };
});

/* ============================ 数据清洗（M2） ============================= */

/** 缺失：得分为空（待评分 / 未作答，共 11 条） */
const missingRecords = records.filter((item) => item.score === null);

/** 异常越界：得分不在 [0, 满分] 范围内（共 2 条） */
const abnormalRecords = records.filter(
  (item) =>
    item.score !== null &&
    (item.full === null || item.full <= 0 || item.score < 0 || item.score > item.full)
);

/** 重复：同一学生 + 同一材料仅保留最新提交时间一条（多余 47 条） */
const latestRecordMap = new Map();
records.forEach((item) => {
  const key = `${item.studentId}|${item.materialId}`;
  const previous = latestRecordMap.get(key);
  if (!previous || item.submittedAt > previous.submittedAt) latestRecordMap.set(key, item);
});
const duplicateRecords = records.filter(
  (item) => latestRecordMap.get(`${item.studentId}|${item.materialId}`) !== item
);

/** 清洗后的有效记录：去重 + 已评分 + 得分在合法范围内 */
const validRecords = [...latestRecordMap.values()].filter(
  (item) =>
    item.status === '已评分' &&
    item.score !== null &&
    item.full !== null &&
    item.full > 0 &&
    item.score >= 0 &&
    item.score <= item.full
);

/** Tab1 顶部指标卡 */
export const DATA_METRICS = [
  { key: 'total', label: '总记录', value: records.length },
  { key: 'missing', label: '缺失记录', value: missingRecords.length },
  { key: 'duplicate', label: '重复记录', value: duplicateRecords.length },
  { key: 'abnormal', label: '异常记录', value: abnormalRecords.length },
];

/** Tab1 样例表：异常、缺失、重复记录各取若干条 */
export const DATA_ROWS = [
  ...abnormalRecords.map((item) => ({
    recordId: item.recordId,
    studentId: item.studentId,
    questionId: item.materialId,
    node: item.nodeId,
    type: '异常越界',
    status: '待修正',
  })),
  ...missingRecords.slice(0, 4).map((item) => ({
    recordId: item.recordId,
    studentId: item.studentId,
    questionId: item.materialId,
    node: item.nodeId,
    type: '缺失记录',
    status: item.status,
  })),
  ...duplicateRecords.slice(0, 4).map((item) => ({
    recordId: item.recordId,
    studentId: item.studentId,
    questionId: item.materialId,
    node: item.nodeId,
    type: '重复记录',
    status: '已合并',
  })),
].slice(0, 10);

/* ============================ 学生画像（M3） ============================= */

const recordsByStudent = new Map();
validRecords.forEach((item) => {
  const list = recordsByStudent.get(item.studentId) || [];
  list.push(item);
  recordsByStudent.set(item.studentId, list);
});

/** 构建单个学生的学情画像 */
function buildStudentProfile(studentId) {
  const ownRecords = recordsByStudent.get(studentId) || [];

  const kpStats = KNOWLEDGE_POINTS.map((point) => {
    const items = ownRecords.filter((item) => item.kpIds.includes(point.id));
    const score = items.reduce((sum, item) => sum + item.score, 0);
    const full = items.reduce((sum, item) => sum + item.full, 0);
    return {
      kpId: point.id,
      name: point.name,
      answered: items.length,
      score,
      full,
      accuracy: full > 0 ? Math.round((score / full) * 100) : null,
      records: items.map((item) => ({
        recordId: item.recordId,
        materialId: item.materialId,
        nodeId: item.nodeId,
        score: item.score,
        full: item.full,
        submittedAt: item.submittedAt,
      })),
    };
  });

  const validAnswers = ownRecords.length;
  const scoreTotal = ownRecords.reduce((sum, item) => sum + item.score, 0);
  const fullTotal = ownRecords.reduce((sum, item) => sum + item.full, 0);
  const answeredKpCount = kpStats.filter((item) => item.answered > 0).length;
  const coverageRate = Math.round((answeredKpCount / KNOWLEDGE_POINTS.length) * 100);

  return {
    studentId,
    classId: studentClassMap.get(studentId) ?? '未分班',
    validAnswers,
    scoreTotal,
    fullTotal,
    overallAccuracy: fullTotal > 0 ? Math.round((scoreTotal / fullTotal) * 100) : 0,
    coverageRate,
    answeredKpCount,
    // 判定规则：有效作答 ≥ 12 条且覆盖 ≥ 6 个知识点 → 记录充足，否则部分信息不足
    recordStatus: validAnswers >= 12 && answeredKpCount >= 6 ? '记录充足' : '部分信息不足',
    kpStats,
    answeredMaterials: [...new Set(ownRecords.map((item) => item.materialId))],
  };
}

const PROFILE_MAP = new Map(
  STUDENT_OPTIONS.slice(1).map((studentId) => [studentId, buildStudentProfile(studentId)])
);

/** 读取学生画像；未选择学生时返回 null */
export function getStudentProfile(studentId) {
  return PROFILE_MAP.get(studentId) ?? null;
}

/* ============================ 群体统计（M4） ============================= */

/** 计算某一班级层面的指标、共性问题与分组对比 */
function buildGroupStatsFor(profiles, classRecords) {
  const totalStudents = profiles.length;
  const scoreTotal = classRecords.reduce((sum, item) => sum + item.score, 0);
  const fullTotal = classRecords.reduce((sum, item) => sum + item.full, 0);

  const kpStats = KNOWLEDGE_POINTS.map((point) => {
    const items = classRecords.filter((item) => item.kpIds.includes(point.id));
    const score = items.reduce((sum, item) => sum + item.score, 0);
    const full = items.reduce((sum, item) => sum + item.full, 0);
    return {
      kpId: point.id,
      name: point.name,
      answered: items.length,
      score,
      full,
      avg: full > 0 ? Math.round((score / full) * 100) : 0,
    };
  });

  // 共性问题：平均正确率低于 60% 的知识点
  const weakPoints = kpStats.filter((item) => item.avg < 60).sort((a, b) => a.avg - b.avg);
  const targets = weakPoints.length
    ? weakPoints
    : [...kpStats].sort((a, b) => a.avg - b.avg).slice(0, 2);

  const teachingTips = {
    高: '安排 1 课时重讲核心概念，配套基础变式练习',
    中: '结合错题集中讲评，增加同类变式练习',
    低: '保持常规练习，关注个别学生的订正情况',
  };

  const commonProblems = targets.map((item) => {
    const level = item.avg < 50 ? '高' : item.avg < 60 ? '中' : '低';
    return {
      ...item,
      level,
      evidence: `${item.answered} 条有效作答，平均正确率 ${item.avg}%`,
      teachingTip: teachingTips[level],
    };
  });

  const sufficientProfiles = profiles.filter((item) => item.recordStatus === '记录充足');
  const insufficientProfiles = profiles.filter((item) => item.recordStatus !== '记录充足');

  const summarize = (list, risk) => {
    if (list.length === 0) {
      return { count: 0, avgAnswers: 0, avgAccuracy: 0, coverage: 0, risk: '暂无样本' };
    }
    const answers = list.reduce((sum, item) => sum + item.validAnswers, 0);
    const score = list.reduce((sum, item) => sum + item.scoreTotal, 0);
    const full = list.reduce((sum, item) => sum + item.fullTotal, 0);
    return {
      count: list.length,
      avgAnswers: Math.round(answers / list.length),
      avgAccuracy: full > 0 ? Math.round((score / full) * 100) : 0,
      coverage: Math.round(list.reduce((sum, item) => sum + item.coverageRate, 0) / list.length),
      risk,
    };
  };

  return {
    classId: profiles[0]?.classId ?? '',
    totalStudents,
    validTotal: classRecords.length,
    overallAccuracy: fullTotal > 0 ? Math.round((scoreTotal / fullTotal) * 100) : 0,
    insufficientCount: insufficientProfiles.length,
    kpStats,
    commonProblems,
    comparison: {
      sufficient: summarize(sufficientProfiles, '个别知识点正确率偏低，需针对性巩固'),
      insufficient: summarize(insufficientProfiles, '样本不足，暂不判定掌握情况，优先补采数据'),
    },
  };
}

/** 全校合并统计（无指定班级时的兜底数据） */
const ALL_GROUP_STATS = buildGroupStatsFor([...PROFILE_MAP.values()], validRecords);

/** 按班级缓存的群体统计 */
const GROUP_STATS_MAP = new Map(
  CLASS_OPTIONS.map((option) => [
    option.id,
    buildGroupStatsFor(
      [...PROFILE_MAP.values()].filter((profile) => profile.classId === option.id),
      validRecords.filter((record) => studentClassMap.get(record.studentId) === option.id)
    ),
  ])
);

/** 读取群体统计：传入班级编号，未指定时使用全校合并数据 */
export function getGroupStats(classId) {
  return GROUP_STATS_MAP.get(classId) ?? ALL_GROUP_STATS;
}

/* ============================ 学习建议（M5） ============================= */

/** 找到该知识点中尚未作答的题目，用于推荐练习 */
function pickMaterials(point, profile) {
  const answered = new Set(profile.answeredMaterials);
  const unused = point.materials.filter((materialId) => !answered.has(materialId));
  return (unused.length ? unused : point.materials).slice(0, 2);
}

/**
 * 根据学生画像生成学习建议。
 * 记录充足：按正确率从低到高输出巩固 / 拓展建议；
 * 信息不足：只输出诊断性练习建议，不出现“薄弱、未掌握”等判定性表述。
 */
export function buildSuggestions(profile, groupStats) {
  const classAvgMap = new Map(groupStats.kpStats.map((item) => [item.kpId, item.avg]));

  const buildEvidence = (stat) => {
    const point = knowledgePointMap.get(stat.kpId);
    return {
      kpId: stat.kpId,
      kpName: stat.name,
      topicName: point.topicName,
      requirement: `【${point.topicName}】${point.requirement}`,
      answered: stat.answered,
      score: stat.score,
      full: stat.full,
      accuracy: stat.accuracy,
      classAvg: classAvgMap.get(stat.kpId) ?? 0,
    };
  };

  const items = [];

  if (profile.recordStatus === '记录充足') {
    const targets = profile.kpStats
      .filter((item) => item.answered > 0)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3);

    targets.forEach((stat) => {
      const point = knowledgePointMap.get(stat.kpId);
      const classAvg = classAvgMap.get(stat.kpId) ?? 0;
      const needsConsolidation = stat.accuracy < 70;

      items.push({
        content: needsConsolidation
          ? `巩固「${stat.name}」：完成错题重练与变式训练`
          : `拓展「${stat.name}」：完成综合应用题训练`,
        materials: pickMaterials(point, profile),
        reason: `该知识点正确率 ${stat.accuracy}%，${
          stat.accuracy < classAvg ? '低于' : '高于'
        }班级平均 ${classAvg}%，${needsConsolidation ? '建议优先巩固' : '可在巩固基础上适度拓展'}。`,
        condition: needsConsolidation
          ? '适用于已完成基础练习、可独立完成常规题的学生'
          : '适用于基础题正确率稳定、需要提升综合运用的学生',
        teacherAdjustable: '可调整练习数量与难度，或替换为同知识点材料',
        evidence: buildEvidence(stat),
      });
    });
  } else {
    // 信息不足：先补齐没有作答记录的知识点
    const uncovered = profile.kpStats.filter((item) => item.answered === 0).slice(0, 2);
    uncovered.forEach((stat) => {
      const point = knowledgePointMap.get(stat.kpId);
      items.push({
        content: `完成「${stat.name}」诊断性练习，补齐学习记录`,
        materials: point.materials.slice(0, 2),
        reason: '该知识点暂无有效作答记录，信息不足，暂不判定掌握情况。',
        condition: '独立作答、不查看解析，建议 15 分钟内完成',
        teacherAdjustable: '可调整诊断题量与材料，优先覆盖未作答知识点',
        evidence: buildEvidence(stat),
      });
    });

    const lowCovered = profile.kpStats
      .filter((item) => item.answered > 0 && item.accuracy < 60)
      .sort((a, b) => a.accuracy - b.accuracy)[0];
    if (lowCovered) {
      const point = knowledgePointMap.get(lowCovered.kpId);
      items.push({
        content: `回顾「${lowCovered.name}」已作答题目，订正错误并说明思路`,
        materials: pickMaterials(point, profile),
        reason: `该知识点已有 ${lowCovered.answered} 条记录，正确率 ${lowCovered.accuracy}%，需补充订正记录。`,
        condition: '在教师或同伴提示下完成订正，避免直接给出答案',
        teacherAdjustable: '可缩减题量，优先选择错题对应的基础题',
        evidence: buildEvidence(lowCovered),
      });
    }

    if (items.length === 0) {
      const stat = profile.kpStats[0];
      const point = knowledgePointMap.get(stat.kpId);
      items.push({
        content: `完成「${stat.name}」诊断性练习，补齐学习记录`,
        materials: point.materials.slice(0, 2),
        reason: '当前有效记录不足，需补充诊断数据后再生成巩固建议。',
        condition: '独立作答，完成后由教师核对答题过程',
        teacherAdjustable: '可根据课堂进度调整诊断材料',
        evidence: buildEvidence(stat),
      });
    }
  }

  return items.map((item, index) => ({
    ...item,
    id: `S${index + 1}`,
    order: index + 1,
    materialsText: item.materials.join('、'),
    teacherNote: '',
  }));
}
