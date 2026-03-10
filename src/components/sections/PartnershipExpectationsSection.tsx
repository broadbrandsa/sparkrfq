import { FadeIn } from "@/components/FadeIn";

const principles = [
  {
    num: "01",
    title: "Shared Performance Metrics",
    desc: "Marketing optimisation will be guided primarily by Cost Per Enrolment (CPA) and full-funnel performance metrics. Alignment on this measurement framework ensures that both teams evaluate success based on confirmed enrolments rather than lead volume alone.",
    icon: "◈",
  },
  {
    num: "02",
    title: "Access to Data",
    desc: "Access to CRM data is essential to enable accurate reporting and campaign optimisation. Integrating enrolment outcomes back into marketing platforms allows campaigns to learn which audiences historically produce enrolled learners.",
    icon: "◎",
  },
  {
    num: "03",
    title: "Admissions Feedback Loop",
    desc: "Regular feedback from admissions teams helps refine campaign targeting and improve lead quality. Insights from admissions interactions provide valuable signals that can be used to optimise audience targeting and messaging.",
    icon: "◐",
  },
  {
    num: "04",
    title: "Testing and Iteration",
    desc: "Campaign performance improves through structured experimentation. The partnership will prioritise continuous testing across creative, targeting and conversion environments to identify the highest-performing strategies.",
    icon: "◇",
  },
  {
    num: "05",
    title: "Shared Visibility",
    desc: "Through live reporting dashboards and structured working sessions, both teams maintain full visibility into marketing performance, lead quality and enrolment outcomes.",
    icon: "◉",
  },
];

export function PartnershipExpectationsSection() {
  return (
    <section
      id="partnership-expectations"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Ghost word background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold whitespace-nowrap"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(8rem, 22vw, 22rem)",
            color: "rgba(31,73,201,0.04)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          ALIGNMENT
        </span>
      </div>

      <div className="container-spark relative z-10">

        {/* Header */}
        <FadeIn>
          <p className="section-label mb-6">Partnership Expectations</p>
          <h2
            className="font-bold mb-16"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
              color: "var(--spark-purple)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Alignment
            <br />
            <span style={{ color: "rgba(31,73,201,0.2)" }}>for success</span>
          </h2>
        </FadeIn>

        {/* Intro — 2-col desktop */}
        <FadeIn delay={80}>
          <div className="grid md:grid-cols-2 gap-8 mb-16 pb-16" style={{ borderBottom: "1px solid rgba(31,73,201,0.1)" }}>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(31,73,201,0.7)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              For the Enrolment Growth Engine to operate effectively, both teams must work within a
              shared framework of collaboration, transparency and decision-making.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(31,73,201,0.55)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              This partnership model is designed to ensure that marketing strategy, campaign
              execution and admissions outcomes remain aligned throughout the year. To support this
              approach, several operational principles are required.
            </p>
          </div>
        </FadeIn>

        {/* Principle cards */}
        <div className="space-y-4">
          {principles.map((p, i) => (
            <FadeIn key={p.num} delay={i * 90}>
              <div
                className="group relative rounded-2xl px-8 py-7 flex gap-8 items-start transition-all duration-300"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(31,73,201,0.1)",
                  borderLeft: "3px solid #1f49c9",
                  boxShadow: "0 2px 16px rgba(31,73,201,0.04)",
                }}
              >
                {/* Number */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                  <span
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2.2rem",
                      color: "rgba(31,73,201,0.15)",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="flex-shrink-0 w-px self-stretch"
                  style={{ background: "rgba(31,73,201,0.1)" }}
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      color: "var(--spark-purple)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(31,73,201,0.55)", fontFamily: "var(--font-body)" }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Icon accent */}
                <div
                  className="flex-shrink-0 text-2xl self-center hidden md:block"
                  style={{ color: "rgba(31,73,201,0.12)", fontFamily: "var(--font-heading)" }}
                >
                  {p.icon}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom tag */}
        <FadeIn delay={520}>
          <div className="mt-12 flex justify-end">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{ background: "rgba(31,73,201,0.06)", border: "1px solid rgba(31,73,201,0.12)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
              <span
                className="text-xs font-bold tracking-[0.15em] uppercase"
                style={{ color: "#1f49c9", fontFamily: "var(--font-body)" }}
              >
                Mutual commitment required
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
