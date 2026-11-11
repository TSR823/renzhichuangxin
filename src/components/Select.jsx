import { useEffect, useRef, useState } from 'react';
import { cx } from '../utils/cx';

/** 下拉箭头 */
function ChevronIcon({ className }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 4.5 6 7.5l3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 选中对勾 */
function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path
        d="m2.5 6.2 2.3 2.3 4.7-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Select —— 轻量自定义下拉框，替代原生 <select> 以便完全还原设计稿。
 * 支持：点击展开 / 点击外部关闭 / Esc 关闭 / Enter、方向键展开。
 * accent = true 时使用主色描边（用于侧边栏“学生 ID”这个重点筛选）。
 */
export default function Select({
  ariaLabel,
  displayText,
  value,
  options,
  onChange,
  accent = false,
  maxHeightClass = 'max-h-64',
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // 打开时监听：点击组件外部关闭、按 Esc 关闭
  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      {/* 触发按钮：focus / open 状态均以主色描边 + 柔光环呈现 */}
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className={cx(
          'flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border bg-white px-3',
          'text-[13px] transition-colors duration-150',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40',
          accent ? 'border-brand text-brand' : 'border-line text-ink hover:border-brand/70',
          open && 'border-brand ring-2 ring-brand/30'
        )}
      >
        <span className="truncate">{displayText}</span>
        <ChevronIcon
          className={cx('h-3.5 w-3.5 shrink-0 transition-transform duration-150', open && 'rotate-180')}
        />
      </button>

      {/* 下拉面板 */}
      {open && (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className={cx(
            'absolute left-0 right-0 top-[42px] z-30 overflow-y-auto rounded-lg border border-line bg-white p-1 shadow-[0_8px_24px_rgba(51,68,66,0.12)]',
            maxHeightClass
          )}
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={cx(
                    'flex w-full items-center justify-between rounded px-2.5 py-2 text-left',
                    'text-[13px] transition-colors',
                    selected ? 'bg-card font-medium text-brand' : 'text-ink hover:bg-card'
                  )}
                >
                  <span className="truncate">{option}</span>
                  {selected && <CheckIcon className="h-3 w-3 shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
