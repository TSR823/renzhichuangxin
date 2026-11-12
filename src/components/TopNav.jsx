import { cx } from '../utils/cx';

/** 顶部导航：5 个页面等分展示。因为要跳转静态页面，改用 a 标签 */
export default function TopNav() {
  // 这里手动写死跳转路径，指向你们 frontend 下的真实文件夹
  const navItems = [
    { label: '首页', path: '../shouye/index.html' },
    { label: '学习梳理', path: '../xuexishuli/index.html' },
    { label: '学情分析', path: './index.html' }, // 当前页面指向自己
    { label: '学习建议', path: '../xuexijianyi/index.html' },
    { label: '案例核对', path: '../anlihedui/index.html' },
  ];

  return (
    <header className="h-14 shrink-0 bg-brand">
      <nav aria-label="主导航" className="grid h-full grid-cols-5">
        {navItems.map((item) => {
          // 判断当前是不是“学情分析”页面，如果是，就给它高亮样式
          const isActive = item.label === '学情分析'; 

          return (
            <a
              key={item.label}
              href={item.path}
              className={cx(
                'flex h-full items-center justify-center text-sm transition-colors',
                isActive
                  ? 'bg-white/25 font-semibold text-ink'
                  : 'font-normal text-ink/85 hover:bg-white/15'
              )}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
