/**
 * 数据质量报告相关的静态配置。
 * 指标数值与样例记录由真实数据在 learningData.js 中计算得出。
 */

/** 记录状态筛选 */
export const STATUS_OPTIONS = ['全部状态', '缺失记录', '异常越界', '重复记录'];

/** 数据清洗规则说明（与 learningData.js 中的清洗逻辑保持一致） */
export const CLEANING_RULES = [
  {
    key: 'missing',
    title: '缺失标记：',
    desc: '得分为空（待评分 / 未作答）→ 标记为信息不足，不参与正确率计算',
  },
  {
    key: 'abnormal',
    title: '异常越界：',
    desc: '得分不在 [0, 满分] 范围内 → 标记为异常数据，排除统计',
  },
  {
    key: 'duplicate',
    title: '重复合并：',
    desc: '同一学生同一题目多条记录 → 保留最新提交时间一条，其余标记为重复',
  },
];

/** 异常/缺失类型 → 标签配色（提醒色 / 警示色） */
export const TYPE_BADGE_STYLE = {
  缺失记录: 'bg-warn text-[#A9761C]',
  异常越界: 'bg-danger text-[#B4544F]',
  重复记录: 'bg-card text-muted',
};
