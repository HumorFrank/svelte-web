# Study Skill

## SKILL 技能分类
- **基本用法**：[SKILL.md 中的说明]
- **高级功能**：参阅 [advanced.md](advanced.md)
- **API 参考**：参阅 [reference.md](reference.md)
- **示例**：参阅 [examples.md](examples.md)

## SKILL 项目结构案例
```
.agents/skills/
  antfu/SKILL.md
  pinia/SKILL.md
  pnpm/SKILL.md
  unocss/SKILL.md
  vite/SKILL.md
  vue/SKILL.md
  vue-best-practices/SKILL.md
  vue-router-best-practices/SKILL.md
  vueuse-functions/SKILL.md
  web-design-guidelines/SKILL.md
```

## 项目集成 skill

### 规范 skill 目录结构 
> 所有 skill 建议统一放在 `skills` 目录下，每个 skill 一个子目录，主文件为 `SKILL.md`。

### skill 内容编写规范
每个 `SKILL.md` 建议包含三部分：
- 基础信息（名字、描述、版本、作者）
- 能力规则（AI 要做什么、遵循什么逻辑）
- 输出格式（结构、语气、风格、步骤）

### 注册 skill 到 Copilot Chat

### （可选）为 Claude/其他 agent 体系同步 skill
> 若你还用 Claude，可将 skill 内容同步到 `.claude/skills/` 或 `.claude/rules/`，并在` CLAUDE.md `里引用。

### 重启 VS Code Copilot Chat 插件
> 这样 Copilot Chat 会自动加载所有已注册的 skill，后续 AI 生成代码时会自动遵循这些规范。

## Skill 集成与维护标准流程

1. **统一 skill 目录到 `skills/`**
   - 所有技能统一放在 `.agents/skills/` 目录下，便于管理和自动加载。

2. **每个 skill 独立子目录，主文件为 `SKILL.md`**
   - 每个技能单独一个子目录，主文件命名为 `SKILL.md`，内容规范详尽。

3. **（推荐）在 `copilot-instructions.md` 注册所有 skill**
   - 在 `.github/copilot-instructions.md` 里列出所有技能，便于团队成员和 AI 明确技能清单和优先级。
   - 但即使没有该文件，AI 也会自动加载所有 `SKILL.md`。

4. **（可选）同步到其他 agent 体系**
   - 如需兼容 Claude、Cursor 等，可将 skill 内容同步到 `.claude/skills/` 或 `.claude/rules/`，并在对应规则文件引用。

5. **重启 Copilot Chat 插件**
   - 新增或修改 skill 后，重启 Copilot Chat 以确保最新技能生效。

6. **直接用 AI 开发，skill 自动生效**
   - 只需描述业务需求，AI 会自动参考所有已集成技能生成代码，无需重复说明规范。

7. **skill 维护与扩展**
   - 新增、修改、删除技能时，直接在 `skills/` 目录操作，并同步更新 `copilot-instructions.md`（如有）。
   - 建议定期优化和补充技能内容，覆盖所有团队关注的开发规范和最佳实践。

## Prompt（提示词）
> Prompt（提示词） 是您输入给人工智能（如大模型）的指令，用于明确告诉模型您想要解决的问题或完成的任务。

一份优秀的 Prompt 通常包含
- `任务`：具体要完成什么内容。
- `指令`：规定 AI 应该如何执行。
- `角色`：赋予 AI 扮演的身份（例如：专业翻译、资深程序员）。

## 自定义Agent/Skill规则
> 若你更倾向于在 Claude Code 等代码助手中使用，可以创建`项目规则`文件来`约束AI`。

## 当前主流的 AI Chat/Agent 体系及其技能（Skill/规则）目录

1️⃣ GitHub Copilot Chat（VS Code 插件）
- 技能体系目录：
  - skills（每个 skill 一个子目录，内有 SKILL.md 等）
  - `copilot-instructions.md`（全局指令/技能注册表）
  - `.agents/AGENTS.md`（可选，注册 agent/skill 关系）

2️⃣ Anthropic Claude（Claude VS Code 插件/Claude Web IDE/Claude API）
- 技能体系目录：
  - `CLAUDE.md`（主规则/行为约束）
  - `.claude/rules/`（细分规则文件，按领域拆分）
  - `.claude/skills/`（部分实现支持，结构类似 Copilot）
3️⃣ Cursor（AI IDE，支持 Copilot/Claude/GPT/自定义 Agent）
- 技能体系目录：
  - 兼容 Copilot 体系：skills、`copilot-instructions.md`
  - 兼容 Claude 体系：`CLAUDE.md`、.`claude/rules/`
  - 支持自定义 agent/skill 目录（如 `.cursor/skills/`，但主流用法是兼容上面两套）


## 官方文档与规范
- [Agent Skills](https://agentskills.io/home): 官方`Skills`定义规范，包含`SKILL.md`格式标准和最佳实践
- [Claude Code Documentation](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/overview): Anthropic关于Agent Skills的实现指南和API参考
- [理解自定义技能架构](https://platform.claude.com/cookbook/skills-notebooks-03-skills-custom-development#architecture)
- [技能编写最佳实践](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/best-practices)

## 参考资料
- [AI Agent Skills 系统性技术指南：从入门到生产落地](https://zhuanlan.zhihu.com/p/2012180283743568745)
- [一文读懂：智能体的 Skills](https://zhuanlan.zhihu.com/p/2015050829036562411)
- [LangGPT](https://github.com/langgptai/LangGPT/blob/main/README_zh.md)
- [Prompts 精选](https://github.com/langgptai/wonderful-prompts)