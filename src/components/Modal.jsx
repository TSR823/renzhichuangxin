import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/** 关闭图标 */
function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="m4 4 8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 通用弹窗：用于“查看依据 / 查看证据链”。
 * 支持遮罩点击关闭、Esc 关闭，打开时锁定页面滚动。
 */
export default function Modal({ open, title, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[82vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-line bg-white shadow-[0_20px_60px_rgba(51,68,66,0.2)]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
          <h2 className="text-sm font-semibold text-ink">{title}</h2>
          <button
            type="button"
            aria-label="关闭弹窗"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-card hover:text-ink"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </header>
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}
