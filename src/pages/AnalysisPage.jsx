import { useEffect, useMemo, useState } from 'react';
import Modal from '../components/Modal';
import { useAppState } from '../context/AppStateContext';
import {
  CLASS_OPTIONS,
  KNOWLEDGE_POINTS,
  getGroupStats,
  getStudentProfile,
} from '../data/learningData';
import { CLEANING_RULES, TYPE_BADGE_STYLE } from '../data/mockData';
import { cx } from '../utils/cx';

/* =============================================================================
 * 页面 3：学情数据分析（/analysis）
 * -----------------------------------------------------------------------------
 * 本文件内包含三个 Tab 的内容组件：
 *   - QualityTabContent    Tab1 数据质量报告（M2）
 *   - IndividualTabContent Tab2 个体学情分析（M3，需先选择学生）
 *   - GroupTabContent      Tab3 群体学情分析（M4，班级层面）
 * 三个内容组件通过 useState 控制的 activeTab 无缝切换。
 * ========================================================================== */

const TABS = [
  { key: 'quality', label: 'Tab1 数据质量报告' },
  { key: 'individual', label: 'Tab2 个体学情' },
  { key: 'group', label: 'Tab3 群体学情' },
];

/** 数据质量样例表格列宽 */
const TABLE_GRID = 'grid grid-cols-[1fr_1.2fr_1.2fr_1.6fr_1.2fr] items-center gap-4';

/* ============================== 公共图表组件 ============================== */

/** 根据正确率返回柱子颜色：良好 / 一般 / 待巩固 */
function barColorClass(value) {
  if (value >= 75) return 'bg-brand';
  if (value >= 60) return 'bg-[#E7C57E]';
  return 'bg-[#DDA5A1]';
}

/**
 * 知识点正确率条形图（纯 CSS 实现，可直接替换为图表库或占位 div）。
 * data: [{ id, name, value }]，value 为 0~100 或 null（无作答记录）。
 */
function KnowledgeChart({ data }) {
  return (
    <div className="mt-4 space-y-2.5">
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <span
            className="w-[190px] shrink-0 truncate text-[11px] text-muted"
            title={`${item.id} ${item.name}`}
          >
            <span className="font-medium text-ink">{item.id}</span> {item.name}
          </span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-page">
            {item.value != null && (
              <div
                className={cx('h-full rounded-full', barColorClass(item.value))}
                style={{ width: `${Math.max(item.value, 2)}%` }}
              />
            )}
          </div>
          <span
            className={cx(
              'w-12 shrink-0 text-right text-[11px]',
              item.value == null ? 'text-muted' : 'font-medium text-ink'
            )}
          >
            {item.value == null ? '无数据' : `${item.value}%`}
          </span>
        </div>
      ))}
    </div>
  );
}

/** 图表图例 */
function ChartLegend() {
  const items = [
    { label: '≥ 75% 良好', color: 'bg-brand' },
    { label: '60%~74% 一般', color: 'bg-[#E7C57E]' },
    { label: '< 60% 待巩固', color: 'bg-[#DDA5A1]' },
    { label: '无数据', color: 'bg-line' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-1.5 text-[11px] text-muted">
          <span className={cx('h-2 w-2 rounded-sm', item.color)} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

/* ============================ Tab1 数据质量报告 ========================== */

function AlertIcon({ className }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8 2.2 14.2 13a.6.6 0 0 1-.5.9H2.3a.6.6 0 0 1-.5-.9L8 2.2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M8 6.1v3.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="11.2" r="0.7" fill="currentColor" />
    </svg>
  );
}

/**
 * 指标卡配色：
 * 总记录 / 重复记录 → #EDF6F3 普通卡片底色
 * 缺失记录 → #FFF3D9 淡蜜杏（温和提示，不是错误）
 * 异常记录 → #F9E7E7 极淡豆沙粉（脏数据区分，低饱和）
 */
const METRIC_BG = {
  total: 'bg-card',
  missing: 'bg-warn',
  duplicate: 'bg-card',
  abnormal: 'bg-danger',
};

function MetricCards({ metrics }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.key}
          className={cx(
            'rounded-lg border border-line/60 px-6 py-4',
            METRIC_BG[metric.key] || 'bg-card'
          )}
        >
          <p className="text-xs text-muted">{metric.label}</p>
          <p className="mt-3 text-4xl font-bold leading-none tracking-tight text-ink tabular-nums">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Tab1：数据质量报告 */
function QualityTabContent({ metrics, rows }) {
  return (
    <>
      <div className="px-6 pb-6">
        <MetricCards metrics={metrics} />
      </div>

      {/* 规则说明区 */}
      <section className="border-t border-line px-6 py-5">
        <h2 className="text-[13px] font-semibold text-ink">数据清洗规则说明</h2>

        <div className="mt-2.5 space-y-1 text-xs leading-6 text-muted">
          {CLEANING_RULES.map((rule) => (
            <p key={rule.key}>
              <span className="text-ink">{rule.title}</span>
              {rule.desc}
            </p>
          ))}
        </div>

        <p className="mt-3 inline-flex items-center gap-1.5 rounded bg-warn px-2.5 py-1.5 text-xs font-medium text-[#A9761C]">
          <AlertIcon className="h-3.5 w-3.5" />
          警示：信息不足 <span className="font-semibold">≠</span> 判定未掌握
        </p>
      </section>

      {/* 异常/缺失样例预览 */}
      <section className="border-t border-line px-6 py-5">
        <h2 className="text-[13px] font-semibold text-ink">异常/缺失样例预览</h2>

        <div className="mt-4 overflow-x-auto">
          <div className="min-w-[640px]">
            <div
              className={cx(
                TABLE_GRID,
                'border-b border-line py-2.5 text-xs font-medium text-muted'
              )}
            >
              <span>学生ID</span>
              <span>题目编号</span>
              <span>测验节点</span>
              <span>异常/缺失类型</span>
              <span>数据状态</span>
            </div>

            {rows.map((row) => (
              <div
                key={row.recordId}
                className={cx(
                  TABLE_GRID,
                  'border-b border-line py-3.5 text-xs text-ink',
                  'transition-colors last:border-b-0 hover:bg-page/70'
                )}
              >
                <span className="font-medium">{row.studentId}</span>
                <span className="text-ink/80">{row.questionId}</span>
                <span className="text-ink/80">{row.node}</span>
                <span>
                  <span
                    className={cx(
                      'inline-flex items-center rounded px-2.5 py-1 font-medium',
                      TYPE_BADGE_STYLE[row.type]
                    )}
                  >
                    {row.type}
                  </span>
                </span>
                <span className="text-muted">{row.status}</span>
              </div>
            ))}

            {rows.length === 0 && (
              <div className="py-10 text-center text-xs text-muted">
                当前筛选条件下暂无异常/缺失样例
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================ Tab2 个体学情分析 ========================== */

const STATUS_STYLE = {
  记录充足: 'bg-brand/25 text-ink',
  部分信息不足: 'bg-warn text-[#A9761C]',
};

/** 学情摘要中的“查看依据”按钮 */
function EvidenceButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded border border-line px-2.5 py-1 text-[11px] text-brand transition-colors hover:border-brand hover:bg-card"
    >
      查看依据
    </button>
  );
}

/**
 * Tab2：个体学情分析。
 * 顶部为学生编号 / 指标 / 状态标签，中间为知识点正确率图表，
 * 下方学情摘要表格的每一行均可打开依据弹窗。
 */
function IndividualTabContent({ profile, groupStats }) {
  const [evidenceType, setEvidenceType] = useState(null);

  const chartData = profile.kpStats.map((item) => ({
    id: item.kpId,
    name: item.name,
    value: item.accuracy,
  }));

  const weakPoints = profile.kpStats.filter((item) => item.answered > 0 && item.accuracy < 65);
  const missingPoints = profile.kpStats.filter((item) => item.answered === 0);
  const classAvgMap = new Map(groupStats.kpStats.map((item) => [item.kpId, item.avg]));

  /** 学情摘要表格数据：材料编号 / 待巩固 / 信息不足 */
  const summaryRows = [
    {
      key: 'materials',
      label: '材料编号',
      content: profile.answeredMaterials.length
        ? `${profile.answeredMaterials.slice(0, 10).join('、')}${
            profile.answeredMaterials.length > 10 ? ' 等' : ''
          }（共 ${profile.answeredMaterials.length} 份）`
        : '暂无有效作答记录',
    },
    {
      key: 'weak',
      label: '待巩固知识点',
      content: weakPoints.length
        ? weakPoints.map((item) => `${item.name}（${item.accuracy}%）`).join('、')
        : '暂无（各知识点正确率均不低于 65%）',
    },
    {
      key: 'missing',
      label: '信息不足知识点',
      content: missingPoints.length
        ? missingPoints.map((item) => `${item.name}（无作答记录，暂不判定）`).join('、')
        : '暂无',
    },
  ];

  const evidenceTitle = {
    materials: '依据 · 已作答材料明细',
    weak: '依据 · 待巩固知识点统计',
    missing: '依据 · 信息不足知识点说明',
  };

  return (
    <>
      {/* 顶部状态卡片：学生编号 + 指标 + 状态标签 */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 rounded-lg bg-card px-5 py-4">
          <div>
            <p className="text-[11px] text-muted">学生编号</p>
            <p className="mt-1 text-sm font-semibold text-ink">{profile.studentId}</p>
          </div>
          <div>
            <p className="text-[11px] text-muted">所在班级</p>
            <p className="mt-1 text-sm font-semibold text-ink">{profile.classId}</p>
          </div>
          <div>
            <p className="text-[11px] text-muted">有效作答数</p>
            <p className="mt-1 text-sm font-semibold text-ink">{profile.validAnswers} 条</p>
          </div>
          <div>
            <p className="text-[11px] text-muted">记录覆盖度</p>
            <p className="mt-1 text-sm font-semibold text-ink">
              {profile.answeredKpCount}/{KNOWLEDGE_POINTS.length}
              <span className="ml-1 text-xs font-normal text-muted">
                （{profile.coverageRate}%）
              </span>
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted">整体正确率</p>
            <p className="mt-1 text-sm font-semibold text-ink">{profile.overallAccuracy}%</p>
          </div>
          <span
            className={cx(
              'ml-auto rounded px-2.5 py-1 text-xs font-medium',
              STATUS_STYLE[profile.recordStatus]
            )}
          >
            {profile.recordStatus}
          </span>
        </div>
      </div>

      {/* 知识点正确率图表 */}
      <div className="px-6 pb-5">
        <div className="rounded-lg border border-line p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[13px] font-semibold text-ink">各知识点答题正确率</h2>
            <ChartLegend />
          </div>
          <KnowledgeChart data={chartData} />
          {missingPoints.length > 0 && (
            <p className="mt-3 rounded bg-warn px-3 py-2 text-[11px] leading-5 text-[#A9761C]">
              信息不足 ≠ 判定未掌握：{missingPoints.map((item) => item.name).join('、')}
              暂无有效作答记录，未纳入正确率判断。
            </p>
          )}
        </div>
      </div>

      {/* 学情摘要表格 */}
      <section className="border-t border-line px-6 py-5">
        <h2 className="text-[13px] font-semibold text-ink">学情摘要</h2>

        <div className="mt-4 overflow-hidden rounded-lg border border-line">
          <div className="grid grid-cols-[150px_1fr_90px] items-center gap-4 bg-page px-4 py-2.5 text-xs font-medium text-muted">
            <span>项目</span>
            <span>内容</span>
            <span className="text-right">操作</span>
          </div>

          {summaryRows.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-[150px_1fr_90px] items-center gap-4 border-t border-line px-4 py-3 text-xs"
            >
              <span className="font-medium text-ink">{row.label}</span>
              <span className="leading-6 text-muted">{row.content}</span>
              <span className="text-right">
                <EvidenceButton onClick={() => setEvidenceType(row.key)} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 依据弹窗 */}
      <Modal
        open={Boolean(evidenceType)}
        title={evidenceType ? evidenceTitle[evidenceType] : ''}
        onClose={() => setEvidenceType(null)}
      >
        {evidenceType === 'materials' && (
          <div className="space-y-2 text-xs leading-6 text-muted">
            <p className="text-ink">按知识点统计的有效作答材料：</p>
            {KNOWLEDGE_POINTS.map((point, index) => {
              const answered = profile.kpStats[index].answered;
              return (
                <p key={point.id} className="rounded bg-page px-3 py-2">
                  <span className="font-medium text-ink">
                    {point.id} {point.name}
                  </span>
                  ：{answered > 0 ? point.materials.slice(0, answered).join('、') : '无'}
                  <span className="ml-1">（{answered} 条）</span>
                </p>
              );
            })}
          </div>
        )}

        {evidenceType === 'weak' && (
          <div className="space-y-2 text-xs leading-6 text-muted">
            {weakPoints.length > 0 ? (
              <>
                <p className="text-ink">正确率低于 65% 的知识点统计：</p>
                {weakPoints.map((item) => (
                  <p key={item.kpId} className="rounded bg-page px-3 py-2">
                    <span className="font-medium text-ink">
                      {item.kpId} {item.name}
                    </span>
                    ：有效作答 {item.answered} 条，得分 {item.score} / {item.full}，正确率{' '}
                    <span className="font-medium text-ink">{item.accuracy}%</span>；班级平均{' '}
                    {classAvgMap.get(item.kpId)}%。
                  </p>
                ))}
              </>
            ) : (
              <p>暂无待巩固知识点。</p>
            )}
            <p className="text-[11px]">统计口径：缺失记录不计入正确率，重复记录只保留最新一条。</p>
          </div>
        )}

        {evidenceType === 'missing' && (
          <div className="space-y-2 text-xs leading-6 text-muted">
            {missingPoints.length > 0 ? (
              <>
                {missingPoints.map((item) => (
                  <p key={item.kpId} className="rounded bg-warn px-3 py-2 text-[#A9761C]">
                    {item.kpId} {item.name}：暂无有效作答记录。
                  </p>
                ))}
                <p>
                  信息不足 ≠ 判定未掌握：以上知识点仅表示当前缺少可用的学习记录，系统不据此输出
                  薄弱或未掌握结论，建议优先安排诊断性练习补充数据。
                </p>
              </>
            ) : (
              <p>暂无信息不足知识点。</p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}

/* ============================ Tab3 群体学情分析 ========================== */

const LEVEL_STYLE = {
  高: 'bg-danger text-[#B4544F]',
  中: 'bg-warn text-[#A9761C]',
  低: 'bg-card text-muted',
};

/** Tab3：群体学情分析（按班级统计，不做两班合并） */
function GroupTabContent({ stats, classId, onClassChange }) {
  const chartData = stats.kpStats.map((item) => ({
    id: item.kpId,
    name: item.name,
    value: item.avg,
  }));

  const classSummary = CLASS_OPTIONS.map((item) => `${item.id} 班 ${item.count} 人`).join('、');

  const overviewCards = [
    { label: '班级学生数', value: stats.totalStudents, unit: '人' },
    { label: '有效作答记录', value: stats.validTotal, unit: '条' },
    { label: '班级平均正确率', value: stats.overallAccuracy, unit: '%' },
    { label: '记录不足学生', value: stats.insufficientCount, unit: '人' },
  ];

  const comparisonRows = [
    {
      label: '人数',
      sufficient: `${stats.comparison.sufficient.count} 人`,
      insufficient: `${stats.comparison.insufficient.count} 人`,
    },
    {
      label: '人均有效作答',
      sufficient: `${stats.comparison.sufficient.avgAnswers} 条`,
      insufficient: `${stats.comparison.insufficient.avgAnswers} 条`,
    },
    {
      label: '平均正确率',
      sufficient: `${stats.comparison.sufficient.avgAccuracy}%`,
      insufficient: `${stats.comparison.insufficient.avgAccuracy}%`,
    },
    {
      label: '知识点覆盖率',
      sufficient: `${stats.comparison.sufficient.coverage}%`,
      insufficient: `${stats.comparison.insufficient.coverage}%`,
    },
    {
      label: '主要风险',
      sufficient: stats.comparison.sufficient.risk,
      insufficient: stats.comparison.insufficient.risk,
    },
  ];

  return (
    <>
      {/* 班级切换：DC01 / DC02 分别统计，不合并 */}
      <div className="px-6 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-[13px] font-semibold text-ink">班级群体学情</h2>
            <p className="mt-1 text-[11px] text-muted">
              {classSummary}，按班级分别统计；选择学生后默认跟随其所在班级。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CLASS_OPTIONS.map((option) => {
              const active = option.id === classId;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => onClassChange(option.id)}
                  className={cx(
                    'rounded-lg border px-3 py-1.5 text-xs transition-colors',
                    active
                      ? 'border-brand bg-card font-semibold text-ink'
                      : 'border-line text-muted hover:border-brand hover:text-ink'
                  )}
                >
                  {option.id} 班
                  <span className="ml-1 text-[11px] font-normal text-muted">
                    {option.count} 人
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 班级整体统计卡片 */}
      <div className="px-6 pb-5">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {overviewCards.map((card) => (
            <div key={card.label} className="rounded-lg border border-line/60 bg-card px-5 py-4">
              <p className="text-xs text-muted">{card.label}</p>
              <p className="mt-3 text-3xl font-bold leading-none tracking-tight text-ink tabular-nums">
                {card.value}
                <span className="ml-1 text-xs font-normal text-muted">{card.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 本班知识点平均正确率 */}
      <div className="px-6 pb-5">
        <div className="rounded-lg border border-line p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-[13px] font-semibold text-ink">
              {stats.classId} 班各知识点平均正确率
            </h2>
            <span className="text-[11px] text-muted">统计口径：有效作答记录，缺失不计入</span>
          </div>
          <KnowledgeChart data={chartData} />
        </div>
      </div>

      {/* 共性问题 */}
      <section className="border-t border-line px-6 py-5">
        <h2 className="text-[13px] font-semibold text-ink">共性问题</h2>

        <div className="mt-4 overflow-x-auto">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[1.1fr_0.8fr_1.6fr_1.8fr] items-center gap-4 border-b border-line py-2.5 text-xs font-medium text-muted">
              <span>知识点</span>
              <span>群体薄弱程度</span>
              <span>统计依据</span>
              <span>教学提示</span>
            </div>

            {stats.commonProblems.map((item) => (
              <div
                key={item.kpId}
                className="grid grid-cols-[1.1fr_0.8fr_1.6fr_1.8fr] items-center gap-4 border-b border-line py-3 text-xs text-ink last:border-b-0"
              >
                <span>
                  <span className="font-medium">{item.name}</span>
                  <span className="ml-1 text-[11px] text-muted">{item.kpId}</span>
                </span>
                <span>
                  <span
                    className={cx(
                      'inline-flex rounded px-2.5 py-1 font-medium',
                      LEVEL_STYLE[item.level]
                    )}
                  >
                    {item.level}
                  </span>
                </span>
                <span className="text-muted">{item.evidence}</span>
                <span className="text-muted">{item.teachingTip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 群体差异对比 */}
      <section className="border-t border-line px-6 py-5">
        <h2 className="text-[13px] font-semibold text-ink">群体差异对比</h2>

        <div className="mt-4 overflow-hidden rounded-lg border border-line">
          <div className="grid grid-cols-[140px_1fr_1fr] items-center gap-4 bg-page px-4 py-2.5 text-xs font-medium text-muted">
            <span>对比维度</span>
            <span>记录充足组</span>
            <span>信息不足组</span>
          </div>

          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[140px_1fr_1fr] items-center gap-4 border-t border-line px-4 py-3 text-xs"
            >
              <span className="font-medium text-ink">{row.label}</span>
              <span className="text-muted">{row.sufficient}</span>
              <span className="text-muted">{row.insufficient}</span>
            </div>
          ))}
        </div>

        <p className="mt-3 rounded bg-warn px-3 py-2 text-[11px] leading-5 text-[#A9761C]">
          信息不足组仅代表记录覆盖度不足，暂不参与掌握情况判定，建议优先补充诊断性练习。
        </p>
      </section>
    </>
  );
}

/* ================================ Tab 切换 =============================== */

function TabBar({ activeTab, onChange }) {
  return (
    <div className="flex items-center gap-10 overflow-x-auto px-6">
      {TABS.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.key)}
            className={cx(
              'relative shrink-0 py-4 text-[13px] transition-colors',
              active ? 'font-semibold text-brand' : 'text-muted hover:text-ink'
            )}
          >
            {tab.label}
            <span
              aria-hidden="true"
              className={cx(
                'absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand transition-opacity',
                active ? 'opacity-100' : 'opacity-0'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

/** 未选择学生时 Tab2 的提示 */
function StudentRequiredPanel() {
  return (
    <div className="px-6 pb-6">
      <div className="flex h-[280px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-page/60">
        <p className="text-sm font-medium text-ink">尚未选择学生</p>
        <p className="text-xs text-muted">
          请先在左侧「学生ID」下拉框中选择学生，再查看个体学情。
        </p>
      </div>
    </div>
  );
}

/* ================================ 页面组件 =============================== */

export default function AnalysisPage() {
  const { metrics, rows, studentId, status } = useAppState();
  const [activeTab, setActiveTab] = useState('quality');

  const profile = useMemo(
    () => (studentId === '全部学生' ? null : getStudentProfile(studentId)),
    [studentId]
  );
  // 群体学情按班级统计：默认 DC01，选中学生后自动跟随该生所在班级
  const [classId, setClassId] = useState(CLASS_OPTIONS[0]?.id ?? '');
  useEffect(() => {
    if (profile?.classId) setClassId(profile.classId);
  }, [profile]);
  const groupStats = useMemo(() => getGroupStats(classId), [classId]);

  /** 数据质量样例按学生、记录状态过滤 */
  const filteredRows = useMemo(
    () =>
      rows.filter(
        (row) =>
          (studentId === '全部学生' || row.studentId === studentId) &&
          (status === '全部状态' || row.type === status)
      ),
    [rows, studentId, status]
  );

  return (
    <section className="rounded-lg border border-line bg-white">
      <TabBar activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'quality' && (
        <QualityTabContent metrics={metrics} rows={filteredRows} />
      )}

      {activeTab === 'individual' &&
        (profile ? (
          <IndividualTabContent profile={profile} groupStats={groupStats} />
        ) : (
          <StudentRequiredPanel />
        ))}

      {activeTab === 'group' && (
        <GroupTabContent stats={groupStats} classId={classId} onClassChange={setClassId} />
      )}
    </section>
  );
}
