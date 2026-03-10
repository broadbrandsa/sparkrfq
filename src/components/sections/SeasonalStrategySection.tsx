import { FadeIn } from "@/components/FadeIn";

const strategyPhases = [
  {
    period: "Pre-February",
    title: "Brand Building Strategy",
    desc: "Planning awareness and brand campaigns for the out-of-enrolment period.",
    dot: "#1f49c9",
  },
  {
    period: "Pre-June",
    title: "Pre-Enrolment Readiness",
    desc: "Preparing marketing systems and lead generation strategies for the upcoming enrolment cycle.",
    dot: "#1f49c9",
  },
  {
    period: "Pre-October",
    title: "Full Enrolment Readiness",
    desc: "Final campaign planning, creative development and performance forecasting for the peak enrolment season.",
    dot: "#ff4800",
  },
];

const phases = [
  {
    period: "Feb – Jun",
    label: "Brand Building Phase",
    icon: "◎",
    accent: "#1f49c9",
    bg: "rgba(31,73,201,0.06)",
    border: "rgba(31,73,201,0.2)",
    tag: "Out of season",
    heading: "Long-Term Brand Positioning",
    body: "This period occurs outside the main enrolment window and focuses on positioning SPARK as a leading educational option before parents actively begin searching for schools.",
    activities: [
      "Brand storytelling & content",
      "Community engagement campaigns",
      "School culture documentation",
      "Parent testimonial production",
    ],
    focus: "Awareness",
  },
  {
    period: "Jun – Sep",
    label: "Pre-Enrolment Phase",
    icon: "◑",
    accent: "#1f49c9",
    bg: "rgba(31,73,201,0.06)",
    border: "rgba(31,73,201,0.2)",
    tag: "Building pipeline",
    heading: "Early Interest Capture",
    body: "As the next enrolment cycle approaches, marketing activity shifts toward capturing early interest from prospective families and promoting opportunities such as school visits and open days.",
    activities: [
      "Targeted lead generation campaigns",
      "School visit & open day promotion",
      "Early pipeline development",
      "Brand storytelling continues",
    ],
    focus: "Consideration",
  },
  {
    period: "Oct – Jan",
    label: "Full Enrolment Season",
    icon: "●",
    accent: "#ff4800",
    bg: "rgba(255,72,0,0.06)",
    border: "rgba(255,72,0,0.2)",
    tag: "Peak performance",
    heading: "Maximum Conversion Focus",
    body: "Peak enrolment window requiring the strongest performance marketing focus. Campaigns are continually refined based on enrolment data to produce the highest possible number of confirmed learners.",
    activities: [
      "High-intent audience targeting",
      "Lead capture optimisation",
      "Admissions conversion campaigns",
      "Real-time performance refinement",
    ],
    focus: "Conversion",
  },
];

export function SeasonalStrategySection() {
  return (
    <section
      id="seasonal-strategy"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#2B0430" }}
    >

      <div className="container-spark relative z-10">
        <FadeIn>
          <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Marketing Strategy
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mb-14 items-end">
            <div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                By enrolment
                <br />
                <span style={{ color: "rgba(255,255,255,0.2)" }}>season</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                Our marketing strategy continues to align with the natural enrolment cycle of the
                academic year. Each phase requires a different strategic focus — from
                brand building to maximum conversion.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Timeline bar */}
        <FadeIn delay={100}>
          <div className="hidden md:flex items-center mb-10 rounded-full overflow-hidden" style={{ height: "4px", background: "rgba(255,255,255,0.08)" }}>
            <div className="flex-1 h-full" style={{ background: "#1f49c9", opacity: 0.7 }} />
            <div className="flex-1 h-full" style={{ background: "#1f49c9", opacity: 0.7 }} />
            <div className="flex-1 h-full" style={{ background: "#ff4800", opacity: 0.7 }} />
          </div>
        </FadeIn>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <FadeIn key={phase.period} delay={i * 100}>
              <div
                className="rounded-2xl p-7 h-full flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid rgba(255,255,255,0.09)`,
                  borderTop: `3px solid ${phase.accent}`,
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p
                      className="text-xs font-bold tracking-[0.15em] uppercase mb-1"
                      style={{ color: phase.accent, fontFamily: "var(--font-body)" }}
                    >
                      {phase.tag}
                    </p>
                    <p
                      className="font-bold text-2xl"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#ffffff",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {phase.period}
                    </p>
                  </div>
                  <span
                    className="text-2xl"
                    style={{ color: phase.accent }}
                  >
                    {phase.icon}
                  </span>
                </div>

                <p
                  className="font-bold mb-3 text-base"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {phase.label}
                </p>
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  {phase.body}
                </p>

                {/* Activity list */}
                <div className="space-y-2">
                  {phase.activities.map((act) => (
                    <div key={act} className="flex items-start gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: phase.accent }}
                      />
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
                      >
                        {act}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Focus tag */}
                <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                    style={{
                      background: `${phase.accent}22`,
                      color: phase.accent,
                      border: `1px solid ${phase.accent}44`,
                    }}
                  >
                    Primary focus: {phase.focus}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Annual Strategic Planning Sessions */}
        <FadeIn delay={400}>
          <div className="mt-14">
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-6"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
            >
              Annual Strategic Planning Sessions
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {strategyPhases.map((phase, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: phase.dot }} />
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] uppercase"
                      style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                    >
                      {phase.period}
                    </span>
                  </div>
                  <h4
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {phase.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
                  >
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-6 text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
            >
              These sessions ensure that marketing activity remains proactive and aligned with
              SPARK&apos;s long-term growth objectives.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
