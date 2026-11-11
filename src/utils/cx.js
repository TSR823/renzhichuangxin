/** 简易 className 合并工具，避免引入额外依赖 */
export const cx = (...classes) => classes.filter(Boolean).join(' ');
