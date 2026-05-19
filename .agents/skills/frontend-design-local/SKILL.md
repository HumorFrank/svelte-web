---
name: frontend-design-local
description: Svelte 4 + Vite + TypeScript 项目 UI/前端开发最佳实践。适用于组件、页面、样式、状态管理、自动化开发等场景。
license: MIT
metadata:
  author: svelte-web-team
  version: "1.0"
---

# Svelte Web 前端开发 Skill

## 适用范围
- Svelte 4.x + TypeScript + Vite
- UnoCSS 或 TailwindCSS 原子化样式
- 组件化开发，结构清晰，注释完善
- 适用于 AI 代码生成、自动化开发、最佳实践输出

## 目录结构
- src/components/   # 通用组件
- src/routes/       # 路由页面
- src/views/        # 业务视图（可选）
- src/stores/       # 状态管理
- src/styles/       # 全局样式
- src/lib/          # 工具函数/业务逻辑
- src/composables/  # 组合式函数（如 useXxx.ts）
- src/assets/       # 静态资源
- src/mock/         # mock 数据
- src/types/        # 全局类型定义
- src/hooks/        # 自定义 hooks
- src/utils/        # 通用工具函数
- public/           # 公共静态资源
- tests/            # 单元/集成测试

## 开发规范

### 1. Skill 前置
- 明确项目目标、核心功能、技术栈、平台要求
- Skill 需覆盖：目录结构、命名规范、依赖选型、代码风格、接口/测试/CI/CD/团队约定等
- 每项目建议单独维护 Skill，AI 代码生成必须严格遵循
- 包管理工具统一使用 pnpm

### 2. 初始化与配置
- 推荐用 Vite 创建 Svelte + TypeScript 项目
- 配置文件需规范（package.json、vite.config.ts、tsconfig.json、uno.config.ts/tailwind.config.js）

### 3. 组件开发
- 文件名用 PascalCase
- props/事件/slot 明确声明，类型注释齐全
- 优先复用，避免重复造轮子
- 样式优先 scoped CSS 或原子类（UnoCSS/TailwindCSS）
- 组件/页面需适配移动端和桌面端

### 4. 状态管理
- 推荐 Svelte store（writable/derived/custom store）
- 全局状态放 stores/，局部状态用组件自身
- store 命名 useXxxStore，导出 { subscribe, set, update }

### 5. 路由与页面
- 推荐 svelte-spa-router 或 @sveltejs/kit 实现路由
- 页面文件放 routes/，支持嵌套路由
- 404 页面单独实现

### 6. 样式与响应式
- 推荐 UnoCSS 或 TailwindCSS，统一原子类风格
- 响应式断点建议：sm（≥640px）、md（≥768px）、lg（≥1024px）、xl（≥1280px）

### 7. 业务逻辑与数据流
- 业务逻辑拆分到 lib/ 或 composables/
- 表单校验、数据持久化（如 localStorage）需封装
- 重要逻辑需注释说明，复杂边界补 why 注释

### 8. 代码风格与注释
- 统一 TypeScript，类型声明齐全
- 变量、函数、props、事件均需注释

### 9. 测试与优化
- 推荐 vitest 单元测试，关键组件/逻辑需有测试覆盖
- 性能优化：懒加载、按需加载、避免不必要的响应式

### 10. 构建与部署
- Vite 构建产物输出 dist/
- 支持静态部署（Vercel、Netlify、GitHub Pages 等）
- 构建脚本、部署说明需文档化

## 注意事项
- 路径与依赖需跨平台兼容
- 组件/页面需注重可访问性（a11y）
- 如遇不明确需求，需主动补充合理假设并说明

---
本 Skill 适合 AI 代码生成、自动化开发、Svelte 项目最佳实践输出。
