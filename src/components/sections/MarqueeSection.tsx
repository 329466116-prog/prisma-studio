import { useRef } from "react";

/**
 * ⭐ 跑马灯 1.0 试运营版（Thu 00:35）
 * — 用单张 R2 URL 验证自动循环效果（多多先传 1 张试）
 * — 成功后再换成 20 张本地下载的 motionsites.ai 动图（走 R2）
 *
 * 设计：
 * — 两行跑马灯，row1 向左 / row2 向右（视觉变化）
 * — 纯 CSS @keyframes 循环，不依赖 scroll
 * — 用 doubled（[...imgs, ...imgs]）+ translateX 0%→-50% 实现无缝循环
 *   （doubled 内容相同，-50% 位置视觉等同 0%）
 * — 60s 一周期，足够慢
 */
const TEST_IMG = "https://pub-3cb4b1d4ef984c2bb650fbc36d6e7da4.r2.dev/img/Marquee/%E7%94%9F%E6%88%90%E6%9D%82%E5%BF%97%E5%B0%81%E9%9D%A2%E5%9B%BE%20(1).png";

// 铺满视口的图片数 = ceil(视口宽 / (图宽 + gap)) + 2 张缓冲
// 1440 / (420+12) ≈ 3.3 → 用 6 张足够
const IMG_COUNT = 6;
const ROW_IMGS = Array.from({ length: IMG_COUNT }, (_, i) => ({ id: i, src: TEST_IMG }));
const ROW_DOUBLED = [...ROW_IMGS, ...ROW_IMGS];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full pt-24 sm:pt-32 md:pt-40 pb-10"
    >
      {/* Row 1 - 自动向左循环 */}
      <div className="overflow-hidden mb-3">
        <div className="flex gap-3 marquee-track marquee-track-left">
          {ROW_DOUBLED.map((img, i) => (
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

      {/* Row 2 - 自动向右循环 */}
      <div className="overflow-hidden">
        <div className="flex gap-3 marquee-track marquee-track-right">
          {ROW_DOUBLED.map((img, i) => (
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
