import { useEffect, useRef, useState } from "react";

const ALL_GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  // Tripled for seamless scrolling
  const row1Gifs = ALL_GIFS.slice(0, 11);
  const row2Gifs = ALL_GIFS.slice(11);
  const row1Tripled = [...row1Gifs, ...row1Gifs, ...row1Gifs];
  const row2Tripled = [...row2Gifs, ...row2Gifs, ...row2Gifs];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const calculated = (window.scrollY - rect.top + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: "#0C0C0C" }}
    >
      {/* Row 1 - moves right */}
      <div className="overflow-hidden mb-3">
        <div
          className="flex gap-3 marquee-tile"
          style={{ transform: `translateX(${offset - 200}px)` }}
        >
          {row1Tripled.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: "420px", height: "270px" }}
            />
          ))}
        </div>
      </div>

      {/* Row 2 - moves left */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 marquee-tile"
          style={{ transform: `translateX(${-(offset - 200)}px)` }}
        >
          {row2Tripled.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: "420px", height: "270px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
