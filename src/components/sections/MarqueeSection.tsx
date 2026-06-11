import { useRef } from "react";
import { MARQUEE_IMAGES, marqueeUrl } from "../data/marquee-images";

/**
 * 跑马灯 2.1（Thu 09:20 · 15 张两排分配版）
 * — Row 1 = 8 张图（前 8 张），Row 2 = 7 张图（后 7 张）
 * — 上下排零重复，15 张图全部用上
 * — 每排独立 doubled（[...imgs, ...imgs]）+ translateX 0%→-50% 无缝循环
 * — Row 1 向左循环，Row 2 向右循环（视觉变化）
 * — 维护：上传新图到 R2 → 重跑 sync-marquee.mjs → 数组自动更新
 *
 * 注意：ROW1_COUNT + ROW2_COUNT 必须等于 MARQUEE_IMAGES.length
 * 当前：8 + 7 = 15
 */

const ROW1_COUNT = 8;
const ROW2_COUNT = MARQUEE_IMAGES.length - ROW1_COUNT; // 15 - 8 = 7

if (ROW2_COUNT <= 0) {
 throw new Error(
 `MARQUEE_IMAGES.length (${MARQUEE_IMAGES.length}) must be > ROW1_COUNT (${ROW1_COUNT})`
 );
}

const ROW1_IMGS = Array.from({ length: ROW1_COUNT }, (_, i) => ({
 id: i,
 src: marqueeUrl(MARQUEE_IMAGES[i]),
}));
const ROW2_IMGS = Array.from({ length: ROW2_COUNT }, (_, i) => ({
 id: i,
 src: marqueeUrl(MARQUEE_IMAGES[ROW1_COUNT + i]),
}));

const ROW1_DOUBLED = [...ROW1_IMGS, ...ROW1_IMGS]; // 16 张
const ROW2_DOUBLED = [...ROW2_IMGS, ...ROW2_IMGS]; // 14 张

export default function MarqueeSection() {
 const sectionRef = useRef<HTMLElement | null>(null);

 return (
 <section
 ref={sectionRef}
 id="services"
 className="w-full pt-24 sm:pt-32 md:pt-40 pb-10"
 >
 {/* Row 1 - 8 张图，自动向左循环 */}
 <div className="overflow-hidden mb-3">
 <div className="flex gap-3 marquee-track marquee-track-left">
 {ROW1_DOUBLED.map((img, i) => (
 <img
 key={`r1-${i}`}
 src={img.src}
 alt=""
 loading="eager"
 draggable={false}
 className="rounded-2xl object-cover flex-shrink-0"
 style={{
 width: "420px",
 height: "236px",
 display: "block",
 }}
 />
 ))}
 </div>
 </div>

 {/* Row 2 - 7 张图，自动向右循环 */}
 <div className="overflow-hidden">
 <div className="flex gap-3 marquee-track marquee-track-right">
 {ROW2_DOUBLED.map((img, i) => (
 <img
 key={`r2-${i}`}
 src={img.src}
 alt=""
 loading="eager"
 draggable={false}
 className="rounded-2xl object-cover flex-shrink-0"
 style={{
 width: "420px",
 height: "236px",
 display: "block",
 }}
 />
 ))}
 </div>
 </div>
 </section>
 );
}
