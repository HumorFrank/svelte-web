
# Svelte Web Todo Manager

> 本项目由 AI 辅助开发，遵循自动化最佳实践，所有代码、结构、文档均参考 Skill 规范自动生成与优化。

一个基于 Svelte 4 + Vite + TypeScript + UnoCSS 的现代化待办事项管理器，支持本地存储、SPA 路由、单元测试与一键部署。

## 功能特性

- 📝 新增、编辑、删除、切换待办事项
- 💾 自动本地存储（localStorage 持久化）
- 🧩 组件化开发（TodoList、TodoItem）
- 🗂️ 单页应用（SPA）路由（svelte-spa-router）
- 🎨 UnoCSS 原子化样式，支持自定义主题
- 🧪 Vitest 单元测试
- 🚀 一键部署脚本与文档
- ⚡ 极速开发体验（Vite 热更新）

## 技术栈

- [Svelte 4](https://svelte.dev/)  
- [Vite 5](https://vitejs.dev/)  
- [TypeScript 5](https://www.typescriptlang.org/)  
- [UnoCSS](https://uno.css)  
- [svelte-spa-router@4](https://github.com/ItalyPaleAle/svelte-spa-router)  
- [Vitest](https://vitest.dev/)

## 典型目录结构
```
svelte-web/
├── src/
│   ├── App.svelte           # 应用入口，配置路由
│   ├── main.ts              # 入口脚本，加载 uno.css
│   ├── global.d.ts          # 类型声明
│   ├── components/          # 通用组件
│   ├── routes/              # 路由页面
│   ├── views/               # 业务视图（推荐扩展时新增）
│   ├── stores/              # Svelte store
│   ├── styles/              # 全局样式
│   ├── lib/                 # 工具函数/业务逻辑
│   ├── composables/         # 组合式函数（如 useXxx.ts，大型项目推荐）
│   ├── assets/              # 静态资源（图片、svg、音频等）
│   ├── mock/                # mock 数据与接口（如需本地联调）
│   ├── types/               # 全局类型定义（如 interfaces、enums 等）
│   ├── hooks/               # 自定义 hooks（如有特殊逻辑可单独拆分）
│   ├── utils/               # 通用工具函数（如 string、date、array 等）
│   └── ...                  # 其他业务/扩展目录
├── public/                  # 公共静态资源（favicon、robots.txt 等）
├── tests/                   # 单元/集成测试
├── uno.config.ts            # UnoCSS 配置
├── vite.config.ts           # Vite 配置
├── vitest.config.ts         # Vitest 配置
├── tsconfig.json            # TypeScript 配置
├── package.json             # 项目依赖与脚本
├── index.html               # HTML 模板
└── deploy.md                # 部署说明
```

## 目录结构

```
svelte-web/
├── src/
│   ├── App.svelte           # 应用入口，配置路由
│   ├── main.ts              # 入口脚本，加载 uno.css
│   ├── global.d.ts          # 类型声明
│   ├── components/
│   │   ├── TodoList.svelte  # 待办列表组件
│   │   └── TodoItem.svelte  # 单条待办组件
│   ├── lib/
│   │   └── types.ts         # Todo 类型定义
│   ├── routes/
│   │   ├── Home.svelte      # 首页
│   │   └── NotFound.svelte  # 404 页面
│   ├── stores/
│   │   └── useTodoStore.ts  # Svelte store，含本地持久化
│   └── styles/
│       └── global.css       # 全局样式
├── tests/
│   └── todoStore.test.ts    # Store 单元测试
├── uno.config.ts            # UnoCSS 配置
├── vite.config.ts           # Vite 配置
├── vitest.config.ts         # Vitest 配置
├── tsconfig.json            # TypeScript 配置
├── package.json             # 项目依赖与脚本
├── index.html               # HTML 模板
└── deploy.md                # 部署说明
```

## 快速开始

1. **安装依赖**（需先安装 [pnpm](https://pnpm.io/)）

```bash
pnpm install
```

2. **本地开发**

```bash
pnpm dev
```

访问 http://localhost:5173/ （如端口被占用会自动切换）

3. **运行测试**

```bash
pnpm test
```

4. **生产构建**

```bash
pnpm build
```

5. **预览生产包**

```bash
pnpm preview
```

## 主要文件说明

- `src/App.svelte`：应用入口，配置 SPA 路由
- `src/components/`：核心 UI 组件
- `src/stores/useTodoStore.ts`：Svelte store，含本地存储逻辑
- `src/routes/`：页面组件（首页、404）
- `src/styles/global.css`：全局样式
- `uno.config.ts`：UnoCSS 原子化样式配置
- `tests/todoStore.test.ts`：Vitest 单元测试

## 常见问题

### 1. 启动时报 `verbatimModuleSyntax` 错误？
请确保 `tsconfig.json` 已包含：
```json
"verbatimModuleSyntax": true
```

### 2. `global.css` 类型声明报错？
已在 `src/global.d.ts` 声明：
```ts
declare module '*.css';
```

### 3. 路由/组件未定义？
请检查 import 路径与文件名大小写，Svelte 对路径大小写敏感。

## 部署

详见 [deploy.md](deploy.md)

## 许可证

MIT License
