import { useLocation } from 'react-router-dom';
import {
  NO_STATUS_FILTER_PATHS,
  STUDENT_ROUTE_PATHS,
} from '../config/navigation';
import { useAppState } from '../context/AppStateContext';
import { STATUS_OPTIONS } from '../data/mockData';
import { STUDENT_OPTIONS } from '../data/learningData';
import { cx } from '../utils/cx';
import Select from './Select';

/**
 * 左侧筛选栏。
 * - 公共控件：学习主题、记录状态（部分页面隐藏）、重新加载、模拟新增记录
 * - 学生 ID 下拉仅在 学情分析 / 学习建议 / 案例核对 路由下出现
 */
export default function Sidebar() {
  const { pathname } = useLocation();
  const {
    topic,
    setTopic,
    status,
    setStatus,
    studentId,
    setStudentId,
    loading,
    reload,
    addRecord,
  } = useAppState();

  const showStudentSelect = STUDENT_ROUTE_PATHS.includes(pathname);
  const showStatusFilter = !NO_STATUS_FILTER_PATHS.includes(pathname);

  return (
    <aside className="relative z-10 flex w-[240px] shrink-0 flex-col gap-5 overflow-y-auto border-r border-line bg-page px-5 py-6">
      {/* 学习主题：文本输入框，聚焦时主色描边 */}
      <label className="block">
        <span className="sr-only">学习主题</span>
        <input
          type="text"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          placeholder="学习主题"
          className={cx(
            'h-10 w-full rounded-lg border border-line bg-white px-3 text-center text-[13px]',
            'text-ink placeholder:text-muted',
            'transition-colors duration-150',
            'focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30'
          )}
        />
      </label>

      {/* 记录状态：按设计稿在学习建议 / 案例核对页面隐藏 */}
      {showStatusFilter && (
        <Select
          ariaLabel="记录状态筛选"
          displayText={`记录状态 · ${status}`}
          value={status}
          options={STATUS_OPTIONS}
          onChange={setStatus}
        />
      )}

      {/* 重新加载数据集：模拟请求 → 恢复初始数据 */}
      <button
        type="button"
        onClick={reload}
        disabled={loading}
        className={cx(
          'flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-line bg-white',
          'text-[13px] text-ink transition-colors duration-150',
          'hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-60'
        )}
      >
        {loading && (
          <span
            aria-hidden="true"
            className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-brand/30 border-t-brand"
          />
        )}
        {loading ? '加载中…' : '重新加载数据集'}
      </button>

      {/* 模拟新增记录：向样例表插入一条缺失记录，并同步指标 */}
      <button
        type="button"
        onClick={addRecord}
        className={cx(
          'h-10 w-full rounded-lg border border-line bg-white text-[13px] text-ink',
          'transition-colors duration-150 hover:border-brand hover:text-brand'
        )}
      >
        模拟新增记录
      </button>

      {/* 学生 ID：仅页面 3/4/5 出现，默认主色描边；选中结果在三个页面间共享 */}
      {showStudentSelect && (
        <div className="space-y-2">
          <Select
            ariaLabel="学生 ID 筛选"
            displayText={`学生ID · ${studentId}`}
            value={studentId}
            options={STUDENT_OPTIONS}
            onChange={setStudentId}
            accent
          />
          {pathname === '/analysis' && (
            <p className="px-1 text-center text-[11px] leading-5 text-muted">
              请选择一名学生查看个体学情
            </p>
          )}
        </div>
      )}
    </aside>
  );
}
