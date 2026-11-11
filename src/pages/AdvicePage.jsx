import { useEffect, useMemo, useState } from 'react';
import Modal from '../components/Modal';
import { useAppState } from '../context/AppStateContext';
import {
  KNOWLEDGE_POINTS,
  buildSuggestions,
  getGroupStats,
  getStudentProfile,
} from '../data/learningData';
import { cx } from '../utils/cx';

/**
 * 页面 4：个性化学习建议（竞赛任务3 / M5）
 * - 继承页面 3 已选学生；未选择时给出引导
 * - 记录充足：输出巩固 / 拓展建议；信息不足：只输出诊断性练习建议
 * - 支持查看证据链、教师调整、导出 JSON / CSV
 */

/** 将“M01、M02”形式的输入解析为数组 */
const parseMaterials = (text) => text.split(/[、,，\s]+/).filter(Boolean);

/** CSV 单元格转义 */
const csvCell = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;

/** 触发浏览器下载 */
function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export default function AdvicePage() {
  const { studentId } = useAppState();
  const profile = useMemo(
    () => (studentId === '全部学生' ? null : getStudentProfile(studentId)),
    [studentId]
  );
  // 班级均值取该生所在班级（DC01 / DC02），不做两班合并
  const groupStats = useMemo(() => getGroupStats(profile?.classId), [profile]);

  const [items, setItems] = useState([]);
  const [evidence, setEvidence] = useState(null);

  // 切换学生时重新生成建议并清空弹窗
  useEffect(() => {
    setItems(profile ? buildSuggestions(profile, groupStats) : []);
    setEvidence(null);
  }, [studentId, profile, groupStats]);

  /** 更新单条建议（材料编号 / 调整理由） */
  const updateItem = (id, patch) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  /** 调整建议执行顺序 */
  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    setItems((prev) => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  /** 打开证据链弹窗 */
  const openEvidence = (item) => {
    setEvidence({ ...item.evidence, materials: parseMaterials(item.materialsText) });
  };

  /** 导出当前学生的建议 */
  const handleExport = (format) => {
    if (!profile || items.length === 0) return;

    const payload = items.map((item, index) => ({
      order: index + 1,
      content: item.content,
      materials: parseMaterials(item.materialsText),
      reason: item.reason,
      condition: item.condition,
      teacherAdjustable: item.teacherAdjustable,
      teacherNote: item.teacherNote.trim(),
    }));

    if (format === 'json') {
      downloadFile(
        `学习建议_${profile.studentId}.json`,
        JSON.stringify(
          {
            studentId: profile.studentId,
            recordStatus: profile.recordStatus,
            validAnswers: profile.validAnswers,
            suggestions: payload,
          },
          null,
          2
        ),
        'application/json;charset=utf-8'
      );
      return;
    }

    const headers = ['执行顺序', '建议学习内容', '材料编号', '选择理由', '适用条件', '教师调整说明'];
    const lines = payload.map((item) =>
      [
        item.order,
        item.content,
        item.materials.join('、'),
        item.reason,
        item.condition,
        item.teacherNote,
      ]
        .map(csvCell)
        .join(',')
    );
    downloadFile(
      `学习建议_${profile.studentId}.csv`,
      `\uFEFF${[headers.map(csvCell).join(','), ...lines].join('\n')}`,
      'text/csv;charset=utf-8'
    );
  };

  const isSufficient = profile?.recordStatus === '记录充足';

  return (
    <div className="space-y-4">
      {/* 页头 + 状态提示 + 导出 */}
      <section className="rounded-lg border border-line bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-base font-semibold text-ink">个性化学习建议</h1>
            <p className="mt-1 text-xs text-muted">
              基于个体学情证据生成，支持教师调整与证据链溯源。
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleExport('json')}
              disabled={!profile || items.length === 0}
              className="h-9 rounded-lg border border-line px-3 text-xs text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50"
            >
              导出 JSON
            </button>
            <button
              type="button"
              onClick={() => handleExport('csv')}
              disabled={!profile || items.length === 0}
              className="h-9 rounded-lg border border-line px-3 text-xs text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50"
            >
              导出 CSV
            </button>
          </div>
        </div>

        {!profile && (
          <p className="mt-4 rounded-lg bg-warn px-4 py-3 text-xs font-medium leading-6 text-[#A9761C]">
            请前往学情分析页面选择学生后，再查看个性化学习建议。
          </p>
        )}

        {profile && (
          <div
            className={cx(
              'mt-4 rounded-lg px-4 py-3',
              isSufficient ? 'bg-card' : 'bg-warn'
            )}
          >
            <p
              className={cx(
                'text-xs font-medium',
                isSufficient ? 'text-ink' : 'text-[#A9761C]'
              )}
            >
              当前学生：{profile.studentId} · {profile.classId} 班 ·{' '}
              {isSufficient ? '记录充足' : '信息不足，优先完成诊断性练习收集数据'}
            </p>
            <p
              className={cx(
                'mt-1 text-[11px] leading-5',
                isSufficient ? 'text-muted' : 'text-[#A9761C]'
              )}
            >
              有效作答 {profile.validAnswers} 条 · 覆盖 {profile.answeredKpCount}/
              {KNOWLEDGE_POINTS.length} 个知识点 · 整体正确率 {profile.overallAccuracy}%
              {!isSufficient && ' · 信息不足 ≠ 判定未掌握'}
            </p>
          </div>
        )}
      </section>

      {/* 建议卡片列表 */}
      {profile && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <article key={item.id} className="rounded-lg border border-line bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/25 text-xs font-semibold text-ink">
                    {index + 1}
                  </span>
                  <h2 className="text-sm font-semibold text-ink">{item.content}</h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => moveItem(index, -1)}
                    disabled={index === 0}
                    className="rounded border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    上移
                  </button>
                  <button
                    type="button"
                    onClick={() => moveItem(index, 1)}
                    disabled={index === items.length - 1}
                    className="rounded border border-line px-2 py-1 text-[11px] text-muted transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    下移
                  </button>
                  <button
                    type="button"
                    onClick={() => openEvidence(item)}
                    className="rounded border border-line px-2.5 py-1 text-[11px] text-brand transition-colors hover:border-brand hover:bg-card"
                  >
                    查看证据链
                  </button>
                </div>
              </div>

              <dl className="mt-4 grid gap-4 text-xs md:grid-cols-2">
                <div>
                  <dt className="text-muted">对应材料 / 练习编号（可替换）</dt>
                  <dd className="mt-1.5">
                    <input
                      value={item.materialsText}
                      onChange={(event) =>
                        updateItem(item.id, { materialsText: event.target.value })
                      }
                      className="h-9 w-full rounded-lg border border-line px-3 text-xs text-ink transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                    />
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">选择理由</dt>
                  <dd className="mt-1.5 leading-6 text-ink">{item.reason}</dd>
                </div>
                <div>
                  <dt className="text-muted">适用条件</dt>
                  <dd className="mt-1.5 leading-6 text-ink">{item.condition}</dd>
                </div>
                <div>
                  <dt className="text-muted">教师可调整点</dt>
                  <dd className="mt-1.5 leading-6 text-muted">{item.teacherAdjustable}</dd>
                </div>
              </dl>

              <div className="mt-3 rounded-lg bg-page px-3 py-2.5">
                <label className="block">
                  <span className="text-[11px] text-muted">
                    教师调整理由（随成果包导出留痕）
                  </span>
                  <input
                    value={item.teacherNote}
                    onChange={(event) =>
                      updateItem(item.id, { teacherNote: event.target.value })
                    }
                    placeholder="例如：该生计算基础薄弱，增加 2 道基础计算题"
                    className="mt-1.5 h-9 w-full rounded-lg border border-line bg-white px-3 text-xs text-ink placeholder:text-muted transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                  />
                </label>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* 证据链弹窗：课标要求 + 学习记录统计 */}
      <Modal
        open={Boolean(evidence)}
        title="证据链 · 课标要求与学习记录"
        onClose={() => setEvidence(null)}
      >
        {evidence && (
          <div className="space-y-4 text-xs leading-6 text-muted">
            <section>
              <h3 className="text-sm font-semibold text-ink">
                {evidence.kpName}
                <span className="ml-1.5 text-[11px] font-normal text-muted">{evidence.kpId}</span>
              </h3>
              <p className="mt-1">
                <span className="text-ink">课标学习要求：</span>
                {evidence.requirement}
              </p>
            </section>

            <section className="rounded-lg bg-card px-4 py-3">
              <p>
                <span className="text-ink">该生学习记录：</span>有效作答 {evidence.answered} 条，
                得分 {evidence.score} / {evidence.full}，正确率 {evidence.accuracy}%。
              </p>
              <p>
                <span className="text-ink">班级参照：</span>该知识点班级平均正确率{' '}
                {evidence.classAvg}%。
              </p>
              <p className="mt-1 text-[11px]">
                统计口径：缺失记录不计入正确率；同一知识点多条记录按最新一条统计。
              </p>
            </section>

            <section>
              <p className="text-ink">关联材料编号</p>
              <p className="mt-1">{evidence.materials.join('、') || '暂无'}</p>
            </section>

            {!isSufficient && (
              <p className="rounded bg-warn px-3 py-2 text-[#A9761C]">
                信息不足 ≠ 判定未掌握：该建议仅表示当前记录不足，不代表学生未掌握该知识点。
              </p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
