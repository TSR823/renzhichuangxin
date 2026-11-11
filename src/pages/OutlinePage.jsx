import PageScaffold from '../components/PageScaffold';

/** 页面 2：学习内容梳理（任务1 / M1 学习内容与要求清单） */
export default function OutlinePage() {
  return (
    <PageScaffold
      title="学习内容梳理"
      subtitle="梳理课标要求与配套材料，输出结构化学习内容清单，与本页学生数据无关。"
    >
      <div className="rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center">
        <p className="text-sm font-medium text-ink">页面内容待实现</p>
        <p className="mt-1.5 text-xs leading-6 text-muted">
          将包含：分析主题范围说明 · 结构化清单大表格（M1）· 导出 JSON / CSV ·
          知识点依赖关系可视化
        </p>
      </div>
    </PageScaffold>
  );
}
