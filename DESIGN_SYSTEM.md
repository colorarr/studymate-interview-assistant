# StudyMate Interview Assistant Design System

本文档基于 [UI_FEATURE_SPEC.md](UI_FEATURE_SPEC.md) 输出，供 UI 设计师、前端开发与后续组件沉淀共同使用。

## 1. 产品判断

### 1.1 产品气质

StudyMate Interview Assistant 是一个“面试资料知识库 + AI 流式问答”的学习工具型产品。它不应表现得像营销官网，也不应表现得像泛娱乐聊天应用，而应呈现为一个安静、可靠、面向复习效率的个人学习工作台。

- 适用场景：知识库管理、资料上传、问答追问、引用溯源、历史会话回看。
- 不要怎么用：不要使用强烈娱乐化视觉、过度拟物、夸张渐变、装饰性插画堆叠或营销式大 Hero。

### 1.2 目标用户

核心用户是准备 Java 后端面试的学生、社招后端开发者和整理技术八股资料的学习者。他们关注效率、可信度、移动端顺手程度和资料是否可追问。

- 适用场景：碎片时间复习、通勤查看知识点、电脑端批量上传资料、面试前快速追问。
- 不要怎么用：不要把流程设计得像复杂企业后台，也不要让用户在创建、上传、问答之间频繁跳出主路径。

### 1.3 核心使用场景

1. 创建知识库：用户给某个面试主题建立资料空间。
2. 上传资料：用户上传 PDF、Word、Markdown、TXT。
3. 等待处理：系统解析、切片、向量化，用户需要明确知道进度与失败原因。
4. AI 问答：用户围绕知识库提问，并通过 SSE 感知答案正在生成。
5. 引用溯源：用户查看答案依据来自哪个文件和片段。
6. 历史复习：用户回到旧会话继续追问。

- 适用场景：围绕“可管理、可问答、可追溯”组织页面优先级。
- 不要怎么用：不要把引用来源隐藏到二级深层页面；不要让上传处理状态只靠文字提示表达。

## 2. 当前界面视觉语言提炼

当前前端仍是 uni-app 默认脚手架界面，视觉语言主要来自 `uni.scss` 默认变量和首页示例页。

### 2.1 色彩现状

当前使用 uni-app 默认蓝 `#007AFF` 作为主色，成功/警告/错误也沿用默认移动端色值。背景多为纯白和浅灰。

- 适用场景：可作为初始技术变量来源，但需要替换成更符合学习工具气质的语义色。
- 不要怎么用：不要继续直接使用默认蓝作为全局品牌主色；它辨识度弱，且容易显得像未完成模板。

### 2.2 字体现状

当前没有独立字体系统，首页标题为 `36rpx`，默认文本灰 `#8f8f94`。

- 适用场景：保留系统字体栈，保证 uni-app 多端渲染稳定。
- 不要怎么用：不要随意增加花哨字体；技术学习工具优先保证中文、英文、代码片段都清晰。

### 2.3 间距现状

当前使用 uni-app 默认 `5px / 10px / 15px` 横向间距和 `4px / 8px / 12px` 纵向间距，粒度偏小。

- 适用场景：小组件内部可以保留紧凑间距。
- 不要怎么用：不要用默认间距支撑页面级布局；知识库卡片、聊天消息、上传面板需要更清晰的 8pt 节奏。

### 2.4 圆角、阴影与组件现状

默认圆角为 `2px / 3px / 6px`，几乎没有应用级阴影与状态层级。

- 适用场景：输入框、标签、列表项可以采用克制圆角，保持工具感。
- 不要怎么用：不要使用大面积胶囊形卡片和厚重阴影；它会削弱专业、高效的产品气质。

## 3. 设计原则

### 3.1 问答优先

聊天问答页是产品核心，布局、颜色和动效都应优先服务“读问题、看回答、查引用、继续追问”。

- 适用场景：聊天页、知识库详情页的“开始问答”入口、历史会话续问入口。
- 不要怎么用：不要让装饰、统计卡片或大面积欢迎语抢占聊天阅读空间。

### 3.2 资料可信

AI 答案必须和引用来源建立稳定、清晰、低干扰的关系。

- 适用场景：AI 消息下方的引用卡片、答案尾部来源列表、文件片段展开面板。
- 不要怎么用：不要只用“AI 可能不准确”这类泛提示替代真实来源；不要把引用做成过度醒目的警告色。

### 3.3 状态透明

上传、解析、向量化、流式回答都要有可感知状态，让用户知道系统正在做什么。

- 适用场景：上传进度、文件处理状态、知识库处理中、AI 正在回答。
- 不要怎么用：不要只显示一个无限 spinner；长任务必须给出阶段、进度或下一步说明。

### 3.4 移动端顺手

用户高频使用手机，主操作应在拇指易触达区域，输入和发送要稳定。

- 适用场景：底部输入框、上传底部弹层、创建知识库表单、会话列表。
- 不要怎么用：不要把核心按钮只放在顶部右上角；不要让键盘弹起后遮挡输入框。

### 3.5 克制但不冷淡

界面应清晰、专业，但需要通过状态反馈、微动效和友好文案降低 AI 工具的陌生感。

- 适用场景：空状态、成功反馈、失败恢复、首次问答引导。
- 不要怎么用：不要使用过度口号化、拟人化或夸张鼓励文案。

## 4. 色彩系统

### 4.1 品牌色

主色建议使用“学习蓝绿”而非默认蓝：`#256D85`。它比纯蓝更沉稳，也与知识库、可信问答的气质匹配。

- 适用场景：主按钮、当前导航、发送按钮、关键链接、聚焦边框。
- 不要怎么用：不要把主色铺满大面积背景；不要同时用多个高饱和蓝绿制造噪音。

### 4.2 辅助强调色

辅助色使用“琥珀黄” `#F59E0B`，只用于学习提醒、待处理、引用编号和轻量提示。

- 适用场景：处理中标签、引用序号、重要但非错误的提示。
- 不要怎么用：不要把琥珀黄用于主按钮；不要让它和错误状态混淆。

### 4.3 中性色

界面基底使用偏冷中性色，避免纯黑纯白过硬。背景为 `#F6F8FA`，主表面为 `#FFFFFF`，主文字为 `#172026`。

- 适用场景：页面背景、卡片、列表、聊天区、输入区。
- 不要怎么用：不要用大片深蓝/深灰背景承载正文；移动端长阅读会累。

### 4.4 语义色

成功 `#16A34A`，警告 `#D97706`，错误 `#DC2626`，信息 `#256D85`。

- 适用场景：上传成功、解析失败、网络异常、文件处理中、表单校验。
- 不要怎么用：不要把语义色当装饰色；错误色只能表示失败、危险或不可逆操作。

### 4.5 聊天气泡色

用户消息使用主色背景 `#256D85` 和白色文字；AI 消息使用白色表面和浅边框；引用来源使用浅蓝绿底 `#EAF5F7`。

- 适用场景：聊天问答页、历史会话详情。
- 不要怎么用：不要让用户与 AI 气泡使用同一背景；不要让引用卡片比答案正文更抢眼。

## 5. 字体系统

### 5.1 字体栈

使用系统字体：`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`。代码片段使用 `ui-monospace, SFMono-Regular, Consolas, monospace`。

- 适用场景：所有产品界面、中文正文、英文技术词、代码片段。
- 不要怎么用：不要引入装饰字体；不要让代码内容使用普通正文等宽不明显。

### 5.2 字号层级

- Display：`40rpx / 20px`，登录页产品名、空状态标题。
- Title：`36rpx / 18px`，页面标题、知识库名称。
- Subtitle：`32rpx / 16px`，卡片标题、弹层标题。
- Body：`28rpx / 14px`，正文、列表内容、聊天正文。
- Caption：`24rpx / 12px`，时间、状态说明、辅助信息。
- Code：`26rpx / 13px`，代码与技术关键词。

- 适用场景：移动端优先使用 rpx，Web/H5 可按 px 映射。
- 不要怎么用：不要在卡片、按钮里使用超大标题；不要为了适配屏幕用 viewport 动态缩放字号。

### 5.3 行高

标题行高 `1.3`，正文行高 `1.6`，聊天回答行高 `1.7`，按钮行高 `1.2`。

- 适用场景：AI 长回答、引用片段、文件描述、知识库简介。
- 不要怎么用：不要让聊天长文行高低于 `1.55`；技术解释会显得拥挤。

### 5.4 字重

页面标题 `600`，卡片标题 `600`，正文 `400`，重点数字和状态 `500`，按钮 `600`。

- 适用场景：列表层级、问答内容、状态标签。
- 不要怎么用：不要大面积使用 `700`；会让工具界面显得粗重。

## 6. 间距与栅格

### 6.1 基础间距

采用 8pt 节奏：`4 / 8 / 12 / 16 / 24 / 32 / 40 / 48`。uni-app 中对应为 `8rpx / 16rpx / 24rpx / 32rpx / 48rpx / 64rpx / 80rpx / 96rpx`。

- 适用场景：页面留白、卡片内边距、列表间距、消息间距。
- 不要怎么用：不要混用大量 `5px / 15px` 这类默认间距作为页面主节奏。

### 6.2 页面边距

移动端页面左右边距 `32rpx`，紧凑列表可为 `24rpx`；Web 主内容最大宽度 `1120px`，聊天页可采用左右分栏但消息主列不超过 `760px`。

- 适用场景：知识库列表、详情页、上传页、我的页。
- 不要怎么用：不要让聊天正文横跨整个宽屏；长行阅读效率低。

### 6.3 栅格

移动端单列；平板双列；Web 知识库列表使用 3 列卡片或左窄右宽布局；聊天页 Web 可使用“历史侧栏 280px + 聊天主区”。

- 适用场景：知识库列表、历史会话、详情页文件管理。
- 不要怎么用：不要在移动端使用双列知识库卡片；信息密度会过高。

### 6.4 触控尺寸

可点击区域最小 `88rpx / 44px`。图标按钮视觉尺寸可小，但触控热区必须满足最小尺寸。

- 适用场景：返回、删除、发送、展开引用、更多操作。
- 不要怎么用：不要把删除、重试等关键操作做成只有文字大小的点击区域。

## 7. 圆角、边框、阴影

### 7.1 圆角

- `4px`：标签、引用编号、小型图标容器。
- `6px`：输入框、按钮、文件列表项。
- `8px`：知识库卡片、弹层、上传区域。
- `999px`：头像、小徽标、进度点，不用于普通按钮。

- 适用场景：工具型界面保持克制圆角，卡片最大不超过 `8px`。
- 不要怎么用：不要把所有按钮做成胶囊形；会削弱专业感和层级。

### 7.2 边框

默认边框 `1px solid #DDE5EA`，弱边框 `#E8EEF2`，聚焦边框 `#256D85`，错误边框 `#DC2626`。

- 适用场景：输入框、卡片、文件列表、引用来源、弹层。
- 不要怎么用：不要用边框和阴影同时重度强调普通卡片。

### 7.3 阴影

普通卡片不使用明显阴影，只用边框区分。浮层使用 `0 12px 32px rgba(23, 32, 38, 0.12)`。底部输入栏使用顶部细阴影 `0 -4px 16px rgba(23, 32, 38, 0.06)`。

- 适用场景：弹层、底部输入区、悬浮操作、Toast。
- 不要怎么用：不要给列表中每张卡片加厚重投影；滚动时会显脏。

## 8. 核心组件规范

### 8.1 按钮

按钮分为主按钮、次按钮、文本按钮、危险按钮和图标按钮。主按钮只用于当前页面最关键动作。

- 适用场景：登录、注册、创建知识库、上传文件、发送问题、开始问答。
- 不要怎么用：不要在同一区域放多个同样强度的主按钮；删除操作不要使用主色。

### 8.2 输入框

输入框高度移动端建议 `88rpx`，多行输入用于知识库描述和聊天输入。聚焦时边框主色，错误时显示错误文字。

- 适用场景：登录表单、创建知识库、搜索、聊天提问。
- 不要怎么用：不要只靠占位符说明字段含义；复杂字段需要固定 label。

### 8.3 知识库卡片

卡片包含名称、描述、文件数、分片数、状态、更新时间和快捷入口。状态标签靠近标题，主操作为进入详情或开始问答。

- 适用场景：首页/知识库列表页。
- 不要怎么用：不要在卡片里堆太多操作按钮；删除应放入更多菜单或二次确认。

### 8.4 文件列表项

文件列表项包含文件图标、文件名、类型、大小、上传时间、解析状态和操作。解析状态必须使用标签 + 文案。

- 适用场景：知识库详情页、上传完成结果。
- 不要怎么用：不要只用颜色表达解析状态；色弱用户无法准确判断。

### 8.5 状态标签

状态标签分为处理中、成功、失败、待上传、可问答。使用浅底色 + 深文字 + 可选图标。

- 适用场景：知识库卡片、文件列表、上传队列、AI 回答状态。
- 不要怎么用：不要让标签都使用高饱和实底；状态会喧宾夺主。

### 8.6 聊天气泡

用户气泡右对齐，最大宽度移动端 `78%`；AI 气泡左对齐，最大宽度 `92%`，长文使用正文排版而非紧凑气泡。

- 适用场景：聊天问答页、历史会话详情。
- 不要怎么用：不要让 AI 长回答塞在很窄的圆角气泡中；技术解释需要阅读宽度。

### 8.7 引用来源卡片

引用卡片位于 AI 回答下方，可折叠，默认显示文件名、片段摘要和序号。展开后显示更多上下文。

- 适用场景：答案完成后、流式回答结束后、历史答案回看。
- 不要怎么用：不要在 AI 回答生成过程中频繁跳动引用区域；会干扰阅读。

### 8.8 上传组件

上传区域支持点击选择和拖拽（Web），展示文件类型限制、大小限制、上传进度和处理状态。

- 适用场景：知识库详情上传入口、上传弹层、上传独立页。
- 不要怎么用：不要在选择文件后立刻隐藏文件列表；用户需要确认上传对象。

### 8.9 空状态组件

空状态包含简短标题、说明和一个主操作。插画使用轻量线性图形或文件/知识库图标。

- 适用场景：无知识库、无文件、空会话、无历史记录。
- 不要怎么用：不要写长篇解释；不要让空状态没有下一步。

### 8.10 删除确认弹层

删除必须二次确认，明确对象名称和影响范围。危险按钮使用错误色。

- 适用场景：删除知识库、删除文件、删除历史会话。
- 不要怎么用：不要把删除放成默认主按钮；不要用“确定”这种含糊文案。

## 9. 状态规范

### 9.1 加载中

短加载使用骨架屏或局部 spinner；长加载必须显示阶段文字。

- 适用场景：进入列表、打开详情、上传处理、AI 首 token 等待。
- 不要怎么用：不要全屏阻塞每个列表请求；局部内容应局部加载。

### 9.2 处理中

处理中文案需说明当前阶段，例如“正在解析文件”“正在生成知识切片”“正在建立检索索引”。

- 适用场景：文件解析、知识库向量化、AI 回答生成。
- 不要怎么用：不要只写“处理中”；用户无法判断是否卡住。

### 9.3 成功

成功反馈应短暂、明确，并提供下一步入口。

- 适用场景：注册成功、创建知识库成功、上传成功、解析完成。
- 不要怎么用：不要成功后停留在死胡同页面；要能继续上传或开始问答。

### 9.4 失败

失败状态必须说明原因、影响和恢复动作，如“重新上传”“重新解析”“重试发送”。

- 适用场景：登录失败、上传失败、解析失败、网络异常、AI 回答失败。
- 不要怎么用：不要只显示“失败了”；不要让用户不知道是否会丢失已输入内容。

### 9.5 禁用

禁用状态透明度不低于 `0.48`，并配合原因提示。

- 适用场景：未输入问题时禁用发送、无可用文件时禁用问答、上传中禁用重复提交。
- 不要怎么用：不要让禁用按钮完全不可读；不要用禁用代替表单校验说明。

### 9.6 聚焦与悬停

聚焦态必须可见，键盘用户可识别。悬停只作为 Web 增强，不能承载必要信息。

- 适用场景：输入框、按钮、列表项、图标按钮、引用展开。
- 不要怎么用：不要只在 hover 显示关键操作；移动端无法 hover。

## 10. 图标与插画规范

### 10.1 图标

使用统一线性图标风格，线宽 `1.75px - 2px`，圆角端点。核心图标包括：知识库、文件、上传、发送、搜索、历史、用户、删除、重试、展开。

- 适用场景：导航、按钮、文件类型、状态提示。
- 不要怎么用：不要混用实心、彩色、3D、手绘等不同图标风格。

### 10.2 文件类型图标

PDF、Word、Markdown、TXT 使用不同小色块或字母标识，但整体保持低饱和。

- 适用场景：上传队列、文件列表、引用来源文件名。
- 不要怎么用：不要使用过多真实软件品牌图标；会产生授权和风格不一致问题。

### 10.3 插画

插画只用于空状态和首次引导，建议线性、轻量、低饱和，主题围绕资料、知识、问答。

- 适用场景：无知识库、无文件、空会话。
- 不要怎么用：不要在聊天主界面持续展示大插画；会占用阅读空间。

## 11. 文案语气规范

### 11.1 语气

文案应像一个清楚可靠的学习助手：简短、具体、给下一步。

- 适用场景：按钮、空状态、错误提示、上传进度、AI 生成状态。
- 不要怎么用：不要过度拟人化，例如“我太累了，稍后再试”；不要使用营销式口号。

### 11.2 按钮文案

按钮文案使用动宾结构，如“创建知识库”“上传文件”“开始问答”“重新解析”“删除会话”。

- 适用场景：所有主要操作和危险操作。
- 不要怎么用：不要使用“确定”“提交”“好的”这类上下文不清的文案。

### 11.3 状态文案

状态文案要包含当前状态和下一步。例如：“文件解析失败，可重新解析或删除后重新上传。”

- 适用场景：失败状态、处理中状态、空状态。
- 不要怎么用：不要只写“异常”“错误”“处理中”。

### 11.4 AI 文案

AI 相关文案要强调“基于资料回答”和“可查看来源”，避免绝对化表达。

- 适用场景：空会话引导、引用来源、AI 回答失败。
- 不要怎么用：不要承诺“答案完全准确”；不要用夸张话术制造过高预期。

## 12. 禁用规则 / 设计红线

1. 不要使用默认脚手架蓝作为最终品牌系统。
2. 不要在聊天页放营销 Hero 或大面积装饰图。
3. 不要把引用来源藏到不可见入口。
4. 不要只用颜色表达状态，必须配合文字或图标。
5. 不要使用多个同级主按钮竞争注意力。
6. 不要让上传、解析、AI 生成这类长任务缺少进度感。
7. 不要让删除操作缺少二次确认。
8. 不要让移动端底部输入框被键盘遮挡。
9. 不要在普通卡片上使用厚重阴影和大圆角。
10. 不要在状态、错误、成功文案里使用含糊表达。

- 适用场景：设计评审、前端走查、组件验收。
- 不要怎么用：不要把红线当作可选建议；这些规则影响可用性和产品可信度。

## 13. Design Tokens

### 13.1 CSS Variables

```css
:root {
  /* Color: brand */
  --sm-color-primary: #256d85;
  --sm-color-primary-hover: #1f5d72;
  --sm-color-primary-active: #18495a;
  --sm-color-primary-soft: #eaf5f7;

  /* Color: accent */
  --sm-color-accent: #f59e0b;
  --sm-color-accent-soft: #fff7e6;

  /* Color: semantic */
  --sm-color-success: #16a34a;
  --sm-color-success-soft: #eaf8ef;
  --sm-color-warning: #d97706;
  --sm-color-warning-soft: #fff4df;
  --sm-color-danger: #dc2626;
  --sm-color-danger-soft: #fdecec;
  --sm-color-info: #256d85;
  --sm-color-info-soft: #eaf5f7;

  /* Color: neutral */
  --sm-color-bg: #f6f8fa;
  --sm-color-surface: #ffffff;
  --sm-color-surface-muted: #f1f5f8;
  --sm-color-border: #dde5ea;
  --sm-color-border-subtle: #e8eef2;
  --sm-color-text: #172026;
  --sm-color-text-secondary: #4b5b66;
  --sm-color-text-muted: #7a8a95;
  --sm-color-text-disabled: #a8b4bc;
  --sm-color-text-inverse: #ffffff;
  --sm-color-mask: rgba(23, 32, 38, 0.48);

  /* Typography */
  --sm-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  --sm-font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
  --sm-font-size-caption: 12px;
  --sm-font-size-code: 13px;
  --sm-font-size-body: 14px;
  --sm-font-size-subtitle: 16px;
  --sm-font-size-title: 18px;
  --sm-font-size-display: 20px;
  --sm-line-height-tight: 1.3;
  --sm-line-height-body: 1.6;
  --sm-line-height-chat: 1.7;
  --sm-font-weight-regular: 400;
  --sm-font-weight-medium: 500;
  --sm-font-weight-semibold: 600;

  /* Spacing */
  --sm-space-1: 4px;
  --sm-space-2: 8px;
  --sm-space-3: 12px;
  --sm-space-4: 16px;
  --sm-space-6: 24px;
  --sm-space-8: 32px;
  --sm-space-10: 40px;
  --sm-space-12: 48px;

  /* Radius */
  --sm-radius-xs: 4px;
  --sm-radius-sm: 6px;
  --sm-radius-md: 8px;
  --sm-radius-full: 999px;

  /* Border */
  --sm-border-width: 1px;
  --sm-border-default: 1px solid var(--sm-color-border);
  --sm-border-subtle: 1px solid var(--sm-color-border-subtle);
  --sm-border-focus: 1px solid var(--sm-color-primary);
  --sm-border-danger: 1px solid var(--sm-color-danger);

  /* Shadow */
  --sm-shadow-none: none;
  --sm-shadow-input-bar: 0 -4px 16px rgba(23, 32, 38, 0.06);
  --sm-shadow-popover: 0 8px 24px rgba(23, 32, 38, 0.10);
  --sm-shadow-modal: 0 12px 32px rgba(23, 32, 38, 0.12);

  /* Motion */
  --sm-motion-fast: 120ms;
  --sm-motion-base: 180ms;
  --sm-motion-slow: 240ms;
  --sm-motion-ease: cubic-bezier(0.2, 0, 0, 1);

  /* Layout */
  --sm-page-padding-mobile: 16px;
  --sm-page-padding-web: 24px;
  --sm-content-max-width: 1120px;
  --sm-chat-max-width: 760px;
  --sm-touch-target: 44px;
}
```

### 13.2 uni-app SCSS Variables

```scss
/* Brand */
$sm-color-primary: #256d85;
$sm-color-primary-hover: #1f5d72;
$sm-color-primary-active: #18495a;
$sm-color-primary-soft: #eaf5f7;
$sm-color-accent: #f59e0b;
$sm-color-accent-soft: #fff7e6;

/* Semantic */
$sm-color-success: #16a34a;
$sm-color-warning: #d97706;
$sm-color-danger: #dc2626;
$sm-color-info: #256d85;

/* Neutral */
$sm-color-bg: #f6f8fa;
$sm-color-surface: #ffffff;
$sm-color-surface-muted: #f1f5f8;
$sm-color-border: #dde5ea;
$sm-color-border-subtle: #e8eef2;
$sm-color-text: #172026;
$sm-color-text-secondary: #4b5b66;
$sm-color-text-muted: #7a8a95;
$sm-color-text-disabled: #a8b4bc;
$sm-color-text-inverse: #ffffff;

/* uni-app default variable mapping */
$uni-color-primary: $sm-color-primary;
$uni-color-success: $sm-color-success;
$uni-color-warning: $sm-color-warning;
$uni-color-error: $sm-color-danger;
$uni-text-color: $sm-color-text;
$uni-text-color-inverse: $sm-color-text-inverse;
$uni-text-color-grey: $sm-color-text-muted;
$uni-text-color-placeholder: $sm-color-text-muted;
$uni-text-color-disable: $sm-color-text-disabled;
$uni-bg-color: $sm-color-surface;
$uni-bg-color-grey: $sm-color-bg;
$uni-bg-color-hover: $sm-color-surface-muted;
$uni-border-color: $sm-color-border;

/* Type */
$sm-font-size-caption: 24rpx;
$sm-font-size-code: 26rpx;
$sm-font-size-body: 28rpx;
$sm-font-size-subtitle: 32rpx;
$sm-font-size-title: 36rpx;
$sm-font-size-display: 40rpx;

/* Spacing */
$sm-space-1: 8rpx;
$sm-space-2: 16rpx;
$sm-space-3: 24rpx;
$sm-space-4: 32rpx;
$sm-space-6: 48rpx;
$sm-space-8: 64rpx;
$sm-space-10: 80rpx;
$sm-space-12: 96rpx;

/* Radius */
$sm-radius-xs: 8rpx;
$sm-radius-sm: 12rpx;
$sm-radius-md: 16rpx;
$sm-radius-full: 999rpx;
```

### 13.3 Tailwind Config Example

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        sm: {
          primary: "#256D85",
          "primary-hover": "#1F5D72",
          "primary-active": "#18495A",
          "primary-soft": "#EAF5F7",
          accent: "#F59E0B",
          "accent-soft": "#FFF7E6",
          success: "#16A34A",
          "success-soft": "#EAF8EF",
          warning: "#D97706",
          "warning-soft": "#FFF4DF",
          danger: "#DC2626",
          "danger-soft": "#FDECEC",
          bg: "#F6F8FA",
          surface: "#FFFFFF",
          "surface-muted": "#F1F5F8",
          border: "#DDE5EA",
          "border-subtle": "#E8EEF2",
          text: "#172026",
          "text-secondary": "#4B5B66",
          "text-muted": "#7A8A95",
          "text-disabled": "#A8B4BC"
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      },
      fontSize: {
        "sm-caption": ["12px", { lineHeight: "1.5" }],
        "sm-code": ["13px", { lineHeight: "1.6" }],
        "sm-body": ["14px", { lineHeight: "1.6" }],
        "sm-subtitle": ["16px", { lineHeight: "1.4" }],
        "sm-title": ["18px", { lineHeight: "1.3" }],
        "sm-display": ["20px", { lineHeight: "1.3" }]
      },
      spacing: {
        "sm-1": "4px",
        "sm-2": "8px",
        "sm-3": "12px",
        "sm-4": "16px",
        "sm-6": "24px",
        "sm-8": "32px",
        "sm-10": "40px",
        "sm-12": "48px"
      },
      borderRadius: {
        "sm-xs": "4px",
        "sm-sm": "6px",
        "sm-md": "8px",
        "sm-full": "999px"
      },
      boxShadow: {
        "sm-input-bar": "0 -4px 16px rgba(23, 32, 38, 0.06)",
        "sm-popover": "0 8px 24px rgba(23, 32, 38, 0.10)",
        "sm-modal": "0 12px 32px rgba(23, 32, 38, 0.12)"
      },
      transitionDuration: {
        "sm-fast": "120ms",
        "sm-base": "180ms",
        "sm-slow": "240ms"
      },
      transitionTimingFunction: {
        "sm-ease": "cubic-bezier(0.2, 0, 0, 1)"
      },
      maxWidth: {
        "sm-content": "1120px",
        "sm-chat": "760px"
      },
      minHeight: {
        "sm-touch": "44px"
      }
    }
  }
};
```

## 14. 设计验收清单

- 聊天问答页是否是视觉和交互优先级最高的页面。
- 知识库、文件、会话三类列表是否能一眼区分对象和状态。
- 上传与解析是否有进度、阶段和失败恢复动作。
- AI 回答是否能清楚区分用户消息、AI 消息和引用来源。
- 移动端底部输入、发送、上传等主操作是否触达顺手。
- 所有状态是否不只依赖颜色表达。
- 主按钮是否每个区域最多一个。
- 圆角是否控制在 `8px` 以内，普通卡片是否避免厚重阴影。
- 文案是否具体说明下一步，避免“确定”“异常”等含糊表达。
