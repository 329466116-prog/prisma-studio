/**
 * 跑马灯图片清单（自动生成于 2026-06-11T02:37:13.435Z）
 *
 * 维护流程：
 * 1. 上传图片到 R2 bucket: qddmedia → img/Marquee/ 目录
 * 2. 重跑本脚本：node /Users/qiandd/.openclaw/tools/r2-tool/sync-marquee.mjs
 *
 * ⚠️ 不要手改 — 上传新图后用脚本同步
 */

const R2_BASE = "https://pub-3cb4b1d4ef984c2bb650fbc36d6e7da4.r2.dev";
const R2_PREFIX = "img/Marquee";

/**
 * 图片文件名（仅 basename，不含 prefix），按数字自然数排序
 * 跑马灯按数组顺序循环取图，模数取余支持任意数量
 */
export const MARQUEE_IMAGES: string[] = [
 "生成杂志封面图 (21).jpg",
 "生成杂志封面图 (22).jpg",
 "生成杂志封面图 (23).jpg",
 "生成杂志封面图 (24).jpg",
 "生成杂志封面图 (25).jpg",
 "生成杂志封面图 (26).jpg",
 "生成杂志封面图 (27).jpg",
 "生成杂志封面图 (28).jpg",
 "生成杂志封面图 (29).jpg",
 "生成杂志封面图 (32).jpg",
 "生成杂志封面图 (33).jpg",
 "生成杂志封面图 (34).jpg",
 "生成杂志封面图 (35).jpg",
];

export function marqueeUrl(name: string): string {
 return R2_BASE + "/" + R2_PREFIX + "/" + encodeURIComponent(name);
}
