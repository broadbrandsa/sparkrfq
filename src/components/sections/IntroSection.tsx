import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const currentCapabilities = [
  "Campaign strategy & media planning",
  "Creative production & asset development",
  "Website development & optimisation",
  "Performance marketing & paid media",
];

export function IntroSection() {
  return (
    <section id="introduction" className="py-0 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[640px]">

        {/* Left — text */}
        <div
          className="flex flex-col justify-center px-8 md:px-16 py-20"
          style={{ background: "#ffffff" }}
        >
          <FadeIn>
            <p className="section-label mb-5">Introduction</p>
            <h2
              className="font-bold mb-8"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                color: "var(--spark-purple)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
              }}
            >
              The Next Stage
              <br />
              of SPARK&apos;s
              <br />
              <span style={{ color: "var(--spark-light-purple)" }}>Marketing Evolution</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6 max-w-md"
              style={{ color: "rgba(43,4,48,0.7)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              Building on what we have already achieved together, SPARK now has the
              opportunity to evolve its marketing ecosystem into a fully integrated enrolment
              growth system. Current marketing efforts already support the organisation
              through:
            </p>
            <ul className="space-y-3 mb-8">
              {currentCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "var(--spark-orange)" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(43,4,48,0.75)", fontFamily: "var(--font-body)" }}
                  >
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(31,73,201,0.05)",
                border: "1px solid rgba(43,4,48,0.08)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(43,4,48,0.7)", fontFamily: "var(--font-body)" }}
              >
                The next step is to connect these activities into a single system that links marketing
                investment directly to enrolment outcomes.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right — image with overlay */}
        <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
          <Image
            src="/images/IMG_2525_EDITED_1.jpg"
            alt="SPARK Schools marketing"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Purple gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(31,73,201,0.82) 0%, rgba(31,73,201,0.55) 100%)",
            }}
          />
          {/* Stat overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <FadeIn delay={200}>
              <div className="text-center">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                  style={{ background: "rgba(255,72,0,0.15)", border: "1px solid rgba(255,72,0,0.3)" }}
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: "#ff4800" }}
                  >
                    Our Shared Marketing Objective
                  </span>
                </div>
                <p
                  className="text-white font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  A predictable and measurable
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>
                    enrolment growth engine
                  </span>
                </p>
                <div
                  className="w-12 h-px mx-auto my-6"
                  style={{ background: "rgba(255,72,0,0.6)" }}
                />
                <p
                  className="text-sm leading-relaxed max-w-sm mx-auto"
                  style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}
                >
                  By aligning marketing activity, data infrastructure and admissions
                  outcomes, every rand invested in marketing should ultimately
                  drive confirmed enrolments.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
