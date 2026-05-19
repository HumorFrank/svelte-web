# Svelte Best Practices Skill

## 组件开发
- 统一使用 `<script lang="ts">`，类型安全。
- 组件 props 用 `export let`，并加类型注释。
- 事件用 `createEventDispatcher`，避免直接操作父组件。
- 样式优先用 UnoCSS 原子类，局部样式用 `<style scoped>`。
- 组件命名 PascalCase，文件名与组件名一致。

## 路由
- 使用 `svelte-spa-router`，路由表集中管理。
- 路由组件懒加载，避免初始包过大。
- 路由参数通过 props 传递，避免全局变量。

## 状态管理
- 优先用 Svelte store（`writable`/`derived`），复杂场景可拆分模块。
- store 命名 use 前缀，如 `useTodoStore.ts`。

## 工具与配置
- UnoCSS 配置统一在 `uno.config.ts`，自定义 shortcut 用注释说明。
- Vite 插件统一在 `vite.config.ts` 配置，插件顺序有讲究。
- svelte-preprocess 支持 scss/ts，配置在 `svelte.config.js`。

## 代码风格
- 统一用 pnpm 管理依赖。
- 代码注释齐全，复杂逻辑必须说明原因。
- 只引入必要依赖，避免包膨胀。

## 测试
- 组件测试用 Vitest，测试文件与组件同目录。
