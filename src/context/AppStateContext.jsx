import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { DATA_METRICS, DATA_ROWS } from '../data/learningData';

/**
 * 全局页面状态：筛选条件、已选学生、数据集指标与样例记录。
 * 放在路由外层，保证在 5 个页面之间切换时状态不丢失
 * （尤其是已选学生在 学情分析 / 学习建议 / 案例核对 三个页面间的继承）。
 */
const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  // 侧边栏筛选条件
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState('全部状态');
  const [studentId, setStudentId] = useState('全部学生');

  // 模拟数据集
  const [metrics, setMetrics] = useState(DATA_METRICS);
  const [rows, setRows] = useState(DATA_ROWS);
  const [loading, setLoading] = useState(false);
  const [addedCount, setAddedCount] = useState(0);

  // 保存“重新加载”的定时器，Provider 卸载时清理
  const reloadTimerRef = useRef(null);
  useEffect(() => () => window.clearTimeout(reloadTimerRef.current), []);

  /** 重新加载：模拟一次请求，恢复初始数据与筛选条件 */
  const reload = () => {
    if (loading) return;
    setLoading(true);
    reloadTimerRef.current = window.setTimeout(() => {
      setRows(DATA_ROWS);
      setMetrics(DATA_METRICS);
      setTopic('');
      setStatus('全部状态');
      setStudentId('全部学生');
      setAddedCount(0);
      setLoading(false);
    }, 600);
  };

  /** 模拟新增：插入一条缺失记录，同时更新总记录 / 缺失记录指标 */
  const addRecord = () => {
    const nextIndex = addedCount + 1;
    const newRow = {
      recordId: `SIM-${Date.now()}`,
      studentId: 'D17',
      questionId: 'Q044',
      node: 'N02',
      type: '缺失记录',
      status: '待评分',
    };

    setRows((prev) => [newRow, ...prev]);
    setMetrics((prev) =>
      prev.map((metric) =>
        metric.key === 'total' || metric.key === 'missing'
          ? { ...metric, value: metric.value + 1 }
          : metric
      )
    );
    setAddedCount(nextIndex);
    // 重置筛选，确保新增行可见
    setStudentId('全部学生');
    setStatus('全部状态');
  };

  const value = {
    topic,
    setTopic,
    status,
    setStatus,
    studentId,
    setStudentId,
    metrics,
    rows,
    loading,
    reload,
    addRecord,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

/** 页面组件读取全局状态 / 操作的统一入口 */
export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error('useAppState 必须在 AppStateProvider 内部使用');
  return context;
}
