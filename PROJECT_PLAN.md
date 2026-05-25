# GPA + Grade Calculator 国际学生成绩工具站 - Codex 开发规划文档

> 目标：让 Codex 可以根据本规划文档，分阶段生成一个可上线的英文工具类网站 MVP。
> 项目定位：面向国际学生的 GPA / Grade / Final Grade / CGPA / Percentage 转换工具站。
> 推荐技术栈：Next.js App Router + TypeScript + Tailwind CSS + Vitest。

---

## 0. 给 Codex 的总指令

你是本项目的 AI 编程代理。请严格按照本文档分阶段实现，不要一次性重构全部功能。

### 工作原则

1. 每次只完成一个阶段或一个任务卡。
2. 修改代码前先阅读：`README.md`、`PROJECT_PLAN.md`、`AGENTS.md`。
3. 所有计算逻辑必须放在 `src/lib/calculators/`，不要写死在 React 组件里。
4. 所有工具页面必须具备：
   - 清晰的 H1
   - Calculator UI
   - How it works 说明区
   - Formula 公式区
   - Example 示例区
   - FAQ 区
   - JSON-LD structured data
5. 所有输入必须有校验、错误提示和边界处理。
6. 每完成一个任务后必须运行：
   - `pnpm lint`
   - `pnpm test`
   - `pnpm build`
7. 不要接入真实广告、登录、数据库、支付系统。MVP 只做静态工具和 SEO 内容。
8. 不要上传、保存、追踪用户输入的成绩数据。

---

## 1. 项目一句话定位

Build a free, fast, privacy-friendly GPA and grade calculator hub for international students.

中文解释：

搭建一个英文工具站，帮助学生计算 GPA、加权成绩、期末成绩目标、CGPA 转 GPA、百分制转 GPA，并通过 SEO 长尾页面获取自然搜索流量。

---

## 2. MVP 范围

### 2.1 MVP 必须包含的页面

| 页面 | 路由 | 类型 | 优先级 |
|---|---|---|---|
| 首页 | `/` | 工具聚合页 | P0 |
| GPA Calculator | `/gpa-calculator` | 核心工具页 | P0 |
| Grade Calculator | `/grade-calculator` | 核心工具页 | P0 |
| Final Grade Calculator | `/final-grade-calculator` | 核心工具页 | P0 |
| Weighted Grade Calculator | `/weighted-grade-calculator` | 核心工具页 | P1 |
| Target GPA Calculator | `/target-gpa-calculator` | 核心工具页 | P1 |
| Percentage to GPA Converter | `/percentage-to-gpa-calculator` | 转换工具页 | P1 |
| CGPA to GPA Converter | `/cgpa-to-gpa-calculator` | 转换工具页 | P1 |
| About | `/about` | 信任页 | P2 |
| Privacy Policy | `/privacy` | 合规页 | P2 |
| Contact | `/contact` | 基础页 | P2 |

### 2.2 MVP 不做的功能

- 不做用户账号系统。
- 不做数据库保存。
- 不做 AI 聊天功能。
- 不做学校认证数据抓取。
- 不做付费功能。
- 不做复杂国家政策解释，只提供通用换算并加免责声明。

---

## 3. 推荐技术栈

```txt
Framework: Next.js App Router
Language: TypeScript
Styling: Tailwind CSS
Testing: Vitest + React Testing Library
Package Manager: pnpm
Deployment: Vercel
Analytics: Plausible / Google Analytics, later phase only
Ads: AdSense, later phase only
```

### 3.1 依赖建议

MVP 阶段尽量少依赖。

```bash
pnpm add clsx
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom eslint prettier
```

可选依赖：

```bash
pnpm add zod
```

如果 Codex 发现项目已有其他约定，优先遵守现有项目约定。

---

## 4. 建议目录结构

```txt
.
├── AGENTS.md
├── PROJECT_PLAN.md
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── gpa-calculator
│   │   │   └── page.tsx
│   │   ├── grade-calculator
│   │   │   └── page.tsx
│   │   ├── final-grade-calculator
│   │   │   └── page.tsx
│   │   ├── weighted-grade-calculator
│   │   │   └── page.tsx
│   │   ├── target-gpa-calculator
│   │   │   └── page.tsx
│   │   ├── percentage-to-gpa-calculator
│   │   │   └── page.tsx
│   │   ├── cgpa-to-gpa-calculator
│   │   │   └── page.tsx
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── privacy
│   │   │   └── page.tsx
│   │   └── contact
│   │       └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── calculators
│   │   │   ├── CourseRow.tsx
│   │   │   ├── AssessmentRow.tsx
│   │   │   ├── GpaCalculator.tsx
│   │   │   ├── GradeCalculator.tsx
│   │   │   ├── FinalGradeCalculator.tsx
│   │   │   ├── WeightedGradeCalculator.tsx
│   │   │   ├── TargetGpaCalculator.tsx
│   │   │   ├── PercentageToGpaConverter.tsx
│   │   │   └── CgpaToGpaConverter.tsx
│   │   ├── seo
│   │   │   ├── JsonLd.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── FaqSection.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       └── ResultBox.tsx
│   ├── content
│   │   ├── tools.ts
│   │   ├── faqs.ts
│   │   └── grade-scales.ts
│   ├── lib
│   │   ├── calculators
│   │   │   ├── gpa.ts
│   │   │   ├── grade.ts
│   │   │   ├── final-grade.ts
│   │   │   ├── target-gpa.ts
│   │   │   ├── conversions.ts
│   │   │   └── index.ts
│   │   ├── seo
│   │   │   ├── metadata.ts
│   │   │   ├── schema.ts
│   │   │   └── site.ts
│   │   └── utils.ts
│   └── tests
│       ├── gpa.test.ts
│       ├── grade.test.ts
│       ├── final-grade.test.ts
│       ├── target-gpa.test.ts
│       └── conversions.test.ts
```

---

## 5. 核心数据模型

### 5.1 GPA 课程模型

```ts
export type LetterGrade =
  | 'A+'
  | 'A'
  | 'A-'
  | 'B+'
  | 'B'
  | 'B-'
  | 'C+'
  | 'C'
  | 'C-'
  | 'D+'
  | 'D'
  | 'F';

export type CourseInput = {
  id: string;
  name: string;
  credits: number;
  grade: LetterGrade | number;
};

export type GpaScale = {
  id: string;
  name: string;
  maxGpa: number;
  letterToPoints: Record<LetterGrade, number>;
};

export type GpaResult = {
  totalCredits: number;
  totalGradePoints: number;
  gpa: number;
};
```

### 5.2 Grade Calculator 模型

```ts
export type AssessmentInput = {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  weight: number;
};

export type GradeResult = {
  currentGrade: number;
  totalWeight: number;
  missingWeight: number;
};
```

### 5.3 Final Grade Calculator 模型

```ts
export type FinalGradeInput = {
  currentGrade: number;
  desiredGrade: number;
  finalWeight: number;
};

export type FinalGradeResult = {
  requiredFinalScore: number;
  isPossible: boolean;
  message: string;
};
```

### 5.4 Target GPA Calculator 模型

```ts
export type TargetGpaInput = {
  currentGpa: number;
  currentCredits: number;
  targetGpa: number;
  futureCredits: number;
};

export type TargetGpaResult = {
  requiredFutureGpa: number;
  isPossibleOnFourPointScale: boolean;
  message: string;
};
```

---

## 6. 计算公式要求

### 6.1 GPA Calculator

公式：

```txt
GPA = sum(gradePoints * credits) / sum(credits)
```

边界处理：

- credits 必须大于 0。
- 没有课程时不显示 GPA。
- GPA 保留 2 位小数。
- 支持 4.0 scale，后续可扩展 5.0 scale。

示例：

```txt
Course 1: A, 3 credits => 4.0 * 3 = 12
Course 2: B, 4 credits => 3.0 * 4 = 12
GPA = 24 / 7 = 3.43
```

### 6.2 Grade Calculator

公式：

```txt
Weighted contribution = (score / maxScore) * weight
Current grade = sum(weighted contributions) / sum(completed weights) * 100
```

边界处理：

- score 不能小于 0。
- maxScore 必须大于 0。
- score 可以大于 maxScore，但 UI 应提示这通常表示 extra credit。
- weight 必须在 0 到 100 之间。
- totalWeight 大于 100 时显示警告。

### 6.3 Final Grade Calculator

公式：

```txt
Required final score = (desiredGrade - currentGrade * (1 - finalWeight)) / finalWeight
```

注意：

- finalWeight 用小数，例如 30% = 0.3。
- 如果 requiredFinalScore > 100，显示“not usually possible without extra credit”。
- 如果 requiredFinalScore <= 0，显示“you may already have enough”。

### 6.4 Target GPA Calculator

公式：

```txt
Required future GPA = ((targetGpa * (currentCredits + futureCredits)) - (currentGpa * currentCredits)) / futureCredits
```

边界处理：

- currentGpa 在 0 到 4 之间。
- targetGpa 在 0 到 4 之间。
- currentCredits >= 0。
- futureCredits > 0。
- requiredFutureGpa > 4 时，显示目标在 4.0 scale 下不可达。

### 6.5 Percentage to GPA Converter

MVP 使用通用换算，不声称适用于所有学校。

```txt
90-100 => 4.0
85-89  => 3.7
80-84  => 3.3
75-79  => 3.0
70-74  => 2.7
65-69  => 2.3
60-64  => 2.0
55-59  => 1.7
50-54  => 1.0
0-49   => 0.0
```

每个转换页必须显示免责声明：

```txt
This calculator provides a general estimate. GPA conversion rules vary by school, country, and admissions office. Always check your institution's official policy.
```

### 6.6 CGPA to GPA Converter

MVP 支持：

```txt
10-point CGPA to 4.0 GPA estimate:
GPA = (CGPA / 10) * 4
```

免责声明同上。

---

## 7. UI 设计要求

### 7.1 整体风格

关键词：

```txt
clean, fast, academic, trustworthy, mobile-first, no clutter
```

建议布局：

- 白底或浅灰背景。
- 工具主体用 Card。
- 结果区用醒目的 ResultBox。
- 文章内容控制在 720px 到 860px 阅读宽度。
- 移动端优先。

### 7.2 每个工具页统一结构

```txt
Hero Section
- H1
- One-sentence value proposition
- Calculator card

Result Section
- Main result
- Explanation text
- Reset / Add row buttons

Content Section
- How this calculator works
- Formula
- Example calculation
- When to use this calculator
- FAQ

Related Tools Section
- Internal links to 3-5 related calculators
```

### 7.3 表单交互

- 支持增加/删除课程或评分项。
- 输入时实时计算。
- 错误信息靠近输入框。
- ResultBox 中给出一句人话解释。
- 不要强制用户注册、登录、填写邮箱。

---

## 8. SEO 要求

### 8.1 每个页面必须有 Metadata

每个页面使用 Next.js `metadata` 或 `generateMetadata`。

必须包含：

```ts
export const metadata = {
  title: 'GPA Calculator - Calculate Your Grade Point Average',
  description: 'Free GPA calculator for students. Enter your courses, credits, and grades to calculate your GPA instantly.',
  alternates: {
    canonical: '/gpa-calculator',
  },
};
```

### 8.2 URL 规范

- 全小写。
- 使用 hyphen。
- 不使用 query 参数生成核心 SEO 页面。
- 所有核心工具页必须在 sitemap 中。

### 8.3 JSON-LD

每个工具页建议输出：

- `WebApplication` 或 `SoftwareApplication`
- `FAQPage`
- `BreadcrumbList`

注意：FAQ JSON-LD 中的问题和答案必须真实显示在页面上。

### 8.4 内链策略

每个工具页底部必须链接：

- 2-3 个同类工具页。
- 1 个解释型内容页。
- 首页。

示例：

```txt
GPA Calculator -> Target GPA Calculator
GPA Calculator -> Percentage to GPA Converter
GPA Calculator -> How to Raise Your GPA
Final Grade Calculator -> Grade Calculator
Final Grade Calculator -> Weighted Grade Calculator
```

---

## 9. 内容策略

### 9.1 首页内容结构

首页标题：

```txt
Free GPA & Grade Calculators for Students
```

首页模块：

1. Hero：一句话说明站点价值。
2. Popular Calculators：展示 6-8 个工具卡片。
3. How to choose a calculator：帮助用户选工具。
4. GPA and grade basics：基础说明。
5. FAQ。

### 9.2 工具页内容模板

每个工具页需要 600-1200 英文词左右。

模板：

```md
# [Tool Name]

Short intro: what it does and who should use it.

## How to use this calculator
Step-by-step instructions.

## Formula
Formula + explanation.

## Example
Concrete example.

## What the result means
Interpretation.

## Limitations
School policies may vary.

## FAQ
5-8 questions.
```

### 9.3 后续可扩展的 SEO 内容页

P2 阶段再做：

```txt
/how-to-calculate-gpa
/what-is-a-good-gpa
/weighted-vs-unweighted-gpa
/how-to-raise-your-gpa
/gpa-scale
/us-gpa-scale
/canada-gpa-scale
/uk-degree-classification-calculator
/india-cgpa-to-gpa
/singapore-gpa-calculator
```

---

## 10. 组件设计

### 10.1 UI 基础组件

#### Button

要求：

- 支持 `variant="primary" | "secondary" | "ghost"`。
- 支持 disabled。
- 使用 button 原生元素。

#### Input

要求：

- label 必须可访问。
- 支持 error message。
- 支持 number/text。

#### Card

要求：

- 用于 calculator 容器和工具卡片。

#### ResultBox

要求：

- 显示主结果。
- 显示解释文字。
- 支持 warning / success / neutral 状态。

### 10.2 Calculator 组件

每个 calculator 组件只负责 UI 状态和调用计算函数。

禁止：

```txt
在组件内部直接写复杂公式。
```

推荐：

```tsx
const result = calculateGpa(courses, defaultFourPointScale);
```

---

## 11. 计算函数接口

### 11.1 `calculateGpa`

```ts
export function calculateGpa(courses: CourseInput[], scale: GpaScale): GpaResult
```

测试用例：

```txt
A 3 credits + B 4 credits => 3.43
Empty courses => GPA 0, totalCredits 0
Zero credit course => ignored or validation error
```

### 11.2 `calculateWeightedGrade`

```ts
export function calculateWeightedGrade(items: AssessmentInput[]): GradeResult
```

测试用例：

```txt
Quiz 90/100 weight 20 + Exam 80/100 weight 30
weighted contribution = 18 + 24 = 42
current grade over completed 50% = 84
```

### 11.3 `calculateRequiredFinalScore`

```ts
export function calculateRequiredFinalScore(input: FinalGradeInput): FinalGradeResult
```

测试用例：

```txt
current 85, desired 90, final weight 30 => required 101.67
current 90, desired 80, final weight 30 => required 56.67
```

### 11.4 `calculateRequiredFutureGpa`

```ts
export function calculateRequiredFutureGpa(input: TargetGpaInput): TargetGpaResult
```

测试用例：

```txt
current GPA 3.2, current credits 60, target 3.5, future credits 30
required future GPA = 4.10, not possible on 4.0 scale
```

### 11.5 `convertPercentageToGpa`

```ts
export function convertPercentageToGpa(percentage: number): number
```

测试用例：

```txt
95 => 4.0
82 => 3.3
45 => 0.0
```

### 11.6 `convertCgpaToGpa`

```ts
export function convertCgpaToGpa(cgpa: number, cgpaScale: 10 | 7 | 5): number
```

MVP 先支持 10 分制，7 分制和 5 分制可以预留类型。

---

## 12. AGENTS.md 建议内容

在项目根目录创建 `AGENTS.md`：

```md
# AGENTS.md

## Project

This is a Next.js App Router website for GPA and grade calculators for international students.

## Commands

- Install dependencies: `pnpm install`
- Run dev server: `pnpm dev`
- Run lint: `pnpm lint`
- Run tests: `pnpm test`
- Run build: `pnpm build`

## Coding Rules

- Use TypeScript for all app code.
- Keep calculator formulas in `src/lib/calculators/`.
- Keep UI components small and reusable.
- Do not store user grade data on a server.
- Do not add new production dependencies without explaining why.
- Every calculator function must have unit tests.
- Every tool page must include metadata, FAQ content, and related internal links.

## SEO Rules

- Use descriptive page titles and meta descriptions.
- Use canonical URLs.
- Add JSON-LD for tool pages.
- Keep FAQ JSON-LD consistent with visible FAQ content.
- Add all public pages to sitemap.

## Definition of Done

A task is complete only when:

- The requested feature works locally.
- TypeScript passes.
- `pnpm lint` passes.
- `pnpm test` passes.
- `pnpm build` passes.
- Relevant tests are added or updated.
```

---

## 13. 分阶段开发任务卡

## Phase 0 - 项目初始化

### Task 0.1 初始化 Next.js 项目

目标：创建基础 Next.js App Router 项目。

Codex Prompt：

```txt
Read PROJECT_PLAN.md and AGENTS.md. Initialize or update this repository as a Next.js App Router TypeScript project using pnpm and Tailwind CSS. Create the base folder structure described in the plan. Do not implement calculators yet. Add placeholder pages for all MVP routes. Then run lint, test, and build.
```

验收标准：

- 所有 MVP 路由存在。
- 首页可访问。
- Tailwind 可用。
- `pnpm build` 成功。

---

## Phase 1 - 计算核心层

### Task 1.1 实现 GPA 计算逻辑

Codex Prompt：

```txt
Implement the GPA calculation core only. Add types and functions in src/lib/calculators/gpa.ts and default grade scales in src/content/grade-scales.ts. Add unit tests for normal cases, empty input, invalid credits, and rounding. Do not build UI yet.
```

验收标准：

- `calculateGpa` 可用。
- 单测覆盖 4 个以上场景。
- 不依赖 React。

### Task 1.2 实现 Grade / Weighted Grade 计算逻辑

Codex Prompt：

```txt
Implement weighted grade calculation in src/lib/calculators/grade.ts. Add tests for weighted contributions, missing weights, total weight over 100, zero max score, and extra credit behavior. Keep all logic framework-independent.
```

验收标准：

- 能计算当前加权成绩。
- 能返回 totalWeight 和 missingWeight。
- 错误输入有清晰处理。

### Task 1.3 实现 Final Grade 计算逻辑

Codex Prompt：

```txt
Implement final grade required score calculation in src/lib/calculators/final-grade.ts. Add tests for possible, impossible, already-enough, and invalid final weight cases.
```

验收标准：

- 能输出 requiredFinalScore。
- 能判断是否通常可达。
- 文案可供 UI 使用。

### Task 1.4 实现 Target GPA 和转换工具逻辑

Codex Prompt：

```txt
Implement target GPA, percentage-to-GPA, and CGPA-to-GPA calculations in src/lib/calculators/. Add comprehensive unit tests. Include disclaimers in exported metadata/constants where appropriate, but keep actual UI for later.
```

验收标准：

- 所有核心公式有单测。
- 计算函数没有 React 依赖。

---

## Phase 2 - 基础 UI 和布局

### Task 2.1 实现全站 Layout

Codex Prompt：

```txt
Implement the base layout, header, footer, container, and homepage tool grid. Use semantic HTML, responsive Tailwind styles, and accessible navigation. Keep the design clean and student-focused.
```

验收标准：

- Header 有站点 Logo 和工具导航。
- Footer 有 About / Privacy / Contact。
- 首页有工具卡片入口。

### Task 2.2 实现基础 UI 组件

Codex Prompt：

```txt
Create reusable UI components: Button, Card, Input, Select, ResultBox. Ensure labels and error messages are accessible. Add minimal component tests if the testing setup supports React Testing Library.
```

验收标准：

- 组件可复用。
- 样式统一。
- 输入组件支持错误提示。

---

## Phase 3 - 核心工具页面

### Task 3.1 实现 GPA Calculator 页面

Codex Prompt：

```txt
Build the GPA Calculator page using the existing calculation functions and UI components. Users should be able to add/remove course rows, enter course name, credits, and letter grade, and see GPA update live. Include How it works, Formula, Example, FAQ, related tools, metadata, and JSON-LD.
```

验收标准：

- 可以添加/删除课程。
- GPA 实时计算。
- 有错误校验。
- 页面内容完整。
- 有 metadata 和 JSON-LD。

### Task 3.2 实现 Grade Calculator 页面

Codex Prompt：

```txt
Build the Grade Calculator page. Users can add assessments with score, max score, and weight. Show current weighted grade, total completed weight, missing weight, and warnings if weights exceed 100. Include SEO content and JSON-LD.
```

验收标准：

- 支持多个评分项。
- 显示当前成绩。
- totalWeight > 100 有警告。

### Task 3.3 实现 Final Grade Calculator 页面

Codex Prompt：

```txt
Build the Final Grade Calculator page. Users enter current grade, desired grade, and final exam weight. Show required final exam score with interpretation. Include formula, example, FAQ, metadata, and JSON-LD.
```

验收标准：

- 输出 requiredFinalScore。
- >100、<=0、正常区间都有解释。

### Task 3.4 实现剩余工具页

Codex Prompt：

```txt
Build Weighted Grade Calculator, Target GPA Calculator, Percentage to GPA Converter, and CGPA to GPA Converter pages using the existing calculation functions. Keep UI consistent with previous calculator pages. Include disclaimers for conversion tools.
```

验收标准：

- 四个页面都可用。
- 转换工具显示免责声明。
- 内链完整。

---

## Phase 4 - SEO 和结构化数据

### Task 4.1 实现 SEO 工具函数

Codex Prompt：

```txt
Create src/lib/seo/site.ts, metadata.ts, and schema.ts. Add helpers for page metadata, WebApplication JSON-LD, FAQPage JSON-LD, and BreadcrumbList JSON-LD. Refactor existing pages to use these helpers.
```

验收标准：

- SEO 配置集中管理。
- 每个工具页有唯一 title / description / canonical。
- JSON-LD 输出合法 JSON。

### Task 4.2 实现 sitemap 和 robots

Codex Prompt：

```txt
Implement app/sitemap.ts and app/robots.ts for all MVP routes. Use the site URL from a central config. Include lastModified values and reasonable changeFrequency / priority fields.
```

验收标准：

- `/sitemap.xml` 可访问。
- `/robots.txt` 可访问。
- MVP 页面全部收录在 sitemap。

---

## Phase 5 - 内容完善和信任页

### Task 5.1 完善 About / Privacy / Contact

Codex Prompt：

```txt
Write and implement About, Privacy Policy, and Contact pages for a privacy-friendly student calculator site. State clearly that the site does not store grade inputs on a server. Keep copy concise and trustworthy.
```

验收标准：

- Privacy 说明不保存用户成绩输入。
- Contact 页面有联系邮箱占位。
- About 页面解释网站用途和限制。

### Task 5.2 增加内容模板组件

Codex Prompt：

```txt
Create reusable content sections for calculator pages: HowItWorks, FormulaBlock, ExampleBlock, RelatedTools, and FaqSection. Refactor tool pages to reduce duplication.
```

验收标准：

- 工具页重复代码减少。
- 视觉风格一致。

---

## Phase 6 - 质量检查

### Task 6.1 全站测试和边界修复

Codex Prompt：

```txt
Audit all calculator pages for invalid inputs, mobile layout, keyboard accessibility, metadata, JSON-LD consistency, and broken internal links. Fix issues and add missing tests. Then run lint, test, and build.
```

验收标准：

- 所有页面移动端可用。
- 所有输入有 label。
- 无明显 layout shift。
- `pnpm build` 成功。

---

## 14. 页面文案初稿

### 14.1 首页 Hero

```txt
Free GPA & Grade Calculators for Students

Calculate your GPA, weighted grade, final exam score, and grade conversions instantly. No sign-up required.
```

### 14.2 GPA Calculator 简介

```txt
Use this GPA calculator to estimate your grade point average based on your courses, credits, and letter grades. It is designed for students who want a quick and simple GPA estimate.
```

### 14.3 Grade Calculator 简介

```txt
Use this grade calculator to calculate your current weighted grade from assignments, quizzes, exams, and projects.
```

### 14.4 Final Grade Calculator 简介

```txt
Use this final grade calculator to find out what score you need on your final exam to reach your desired overall grade.
```

### 14.5 通用免责声明

```txt
This calculator provides an estimate only. Grading policies vary by school, course, country, and instructor. Always check your official syllabus or institution policy.
```

---

## 15. FAQ 初稿

### 15.1 GPA Calculator FAQ

```txt
Q: What is a GPA calculator?
A: A GPA calculator estimates your grade point average using your course credits and grades.

Q: How is GPA calculated?
A: GPA is usually calculated by multiplying each course's grade points by its credits, adding the results, and dividing by total credits.

Q: Is this calculator accurate for every school?
A: It provides a general estimate. Schools may use different GPA scales and grading policies.

Q: Can I use this for college GPA?
A: Yes, you can use it for a general college GPA estimate if your school uses credit hours and letter grades.

Q: Does this site store my grades?
A: No. The calculator runs in your browser and does not require an account.
```

### 15.2 Final Grade Calculator FAQ

```txt
Q: What does final exam weight mean?
A: It is the percentage of your overall course grade that comes from the final exam.

Q: What if the required final score is over 100%?
A: That usually means your target grade is not reachable without extra credit or a grading curve.

Q: What if the required final score is negative?
A: That usually means you may already have enough points to reach your target grade.
```

---

## 16. 验收总清单

上线前必须全部满足：

```txt
[ ] 所有 P0 / P1 工具页可访问
[ ] 所有工具页移动端正常
[ ] 所有计算函数有单元测试
[ ] 所有输入有边界校验
[ ] 所有页面有 title / description / canonical
[ ] sitemap.xml 可访问
[ ] robots.txt 可访问
[ ] FAQ 内容可见，并且 JSON-LD 与页面内容一致
[ ] Privacy 页面说明不保存成绩数据
[ ] pnpm lint 通过
[ ] pnpm test 通过
[ ] pnpm build 通过
```

---

## 17. 后续增长路线

MVP 上线后再做：

### 17.1 国家/地区长尾页面

```txt
/india-cgpa-to-gpa
/canada-gpa-calculator
/singapore-gpa-calculator
/australia-gpa-calculator
/uk-degree-classification-calculator
```

### 17.2 学习计划功能

```txt
/gpa-improvement-plan
```

功能：

- 输入当前 GPA。
- 输入目标 GPA。
- 输出建议未来课程平均成绩。
- 给出简单学习建议。

### 17.3 PDF 导出

后期可做：

- Download GPA report as PDF。
- Save calculation locally。
- Share result link，但不要在服务器保存敏感输入。

### 17.4 变现

后期接入：

- AdSense。
- 学习工具 affiliate。
- 语言考试课程 affiliate。
- 留学申请服务 lead。

---

## 18. Codex 执行建议

推荐按照这个顺序让 Codex 执行：

```txt
1. Task 0.1 初始化项目结构
2. Task 1.1 GPA 计算核心
3. Task 1.2 Grade 计算核心
4. Task 1.3 Final Grade 计算核心
5. Task 1.4 Target GPA 和转换核心
6. Task 2.1 全站 Layout
7. Task 2.2 基础 UI 组件
8. Task 3.1 GPA 页面
9. Task 3.2 Grade 页面
10. Task 3.3 Final Grade 页面
11. Task 3.4 剩余工具页
12. Task 4.1 SEO helpers
13. Task 4.2 sitemap / robots
14. Task 5.1 信任页
15. Task 6.1 全站质量检查
```

每次只复制一个 Task Prompt 给 Codex。不要一次性让 Codex 完成全部任务。

---

## 19. 最小上线版本定义

如果时间有限，最小上线版本只需要：

```txt
/ 首页
/ gpa-calculator
/ grade-calculator
/ final-grade-calculator
/ privacy
/ sitemap.xml
/ robots.txt
```

最小上线标准：

- 三个核心工具能正常计算。
- 页面内容不是空壳。
- 移动端可用。
- 有隐私说明。
- 能被搜索引擎抓取。

