/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /**
       * 颜色令牌统一引用 index.css 中的 CSS 变量（“一处定义，处处使用”）。
       * 使用 rgb(var(--xxx) / <alpha-value>) 的写法，是为了让 bg-brand/20、
       * ring-brand/40 这类透明度修饰符也能正常工作。
       */
      colors: {
        brand: 'rgb(var(--color-brand-rgb) / <alpha-value>)', // 主色：导航 / 高亮 / 选中态
        page: 'rgb(var(--color-page-rgb) / <alpha-value>)', // 页面背景底色
        card: 'rgb(var(--color-card-rgb) / <alpha-value>)', // 普通卡片底色
        warn: 'rgb(var(--color-warn-rgb) / <alpha-value>)', // 提醒色：缺失记录标签、警示文字
        danger: 'rgb(var(--color-danger-rgb) / <alpha-value>)', // 警示色：异常记录标签
        ink: 'rgb(var(--color-ink-rgb) / <alpha-value>)', // 正文文字
        muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)', // 次要文字 / 注释
        line: 'rgb(var(--color-line-rgb) / <alpha-value>)', // 分割线 / 边框
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
