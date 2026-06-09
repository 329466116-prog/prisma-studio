# Prisma · 钱多多个人主页

> 一个用 React + Vite + Tailwind 4 + Framer Motion 搭建的现代暗色电影感 landing page。

## 🎨 设计风格

- **暗色 + 暖奶油色**：背景 `#000` / `#101010` / `#212121` · 主色 `#DEDBC8` 暖奶油
- **字体**：Almarai（全局）+ Instrument Serif Italic（斜体强调）
- **氛围**：满铺视频背景 + SVG 噪点叠加 + Pull-up 文字入场 + 字符 stagger 渐显

## 📁 文件结构

```
prisma-studio/
├── index.html                # HTML 入口（含 Google Fonts 预加载）
├── vite.config.ts            # Vite + Tailwind 4 插件
├── tsconfig.*.json           # TypeScript 配置
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx              # React 入口
    ├── App.tsx               # 顶层布局
    ├── index.css             # 全局 CSS（Tailwind 4 @theme + 字体 + SVG 噪点）
    ├── vite-env.d.ts
    ├── lib/
    │   └── utils.ts          # cn() 工具
    └── components/
        ├── Hero.tsx          # 满屏视频 + 导航 + 大字 + 描述 + CTA
        ├── About.tsx         # 居中卡片 + 多字体标题 + 字符 stagger
        ├── Features.tsx      # 4 卡片网格（视频 + 3 文字卡）
        ├── Navbar.tsx        # 顶部胶囊导航
        ├── WordsPullUp.tsx       # 文字 pull-up 入场（支持 * 上标）
        └── WordsPullUpMultiStyle.tsx  # 多样式 pull-up（每段可换字体）
```

## 🖥️ 本地预览

```bash
cd /Volumes/driver/opdir/projects/prisma-studio
npm install         # 首次需要（5s，复用 react-ppt 缓存）
npm run dev         # http://localhost:5173/
```

## 🏗️ 打包构建

```bash
npm run build       # 输出到 dist/
npm run preview     # 本地预览打包结果
```

## ☁️ Cloudflare Pages 托管

1. 登录 https://dash.cloudflare.com/
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. 选 GitHub → 找到 `prisma-studio` 仓库（先用 `gh repo create` 建好）
4. 项目设置：
   - **Project name**: `prisma-studio`（域名 `prisma-studio.pages.dev`）
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **Save and Deploy**，1-2 分钟上线

之后 `git push` 自动部署。

## ✏️ 改内容

### 改 Hero 标题
编辑 `src/components/Hero.tsx`：
```tsx
<WordsPullUp
  text="Prisma"             // ← 改这里
  className="..."
  showAsterisk              // ← 最后一个 a 后自动加 * 上标
/>
```

### 改 Hero 描述
```tsx
const HERO_DESCRIPTION = '...'   // ← Hero.tsx 顶部
```

### 改 About 标题（多字体混合）
编辑 `src/components/About.tsx`：
```tsx
const ABOUT_HEADING = [
  { text: '我是钱多多，', className: 'font-normal' },
  { text: '一个爱折腾 AI 的国网人。', className: 'font-serif italic' },
  { text: '会做 PPT、信息图、AI 工作流。', className: 'font-normal' },
]
```

### 改 About 段落
```tsx
const ABOUT_BODY = '...'  // ← About.tsx 顶部
```

### 改 Features 4 卡片
编辑 `src/components/Features.tsx` 的 `VideoCard` + 3 个 `FeatureCard`：
- VideoCard 文案："Your creative canvas." → 改 "我的创作画布"
- Card 1-3：改 `title` / `items` 数组

### 改主色 / 字体
编辑 `src/index.css` 的 `@theme` 块：
```css
@theme {
  --color-primary: #DEDBC8;       /* 主色 */
  --color-primary-soft: #E1E0CC;  /* 文字主色 */
  --font-sans: "Almarai", ...;
  --font-serif: "Instrument Serif", serif;
}
```

### 改视频/图片资源
- Hero 视频：`src/components/Hero.tsx` 的 `HERO_VIDEO` 常量
- Features 视频：`src/components/Features.tsx` 的 `FEATURE_VIDEO` 常量
- 3 张图标：同文件的 `ICON_STORYBOARD` / `ICON_CRITIQUES` / `ICON_CAPSULE` 常量

## 🛠️ 技术栈

- **React 19** + **Vite 8** + **TypeScript 5.7**
- **Tailwind CSS 4**（`@tailwindcss/vite` 插件 + `@theme` 块配置颜色和字体）
- **Framer Motion 12**（pull-up 文字、卡片入场、CTA hover）
- **lucide-react 0.469**（ArrowRight / Check 图标）
- **Google Fonts**：Almarai（300/400/700/800）+ Instrument Serif Italic

## 🎬 关键动画

| 元素 | 动画 |
|---|---|
| Hero 大字 "Prisma*" | WordsPullUp 逐字 y:20 → 0 + opacity 0 → 1，stagger 0.08s |
| Hero 描述 | fade-up y:20 → 0，delay 0.5s |
| Hero CTA "Join the lab" | fade-up y:20 → 0，delay 0.7s |
| About 标题 | WordsPullUpMultiStyle 3 段不同字体，逐字 pull-up |
| About 段落 | 字符 stagger fade-in，3ms/字符（250 字符 ≈ 0.75s） |
| Features 标题 | WordsPullUpMultiStyle 2 行（米色 + 灰色） |
| Features 4 卡片 | scale 0.95 → 1 + opacity，stagger 0.15s |
| CTA hover | 间隙变大 + 圆圈 scale 1.1 |

## 📝 与 qdd-website 的关系

`qdd-website`（已上线 qdd-website.pages.dev）是**零依赖纯 HTML 个人主页**；本项目是**现代 React 栈的电影感创意工作室站**。两个站并列展示不同技术栈：

- qdd-website：轻、极简、纯静态 → Cloudflare Pages 直接 deploy
- prisma-studio：重、现代、组件化 → Cloudflare Pages 走 build 流程

## 🔄 更新部署

```bash
git add .
git commit -m "update: xxx"
git push
# Cloudflare Pages 几秒后自动部署
```

## 🛠️ 已知坑（避坑指南）

- **`useScroll` 字符级动画在 React 19 + StrictMode 下行为诡异**：用 `useInView` + 字符 stagger 替代，效果一致且稳定
- **Tailwind 4 写法和 3 完全不同**：颜色/字体在 `@theme` 块定义（不是 `tailwind.config.js`）
- **lucide-react 版本**：0.x 系列（不是 1.x）。react-ppt 框架里的 1.16.0 是 fork，建议用 0.469.0+
- **`@vitejs/plugin-react@6` 要 Vite 8**：装旧版 plugin 会报 peer dep 冲突
- **`tsconfig.tsBuildInfoFile` 是驼峰**（不是 `ts_buildInfoFile`），TS 6 改名了
- **CSS 静态资源 import 需要 `vite-env.d.ts`**：不然 `import './index.css'` 报 TS 错

---

🦐 Built with AI · 2026
