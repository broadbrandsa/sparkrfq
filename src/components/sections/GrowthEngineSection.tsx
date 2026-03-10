import { FadeIn } from "@/components/FadeIn";

const stages = [
  {
    num: "01",
    title: "Demand Generation",
    desc: "Campaigns designed to attract parents who are actively exploring schooling options or who may be dissatisfied with their current schooling experience.",
    accent: "#ff4800",
  },
  {
    num: "02",
    title: "Lead Capture",
    desc: "Conversion-focused landing environments that encourage meaningful engagement from prospective families.",
    accent: "#1f49c9",
  },
  {
    num: "03",
    title: "Lead Qualification",
    desc: "Identifying and prioritising high-intent families who are most likely to proceed through the enrolment process.",
    accent: "#00a8e1",
  },
  {
    num: "04",
    title: "Parent Nurturing",
    desc: "Providing prospective families with timely information and support as they evaluate schooling options.",
    accent: "#801078",
  },
  {
    num: "05",
    title: "Admissions Conversion",
    desc: "Supporting admissions teams by ensuring they engage with higher-quality prospective families.",
    accent: "#ff4800",
  },
  {
    num: "06",
    title: "Performance Intelligence",
    desc: "Tracking the complete journey from first interaction through to confirmed enrolment.",
    accent: "#1f49c9",
  },
];

export function GrowthEngineSection() {
  return (
    <section id="growth-engine" className="py-24 px-6" style={{ background: "#f9fafb" }}>
      <div className="container-spark">

        <FadeIn>
          <p className="section-label mb-5">The Framework</p>
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
            <div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                  color: "var(--spark-purple)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                The enrolment
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>growth engine</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                To operationalise this shift, we propose a structured system that connects marketing
                activity, parent engagement and enrolment outcomes into a single measurable engine.
                Six interconnected stages — from first impression to confirmed learner.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Pipeline stages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage, i) => (
            <FadeIn key={stage.num} delay={i * 80}>
              <div
                className="card-spark rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
              >
                {/* Large background number */}
                <span
                  className="absolute -right-3 -top-4 font-bold select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "7rem",
                    color: "rgba(43,4,48,0.04)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {stage.num}
                </span>

                {/* Stage number pill */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold"
                    style={{
                      background: stage.accent,
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {stage.num}
                  </span>
                  {/* Connector arrow — not on last item */}
                  {i < stages.length - 1 && (
                    <span className="hidden lg:block text-xs" style={{ color: "rgba(43,4,48,0.2)" }}>
                      {i % 3 !== 2 ? "→" : ""}
                    </span>
                  )}
                </div>

                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.125rem",
                    color: "var(--spark-purple)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
                >
                  {stage.desc}
                </p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 w-12 rounded-full"
                  style={{ background: stage.accent }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Connecting statement */}
        <FadeIn delay={520}>
          <div
            className="mt-12 rounded-2xl p-8 text-center"
            style={{
              background: "rgba(31,73,201,0.05)",
              border: "1px solid rgba(43,4,48,0.08)",
            }}
          >
            <p
              className="text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "rgba(43,4,48,0.7)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              By connecting these stages, SPARK&apos;s marketing ecosystem becomes an{" "}
              <strong style={{ color: "var(--spark-purple)" }}>integrated system</strong>{" "}
              designed to produce measurable enrolment outcomes — not just leads.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
