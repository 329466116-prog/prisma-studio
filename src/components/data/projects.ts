export interface Project {
  id: number;
  name: string;
  category: "Client" | "Personal";
  /** 布局变体；缺省 = "default"（原 3 图布局） */
  layout?: "default" | "qwenTTS";
  imageCol1Top: string;
  imageCol1Bottom: string;
  imageCol2Tall: string;
  /** 文字块（覆盖左列上下两张图片位置）。存在时优先于 imageCol1Top/Bottom */
  textCol1Top?: { label?: string; body: string };
  textCol1Bottom?: { label?: string; body: string };
  /** qwenTTS 布局专用字段 */
  audioSrc?: string;
  audioName?: string;
  audioWriter?: string;
  audioCover?: string;
  audioCustomTrackInfo?: string; // 换行分隔的标题文案
  /** 背景图 URL（qwenTTS 布局上半部装饰） */
  bgImage?: string;
  infoTitle?: string;
  infoBody?: string;
  scriptTitle?: string;
  scriptBody?: string;
  /** 外部链接（覆盖默认的「查看项目」跳转） */
  linkUrl?: string;
  linkLabel?: string;
  linkTarget?: "_blank" | "_self";
  linkRel?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Qwen3-TTS 语音生成",
    category: "Personal",
    layout: "qwenTTS",
    // imageCol1Top/Bottom/imageCol2Tall 在 qwenTTS 布局下不使用
    imageCol1Top: "",
    imageCol1Bottom: "",
    imageCol2Tall: "",
    // 音频：Cloudflare R2 桶公共 URL
    audioSrc:
      "https://pub-3cb4b1d4ef984c2bb650fbc36d6e7da4.r2.dev/audio/TTS_final.mp3",
    audioName: "Qwen3-TTS · 小说多角色语音生成 · 全自动语音生成流程",
    audioWriter: "钱多多 · Qwen3-TTS 1.7B · MLX 加速",
    audioCover: "",
    // 标题过长被库默认 trackInfo 截断。用 customTrackInfo 传多行 JSX
    // 220px 容器装 14px 中文：每行 ≤9 字符才不被裁
    audioCustomTrackInfo: "Qwen3-TTS\n小说多角色语音生成\n全自动语音生成流程",
    // 整张卡片背景图（多多指定的鲜花图）
    bgImage:
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    // Q4：多多亲自写的功能介绍
    infoTitle: "Qwen3-TTS 语音生成",
    infoBody: `我使用 OpenClaw 实现 qwen3-tts 模型本地部署，实现提供剧本给龙虾，龙虾自动输出剧本角色语音。

以上示例语音中的角色描述如下：
1. "旁白": "声音特征沉稳、客观、略带叙事感的女播音腔，普通话标准，语速适中，带有轻微的环境氛围渲染，语调平缓但富有感染力，在关键情节时稍作停顿，增强画面感。情感冷静旁观，偶尔带一丝微妙的反讽"
2. "小林": "25岁男性上班族，声音清亮但时常犹豫，语速时快时慢，紧张时会轻微结巴。情绪波动明显，从低声呢喃到突然激动再到自我怀疑的叹气。肢体语言丰富，经常无意识的小动作"
3. "御姐": "模拟成熟性感的御姐音色，声音略带磁性且沉稳，语速不快不慢，语调充满自信和一丝挑逗，尾音可以稍微拖长并上扬，给人一种游刃有余的掌控感。"`,
    // Q5：多多给的剧本正文
    scriptTitle: "语音剧本",
    scriptBody: `旁白: 小林今天第三次走神了。酒吧昏黄的灯光晃得他心跳加速，而吧台对面那个红唇微扬的女人，正用指尖轻轻摩挲着酒杯边缘。
御姐: 小弟弟，有兴趣陪姐姐喝一杯吗？
小林: 啊？我、我……我其实不太会喝酒……
旁白: 他的手指无意识地抠着杯沿，喉结上下滚动，像被什么无形的东西掐住了呼吸。
御姐: 不会喝？那正好——姐姐教你。这杯莫吉托，甜得刚好，就像你刚才偷看我的眼神。
小林: 我、我没偷看！……好吧，看了一眼。就一眼！
旁白: 他猛地坐直，又立刻缩回肩膀，仿佛那句话烫伤了自己的嘴。
御姐: 紧张什么？你连坐姿都在发抖……要不要靠过来一点？这里太吵了。
小林: 靠过去？可、可我们才第一次见面……你都不认识我……
御姐: 名字不重要，感觉才重要。......而我感觉……你有点可爱。
旁白: 小林的耳朵瞬间红透，连耳后那颗小痣都像在发烫。他想逃，脚却像钉在了高脚凳上。
小林: 可爱？没人这么说过我……他们都说我太闷，连朋友圈都发不出手……
御姐: 那现在呢？敢不敢发一条——'今晚，和一个危险又迷人的姐姐喝了一杯'？
小林: ……我连配图都不敢选。你笑起来太……太有杀伤力了。
御姐: 那就别发了。有些故事，只适合藏在两个人的记忆里——比如，接下来你打算请我跳支舞吗？
旁白: 他张了张嘴，没发出声音。但这一次，他没有低头，而是轻轻推开了那杯没动过的苏打水，朝她伸出了手。`,
  },
  {
    id: 2,
    name: "小学课程复习小助手 v1.0",
    category: "Personal",
    // 左上：介绍、用途、3 种模式、双端适配
    textCol1Top: {
      label: "OVERVIEW · 简介",
      body: `课程复习小助手 — 帮小学语文（部编版 2 年级下册）课后巩固。

【用途】课后复习 · 家长辅导 · 考前回顾
【3 种模式】
1. 拼音 → 词语（4 选 1）
2. 背诵填空（整段 / 末尾 / 随机挖空）
3. 选拼音（4 选 1 + 音调干扰）
【内容】555 词 · 12 段古诗
【双端】PC + 移动端（≤768px）
`,
    },
    // 左下：技术栈与后台入库路线
    textCol1Bottom: {
      label: "TECH STACK · 技术栈",
      body: `零后端单页应用，全部跑在浏览器里。

【页面技术栈】
- HTML + CSS + JS（无框架）
- Orbitron + Noto Sans SC + JetBrains Mono
- 霓虹科技发光

【后台知识库】
- PDF → pdftotext · frontmatter + Markdown
- knowledge/ 目录

【复习内容入库】
- extract_words.py（jieba + pypinyin）
- word_bank.js · recite_bank.js
- 入库：MD5 校验
`,
    },
    imageCol1Top: "",
    imageCol1Bottom: "",
    imageCol2Tall: "/cards/cyber-review-v2.webp",
    // 跳转到本地的「二年级下册·霓虹复习舱」独立页面
    linkUrl: "/review/review.html",
    linkLabel: "进入复习舱",
  },
  {
    id: 3,
    name: "Solaris Digital",
    category: "Client",
    imageCol1Top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    imageCol1Bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    imageCol2Tall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
  {
    id: 4,
    name: "Aether Brand",
    category: "Personal",
    imageCol1Top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    imageCol1Bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    imageCol2Tall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
];

export const SERVICES = [
  {
    id: 1,
    name: "AI应用产品策划与设计",
    description:
      "作为深耕业务一线的 AI 产品经理，我专注于把真实业务痛点转化为可落地的 AI 产品。18 年 IT 项目交付经验让我习惯从客户场景出发拆解需求、定义 AI 能力边界，在产品立项阶段就能识别技术风险与商业价值的平衡点。\n\n需求阶段，我主导客户访谈、流程梳理与痛点诊断，把模糊的业务诉求翻译成可执行的产品方案与 PRD；设计阶段主导原型评审、跨部门协作与节奏把控，确保算法、工程、设计、客户四方目标对齐。\n\n更擅长产品化能力——把实验室 demo 包装成可交付、可运维、可规模化的标准化产品，包含版本管理、效果监控、用户反馈闭环与持续迭代机制。同时对数据驱动的产品迭代、高合规行业的边界判断有清晰认知，能在 AI 能力上限与业务诉求之间找到稳健的折中点。",
  },
  {
    id: 2,
    name: "大数据分析应用",
    description:
      "聚焦大数据分析全链路能力——从数据中台架构设计、大数据处理与清洗，到数据分析产品落地与面向管理层的数据分析报告输出。擅长把分散的业务系统数据汇聚到统一数据底座，构建可复用的指标体系与可视化看板；通过统计建模、对比分析与趋势研判，输出可落地的业务洞察；并将分析能力沉淀为标准化产品，支持多业务线复用与持续迭代。",
  },
  {
    id: 3,
    name: "智能体与自动化",
    description:
      "在 AI 智能体与自动化方向有持续实战积累。长期使用 Claude Code 承接代码生成与工程任务，熟悉其长上下文与多文件编辑能力；同步深耕 OpenClaw，熟练掌握多渠道投递、Provider 路由、Agent 恢复与 Skills 体系，能基于它编排多步工作流。习惯把重复易错环节抽象为可监控的自动化流水线，沉淀 prompt 与工具调用规范，让智能体在多步任务中可审计。",
  },
  {
    id: 4,
    name: "IT与能源行业咨询",
    description:
      "深耕通信与能源两大行业多年，兼具运营商业务与能源企业 IT 项目的复合背景。熟悉通信行业的业务支撑、计费、客服与政企项目全链路流程；也熟悉能源行业在数字化转型背景下的 IT 建设路径——生产经营管理、数据采集监控、项目管理平台等。能针对客户痛点提供可落地建议，从可行性评估、方案选型到落地路线图，让咨询直接服务于项目交付。",
  },
  {
    id: 5,
    name: "系统集成与项目管理",
    description:
      "在系统集成与项目管理双线均有持续积累。系统集成侧，擅长把 AI 与数据能力接入既有企业系统与数据源，关注接口规范、安全边界与可维护性；项目管理侧持有 PMP 全球项目管理认证，遵循 PMI 体系对范围、进度、成本、质量、风险的全流程管控。习惯在多供应商、多角色项目中担任牵头，让集成方案在严格交付节奏下稳定落地。",
  },
];
