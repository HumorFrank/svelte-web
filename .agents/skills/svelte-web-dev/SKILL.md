---
name: svelte-web-dev
description: svelte-web 项目开发流程、目录结构、组件与状态管理、样式系统、测试与部署的全套规范。AI 生成或修改本项目代码时必须遵循此 Skill。
---

# svelte-web 项目开发规范

## 1. 项目概述

| 项 | 值 |
|---|---|
| 项目名称 | svelte-web |
| 项目类型 | 待办事项管理器 SPA |
| 语言 | TypeScript + Svelte 4 |
| 构建工具 | Vite 5 |
| 包管理器 | pnpm |
| CSS 方案 | UnoCSS（配置级）+ CSS 自定义属性（主题系统） |
| 路由 | svelte-spa-router（hash 模式） |
| 测试 | Vitest + jsdom |
| UI 语言 | zh-CN |

---

## 2. 目录结构规范

```
src/
├── App.svelte              # 根组件，路由挂载点
├── main.ts                 # 入口，挂载 App + 导入 uno.css
├── global.d.ts             # 全局类型声明（*.css 等）
├── assets/                 # 静态资源（图片、字体等）
├── components/             # 可复用 UI 组件（PascalCase 命名）
├── composables/            # 可组合逻辑函数（预留）
├── hooks/                  # 自定义 hooks（预留）
├── lib/                    # 业务类型与工具
│   └── types.ts            # 核心类型定义（Todo 接口等）
├── mock/                   # Mock 数据（预留）
├── routes/                 # 路由页面组件（与路由路径对应）
├── stores/                 # Svelte store（use 前缀命名）
├── styles/                 # 全局样式与主题变量
├── types/                  # 全局类型定义（预留）
├── utils/                  # 通用工具函数（预留）
└── views/                  # 业务视图（预留）
```

### 命名约定

| 类型 | 命名规则 | 示例 |
|---|---|---|
| 组件文件 | PascalCase | `TodoItem.svelte` |
| 路由页面 | PascalCase，与路由一致 | `Home.svelte`、`NotFound.svelte` |
| Store 文件 | camelCase，use 前缀 | `useTodoStore.ts` |
| 类型文件 | camelCase | `types.ts` |
| 目录 | kebab-case 或单小写 | `src/components/` |

---

## 3. 组件开发规范

### 3.1 脚本块

- 统一使用 `<script lang="ts">`
- Props 用 `export let` 声明，必须添加类型注解
- 事件用 `createEventDispatcher`，不直接操作父组件

```svelte
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Todo } from '../lib/types';

  export let todo: Todo;
  const dispatch = createEventDispatcher();

  function handleSave(text: string) {
    dispatch('edit', text);
  }
</script>
```

### 3.2 事件通信

- 子 → 父：通过 `dispatch('eventName', payload)`
- 父 → 子：通过 `export let` props
- 跨组件共享：通过 Svelte store

```svelte
<!-- 父组件监听 -->
<TodoItem
  {todo}
  on:edit={(e) => handleEdit(todo.id, e.detail)}
  on:toggle={() => /* ... */}
  on:remove={() => /* ... */}
/>
```

### 3.3 模板语法

- Svelte 4 语法：`{#if}`、`{#each}`、`on:click`、`bind:value`
- class 指令：`class:active={condition}` 用于条件样式
- 响应式声明：`$: derived = $store.filter(...)`
- Store 自动订阅：`$todos`、`$theme`
- 动画：`animate:flip` 用于列表重排

### 3.4 可访问性

- 交互元素必须添加 `aria-label`
- 非按钮交互元素添加 `role="button"` + `tabindex="0"`
- 表单控件保持原生语义

---

## 4. 状态管理规范

### 4.1 Store 模式

使用 Svelte 原生 `writable` store，采用工厂函数封装 CRUD 逻辑：

```ts
// src/stores/useXxxStore.ts
import { writable } from 'svelte/store';

function createXxxStore() {
  const { subscribe, set, update } = writable<Type[]>(initial);

  return {
    subscribe,
    items: { subscribe },  // 便利别名，用于 $items 语法
    addItem() { /* ... */ },
    removeItem(id: number) { /* ... */ },
    set,
    update
  };
}

export const useXxxStore = createXxxStore();
```

### 4.2 持久化

需要持久化的 store 在每次 mutation 时同步写入 `localStorage`，初始化时读取：

```ts
const stored = localStorage.getItem('key');
const initial: Type[] = stored ? JSON.parse(stored) : [];

function persist(data: Type[]) {
  localStorage.setItem('key', JSON.stringify(data));
}
```

### 4.3 使用约定

- Store 文件命名 `use` 前缀
- 导出实例名为 `useXxxStore`
- 复杂状态拆分为多个独立 store，避免单一巨型 store

---

## 5. 路由规范

### 5.1 路由配置

路由表集中在 `src/App.svelte` 中定义：

```ts
import Router from 'svelte-spa-router';
import { wrap } from 'svelte-spa-router/wrap';

const routes = {
  '/': wrap({ component: Home }),
  '/detail/:id': wrap({ component: Detail }),
  '*': wrap({ component: NotFound })
};
```

### 5.2 约定

- 使用 hash 模式路由（svelte-spa-router 默认）
- 路由组件放在 `src/routes/`
- 通配符 `*` 用于 404 兜底
- 新页面懒加载用 `wrap({ asyncComponent: () => import('./...') })`

---

## 6. 样式规范

### 6.1 主题系统

使用 CSS 自定义属性，定义在 `src/styles/global.css`，通过 `[data-theme]` 属性切换：

```css
[data-theme='dark'] {
  --bg-primary: #0f0f12;
  --bg-card: rgba(255, 255, 255, 0.03);
  --accent: #d4af37;
  --text-primary: #ede7d9;
  /* ... */
}

[data-theme='light'] {
  --bg-primary: #faf8f5;
  --bg-card: #ffffff;
  --accent: #6c63ff;
  --text-primary: #1a1a2e;
  /* ... */
}
```

### 6.2 必须使用的 CSS 变量

| 变量 | 用途 |
|---|---|
| `--bg-primary` | 页面背景 |
| `--bg-card` | 卡片/面板背景 |
| `--bg-card-hover` | 卡片 hover 背景 |
| `--bg-input` | 输入框背景 |
| `--border` | 默认边框颜色 |
| `--border-hover` | hover 边框颜色 |
| `--border-focus` | 焦点边框颜色 |
| `--text-primary` | 主文字颜色 |
| `--text-secondary` | 次要文字颜色 |
| `--text-muted` | 弱化文字颜色 |
| `--accent` | 强调色 |
| `--accent-hover` | 强调色 hover |
| `--accent-text` | 强调色上的文字色 |
| `--danger` | 危险操作色 |
| `--danger-bg` | 危险操作背景 |
| `--shadow` | 卡片阴影 |
| `--radius` | 圆角半径 |
| `--font-display` | 展示字体 |
| `--font-body` | 正文字体 |

### 6.3 组件样式

- 样式写在组件末尾的 `<style>` 块中
- 新组件优先使用 CSS 变量引用主题色
- 如需原子类，使用 UnoCSS（已配置 `presetUno`、`presetAttributify`、`presetIcons`）
- 避免硬编码颜色值；必须硬编码时需同时在两套主题中测试
- 颜色过渡使用 `transition: background 0.4s ease, color 0.4s ease`

### 6.4 字体

在 `index.html` 中通过 Google Fonts 加载：
- 展示字体：Playfair Display（weight 500, 700）
- 正文字体：DM Sans（weight 400, 500）

---

## 7. TypeScript 规范

### 7.1 配置

- `strict: true`
- `verbatimModuleSyntax: true`
- 路径别名（tsconfig 中定义）：
  - `$components/*` → `src/components/*`
  - `$stores/*` → `src/stores/*`
  - `$lib/*` → `src/lib/*`

### 7.2 类型定义

- 业务实体类型放在 `src/lib/types.ts`
- 全局类型声明放在 `src/global.d.ts`
- 使用 `interface` 定义对象类型

```ts
// src/lib/types.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
```

### 7.3 导入约定

- 相对路径导入组件和模块
- 路径别名导入常用目录（`$components/`、`$stores/`、`$lib/`）
- 类型导入使用 `import type { X } from '...'`

---

## 8. 测试规范

### 8.1 配置

- 框架：Vitest
- 环境：jsdom
- 全局 API：启用（`globals: true`）
- 测试文件：`tests/**/*.test.ts`

### 8.2 测试约定

- Store 逻辑必须测试（CRUD 操作）
- 每个测试用例独立，`beforeEach` 清理状态
- 读取 store 值使用 subscribe 模式：

```ts
// 一次性读取 store 当前值
const value = await new Promise(resolve => {
  store.subscribe(v => resolve(v))();
});
```

### 8.3 运行

```bash
pnpm exec vitest          # 单次运行
pnpm exec vitest --watch  # 监听模式
```

---

## 9. 构建与部署

### 9.1 Vite 配置要点

```ts
// vite.config.ts
plugins: [svelte({ preprocess: sveltePreprocess() }), Unocss()],
server: { host: '0.0.0.0', port: 8000 }
```

### 9.2 命令

| 命令 | 用途 |
|---|---|
| `pnpm dev` | 启动开发服务器（端口 8000） |
| `pnpm build` | 生产构建（输出到 `dist/`） |
| `pnpm preview` | 本地预览生产构建 |

### 9.3 部署目标

- Vercel / Netlify / GitHub Pages
- 纯静态站点，无服务端运行时
- 构建输出目录：`dist/`

### 9.4 主题防闪烁

`index.html` 中包含内联脚本，在渲染前同步读取 `localStorage` 设置 `data-theme` 属性，避免主题闪烁。

---

## 10. Git 工作流

### 10.1 分支策略

- 主分支：`master`
- 功能分支：`feat/<feature-name>` 或直接在 master 上提交
- 不建议直接在 master 上执行 `push --force` 或 `reset --hard`

### 10.2 提交规范

使用 Conventional Commits（中文描述）：

```
<type>: <中文描述>

示例：
feat(主题): 新增深色/浅色双主题切换
chore(依赖): 升级 Svelte 到 4.x
fix(待办): 修复编辑时失焦不保存的问题
docs(README): 补充部署文档
```

常见 type：
- `feat` — 新功能
- `fix` — 修复 bug
- `chore` — 杂项（依赖、配置、脚本）
- `docs` — 文档
- `refactor` — 重构
- `style` — 样式调整
- `test` — 测试

### 10.3 禁止操作

- 不提交 `node_modules/`、`dist/`、`.env` 等（已在 .gitignore）
- 不跳过 git hooks（`--no-verify`）
- 不修改 git config

---

## 11. AI 协作开发流程

本项目采用 AI 辅助开发，遵循以下流程：

1. **明确需求** — 梳理功能点、交互流程、技术约束
2. **加载 Skill** — AI 优先阅读本 SKILL.md 及项目内其他 Skill
3. **按规范生成** — 代码必须遵循本文档的目录、命名、组件、样式规范
4. **边写边测** — 本地 `pnpm dev` 即时验证，确保功能可用
5. **代码审查** — AI 检查风格一致性、潜在 bug、架构合理性
6. **测试覆盖** — Store 逻辑有测试，新功能补测试
7. **规范提交** — 遵循 Conventional Commits，中文描述

---

## 12. 关联技能

本项目已注册以下辅助 Skill，AI 生成代码时优先参考：

| Skill | 说明 |
|---|---|
| `svelte-best-practices` | Svelte 组件/路由/状态/样式最佳实践 |
| `svelte-core-bestpractices` | Svelte 核心最佳实践（官方） |
| `frontend-design` | 前端设计质量与 UI 实现 |
| `pnpm` | pnpm 包管理规范 |
