# Study Skill

## Agent Skills

❇️ 官方参考文档
- [Agent Skills](https://agentskills.io/home)

## SKILL 技能分类
- **基本用法**：[SKILL.md 中的说明]
- **高级功能**：参阅 [advanced.md](advanced.md)
- **API 参考**：参阅 [reference.md](reference.md)
- **示例**：参阅 [examples.md](examples.md)

## 技能目录位置对比

| 工具           | 项目级技能目录                           | 个人级技能目录                             |
| -------------- | ---------------------------------------- | ------------------------------------------ |
| GitHub Copilot | `.github/skills/` <br> `.agents/skills/` | `.github/skills/` <br> `~/.agents/skills/` |
| Claude Code    | `.claude/skills/`                        | `~/.claude/skills/`                        |

### Claude Code Skills 的位置

1️⃣ Skills 的位置：你存储 skill 的位置决定了谁可以使用它

| 位置 | 路径                                      ｜  	适用于 |
| ---- | ----------------------------------------------------- ||
| 企业 | 请参阅[托管设置](https://code.claude.com/docs/zh-CN/settings#settings-files)	｜        你的组织中的所有用户 |
| 个人 | `~/.claude/skills/<skill-name>/SKILL.md`	 ｜     你的所有项目            |
| 项目 | `.claude/skills/<skill-name>/SKILL.md`	    ｜        仅此项目            |
| 插件 | `<plugin>/skills/<skill-name>/SKILL.md`	    ｜     启用插件的位置        |

2️⃣ 每个 skill 都是一个以 `SKILL.md` 作为`入口`点的`目录`

```
my-skill/
├── SKILL.md           # 主要说明（必需）
├── template.md        # Claude 要填写的模板
├── examples/
│   └── sample.md      # 显示预期格式的示例输出
└── scripts/
    └── validate.sh    # Claude 可以执行的脚本
```
> `SKILL.md` 包含主要说明，是必需的。其他文件是可选的，让你构建更强大的 `skills：Claude` 要填写的模板、显示预期格式的示例输出、Claude 可以执行的脚本或详细的参考文档。
> 从你的 `SKILL.md` 中`引用`这些文件，以便 Claude 知道它们包含什么以及何时加载它们。

3️⃣ 官方参考资料
- [Skills 的位置](https://code.claude.com/docs/zh-CN/skills#skills-的位置)
- [探索 .claude 目录](https://code.claude.com/docs/zh-CN/claude-directory#ce-dot-claude)
- [Claude Code Skills 完全指南](https://github.com/datawhalechina/easy-vibe/blob/main/docs/zh-cn/stage-3/core-skills/skills/index.md)

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

## Skills vs 提示词

| Prompt（提示词）           | Skills                 |
| -------------------------- | ---------------------- |
| 临时性的，每次都要重复说   | 持久化的，写一次反复用 |
| 存在对话历史中，占用 Token | 按需加载，节省 Token   |
| 无法在会话间共享           | 可以在团队中共享       |
| 难以版本控制               | 可以用 Git 管理        |

## Skills vs MCP

### Skills
Skills 是存储在文件系统中的"技能包"，包含：
- `SKILL.md`：技能的定义文件（必需）
- `scripts/`：辅助脚本（可选）
- `templates/`：输出模板（可选）
- `references/`：参考文档（可选）

### MCP
> 用于将 AI 工具连接到外部数据源（即使用AI请求外部接口，读取相关数据、设计图、文档等等）

### 形象比喻
如果把 Claude 比作一个"工作人员"：
- MCP 是给这个工作人员配备的"工具"（扳手、电脑、访问权限）
- Skills 是给这个工作人员的"操作手册"（怎么做代码审查、怎么提交代码）

### 它们的关系
Skills 和 MCP 不是竞争关系，而是互补关系：两者配合，Skills 告诉 Claude "怎么审查"，MCP 给 Claude "访问代码的能力"。
```
用户任务 → Claude 识别需求
            ↓
        加载相关 Skills（知道怎么做）
            ↓
        通过 MCP 调用工具（有工具可用）
            ↓
        完成任务
```
### 核心区别

| 维度     | Skills                   | MCP              |
| -------- | ------------------------ | ---------------- |
| 本质     | 知识和流程               | 工具和接口       |
| 提供什么 | 告诉 AI "怎么做"         | 给 AI "能用什么" |
| 存储位置 | `skills/` 目录           | MCP 服务器       |
| 配置方式 | Markdown 文件            | JSON 配置文件    |
| 触发方式 | `/skill-name` 或自动识别 | 通过配置自动加载 |

### 选择建议

| 你的需求         | 推荐方案  |
| ---------------- | --------- |
| 需要定义工作流程 | 用 Skills |
| 需要访问外部数据 | 用 MCP    |
| 需要两者都有     | 配合使用  |


## Skill 技能搜索神器
- [find-skills](https://www.skills.sh/vercel-labs/skills/find-skills): 这项技能可以帮助您发现和安装来自开放代理技能生态系统的技能。

## skill公共仓库
> [skill公共仓库](https://www.skills.sh/)
> [精选 Skills 资源列表](https://github.com/JackyST0/awesome-agent-skills)

## 官方文档与规范
- [Agent Skills](https://agentskills.io/home): 官方`Skills`定义规范，包含`SKILL.md`格式标准和最佳实践
- [Claude Code Documentation](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/overview): Anthropic关于Agent Skills的实现指南和API参考
- [Claude Code 使用说明、skills 和 hooks 进行自定义](https://code.claude.com/docs/zh-CN/overview#skills-hooks)
- [Claude Code Skills 完全指南](https://github.com/datawhalechina/easy-vibe/blob/main/docs/zh-cn/stage-3/core-skills/skills/index.md)
- [理解自定义技能架构](https://platform.claude.com/cookbook/skills-notebooks-03-skills-custom-development#architecture)
- [技能编写最佳实践](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/best-practices)

## 参考资料
- [AI Agent Skills 系统性技术指南：从入门到生产落地](https://zhuanlan.zhihu.com/p/2012180283743568745)
- [一文读懂：智能体的 Skills](https://zhuanlan.zhihu.com/p/2015050829036562411)
- [LangGPT](https://github.com/langgptai/LangGPT/blob/main/README_zh.md)
- [Prompts 精选](https://github.com/langgptai/wonderful-prompts)