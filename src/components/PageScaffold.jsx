/**
 * 页面骨架：白色卡片 + 标题 + 说明 + 内容区。
 * 尚未实现的页面先用它保持统一的视觉风格。
 */
export default function PageScaffold({ title, subtitle, children }) {
  return (
    <section className="rounded-lg border border-line bg-white p-6">
      <header>
        <h1 className="text-base font-semibold text-ink">{title}</h1>
        {subtitle && <p className="mt-1 text-xs leading-5 text-muted">{subtitle}</p>}
      </header>
      <div className="mt-5">{children}</div>
    </section>
  );
}
