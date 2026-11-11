import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import AdvicePage from './pages/AdvicePage';
import AnalysisPage from './pages/AnalysisPage';
import HomePage from './pages/HomePage';
import OutlinePage from './pages/OutlinePage';
import ReviewPage from './pages/ReviewPage';

/**
 * 路由表：5 个页面共用 AppLayout（顶部导航 + 左侧侧边栏）。
 * 未匹配的地址统一回到首页。
 */
export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/outline" element={<OutlinePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
