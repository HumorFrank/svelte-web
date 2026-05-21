# Copilot Instructions for Svelte Web

## 技术栈

Svelte 4 + Vite 5 + TypeScript + UnoCSS + svelte-spa-router + pnpm

## 目录结构

- 组件统一放在 `src/components/`，命名 PascalCase
- 路由页面放在 `src/routes/`，页面文件名与路由一致
- Store 放在 `src/stores/`，命名 use 前缀
- 工具函数放在 `src/lib/` 或 `src/utils/`

## 主要约定

- 组件 props 用 `export let`，类型注释齐全
- 事件用 `createEventDispatcher`
- 样式优先 UnoCSS，局部样式 `<style scoped>`
- 路由集中管理，支持懒加载
- Store 用 Svelte 原生 store，复杂业务可拆分模块
- 统一用 pnpm 管理依赖
- 组件测试用 Vitest，测试文件与组件同目录

## 已注册技能

| 名称 | 说明 |
|------|------|
| `svelte-best-practices` | Svelte 组件/路由/状态/样式最佳实践 |
| `vite` | Vite 配置与插件最佳实践 |
| `unocss` | UnoCSS 原子 CSS 用法 |
| `typescript` | TypeScript 配置与类型约定 |
| `pnpm` | pnpm 包管理与 workspace 规范 |
| `svelte-web-dev` | svelte-web 项目完整开发规范（目录/组件/状态/样式/测试/部署/流程） |

AI 生成代码时请优先遵循上述规范和技能内容，其中 `svelte-web-dev` 为项目主规范，优先级最高。