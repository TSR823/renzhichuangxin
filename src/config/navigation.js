/**
 * 导航配置：顶部导航项、需要展示“学生ID”下拉的路由、不展示“记录状态”的路由。
 * TopNav / Sidebar / App 路由共用同一份配置，避免多处维护不一致。
 */
export const NAV_ITEMS = [
  { path: '/', label: '首页' },
  { path: '/outline', label: '学习梳理' },
  { path: '/analysis', label: '学情分析' },
  { path: '/advice', label: '学习建议' },
  { path: '/review', label: '案例核对' },
];

/**
 * 按系统设计：只有学情分析、学习建议、案例核对三个页面出现学生下拉，
 * 且三个页面共享同一个已选学生（状态保存在 AppStateProvider 中）。
 */
export const STUDENT_ROUTE_PATHS = ['/analysis', '/advice', '/review'];

/** 按设计稿：学习建议、案例核对页面不展示“记录状态”筛选 */
export const NO_STATUS_FILTER_PATHS = ['/advice', '/review'];
