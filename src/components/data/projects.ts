export interface Project {
  id: number;
  name: string;
  category: "Client" | "Personal";
  /** 布局变体；缺省 = "default"（原 3 图布局） */
  layout?: "default" | "qwenTTS";
  imageCol1Top: string;
  imageCol1Bottom: string;
  imageCol2Tall: string;
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
    name: "Aura Brand Identity",
    category: "Personal",
    imageCol1Top: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    imageCol1Bottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    imageCol2Tall: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
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
    name: "AI 应用开发",
    description:
      "端到端设计与开发面向行业特定工作流的 AI 应用——从构思、建模到部署与迭代，全程跟进。",
  },
  {
    id: 2,
    name: "数据分析",
    description:
      "把原始数据转化为可落地的洞察——通过数据看板、统计分析与可视化，支持关键业务决策。",
  },
  {
    id: 3,
    name: "智能体与自动化",
    description:
      "构建 AI 智能体与自动化流水线，处理多步重复任务；可靠性优先，留有清晰的审计链路。",
  },
  {
    id: 4,
    name: "行业咨询",
    description:
      "为团队提供 AI 战略、可行性评估与路线图咨询——把业务目标翻译为可交付的工程项目。",
  },
  {
    id: 5,
    name: "系统集成",
    description:
      "把 AI 能力接入既有企业系统、数据源与工具链，关注安全性、可扩展性与可维护性。",
  },
];
