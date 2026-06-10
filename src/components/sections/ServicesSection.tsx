import FadeIn from "../FadeIn";
import { SERVICES } from "../data/projects";

export default function ServicesSection() {
  return (
    <section
      id="services-list"
      className="w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-28">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.id}
            delay={i * 0.1}
            y={20}
            className="border-t border-[rgba(12,12,12,0.15)] last:border-b"
          >
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12">
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] shrink-0 w-[80px] sm:w-[120px] md:w-[160px]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {String(service.id).padStart(2, "0")}
              </span>

              {/* Name + Description */}
              <div className="flex-1">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl mt-3 sm:mt-4 text-[#0C0C0C]"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
