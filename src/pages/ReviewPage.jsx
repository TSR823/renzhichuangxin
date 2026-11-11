import PageScaffold from '../components/PageScaffold';
import { useAppState } from '../context/AppStateContext';

/** 页面 5：案例核对 & 证据溯源（M6），内置案例 Tab 与系统设置 Tab */
export default function ReviewPage() {
  const { studentId } = useAppState();

  return (
    <PageScaffold
      title="案例核对 & 证据溯源"
      subtitle="以「学习要求 → 已有表现 → 学习建议」三栏对照核验证据链，并导出成果包。"
    >
      <p className="mb-4 rounded-lg bg-card px-4 py-3 text-xs text-muted">
        当前继承学生：
        <span className="font-medium text-ink">
          {studentId === '全部学生' ? '未选择（可在左侧学生ID中选择）' : studentId}
        </span>
      </p>

      <div className="rounded-lg border border-dashed border-line bg-page/60 px-6 py-12 text-center">
        <p className="text-sm font-medium text-ink">页面内容待实现</p>
        <p className="mt-1.5 text-xs leading-6 text-muted">
          将包含：案例A / 案例B / 多学生对比 / 系统设置与成果包导出 4 个 Tab ·
          三栏对照大表格 · 模拟新增记录后证据刷新
        </p>
      </div>
    </PageScaffold>
  );
}
