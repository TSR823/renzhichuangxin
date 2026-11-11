import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../config/navigation';
import { cx } from '../utils/cx';

/** 顶部导航：5 个页面等分展示，当前路由使用主色加深背景高亮 */
export default function TopNav() {
  return (
    <header className="h-14 shrink-0 bg-brand">
      <nav aria-label="主导航" className="grid h-full grid-cols-5">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              cx(
                'flex h-full items-center justify-center text-sm transition-colors',
                isActive
                  ? 'bg-white/25 font-semibold text-ink'
                  : 'font-normal text-ink/85 hover:bg-white/15'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
