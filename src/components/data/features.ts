export interface Feature {
  id: number;
  number: string;
  title: string;
  items?: string[];
  description?: string;
  videoUrl?: string;
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    number: "01",
    title: "视频",
    description: "一路折腾的记录。",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
  },
  {
    id: 2,
    number: "02",
    title: "核心技能",
    items: ["PPT", "信息图", "AI 工具链", "脚本自动化"],
  },
  {
    id: 3,
    number: "03",
    title: "最近在玩",
    items: ["last30days", "react-ppt", "remotion", "prisma-studio"],
  },
  {
    id: 4,
    number: "04",
    title: "兴趣爱好",
    items: ["小红书美食", "贴吧", "飞书", "多多车"],
  },
];
