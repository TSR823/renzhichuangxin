import PageScaffold from '../components/PageScaffold';

/** 页面 1：首页（总览仪表盘）—— 展示群体数据，不涉及单个学生 */
export default function HomePage() {
  return (
    <PageScaffold
      title="首页 · 总览仪表盘"
      subtitle="数据集概览与功能快捷入口，仅展示群体数据，不涉及单个学生。"
    >
      <div className="rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center">
        <p className="text-sm font-medium text-ink">页面内容待实现</p>
        <p className="mt-1.5 text-xs leading-6 text-muted">
          将包含：项目简介卡片 · 总学生数 / 总学习记录 / 缺失 / 异常指标行 · 4 个功能入口卡片 ·
          各知识点平均正确率柱状图
        </p>
      </div>
    </PageScaffold>
  );
}
