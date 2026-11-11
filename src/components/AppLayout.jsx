import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

/**
 * 系统整体布局：顶部导航 + 左侧筛选栏 + 右侧路由内容区。
 * 5 个页面共用此布局，通过 <Outlet /> 渲染当前路由页面。
 */
export default function AppLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-page text-ink">
      <TopNav />

      <div className="flex min-h-0 flex-1">
        <Sidebar />

        {/* 路由页面容器：独立滚动，保证侧边栏与导航固定 */}
        <main className="min-w-0 flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
