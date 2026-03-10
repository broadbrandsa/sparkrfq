import { FadeIn } from "@/components/FadeIn";

const currentChannels = [
  "Paid Media",
  "Website & Landing Pages",
  "SEO / Organic Content",
  "Digital Out-of-Home",
  "Parent Communications",
  "Admissions Process",
];

const proposedLeft = ["Paid Media", "SEO / Organic Content", "Digital Out-of-Home"];
const proposedRight = ["Website & Landing Pages", "Parent Communications", "Admissions Process"];

const threePhases = [
  {
    period: "Feb – Jun",
    label: "Brand Building Phase",
    focus: "Awareness, storytelling and brand visibility.",
    accent: "#1f49c9",
    bg: "rgba(31,73,201,0.06)",
    border: "rgba(31,73,201,0.18)",
  },
  {
    period: "Jun – Sep",
    label: "Pre-Enrolment Phase",
    focus: "Early interest, school visits and pipeline building.",
    accent: "#1f49c9",
    bg: "rgba(31,73,201,0.06)",
    border: "rgba(31,73,201,0.18)",
  },
  {
    period: "Oct – Jan",
    label: "Enrolment Season",
    focus: "Conversion, admissions engagement and confirmed enrolments.",
    accent: "#ff4800",
    bg: "rgba(255,72,0,0.05)",
    border: "rgba(255,72,0,0.18)",
  },
];

const connectedChannels = [
  { label: "Paid media campaigns", desc: "Support the seasonal strategy" },
  { label: "Website & landing pages", desc: "Reinforce campaign messaging" },
  { label: "SEO & organic content", desc: "Support long-term discoverability" },
  { label: "Digital out-of-home", desc: "Strengthen local brand visibility" },
  { label: "Admissions communications", desc: "Support parents through the enrolment journey" },
];

export function UnifiedGrowthSection() {
  return (
    <section
      id="unified-growth"
      className="py-24 px-6"
      style={{ background: "#ffffff" }}
    >
      <div className="container-spark">

        {/* Header */}
        <FadeIn>
          <p className="section-label mb-5">Strategic Direction</p>
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                  color: "var(--spark-purple)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                From Lead-Driven
                <br />
                <span style={{ color: "rgba(31,73,201,0.2)" }}>to Unified Growth</span>
              </h2>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              SPARK&apos;s current marketing ecosystem already generates significant demand and awareness
              across digital channels. However, much of the day-to-day activity is driven by lead
              generation targets rather than a unified marketing strategy — which can lead to different
              channels operating independently rather than as a coordinated system.
            </p>
          </div>
        </FadeIn>

        {/* Current vs Proposed Diagram */}
        <FadeIn delay={100}>
          <p
            className="text-xs font-bold tracking-[0.18em] uppercase mb-6"
            style={{ color: "rgba(43,4,48,0.3)", fontFamily: "var(--font-body)" }}
          >
            The Transition
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-16">

            {/* Current State */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "#f9fafb", border: "1px solid rgba(43,4,48,0.08)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: "rgba(43,4,48,0.25)" }} />
                <span
                  className="text-[9px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "rgba(43,4,48,0.35)", fontFamily: "var(--font-body)" }}
                >
                  Current State
                </span>
              </div>
              <p
                className="text-sm font-bold mb-5"
                style={{ fontFamily: "var(--font-heading)", color: "rgba(43,4,48,0.6)", letterSpacing: "-0.01em" }}
              >
                Lead-driven, disconnected channels
              </p>

              {/* Scattered channel grid — no central connection */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {currentChannels.map((ch) => (
                  <div
                    key={ch}
                    className="rounded-xl px-3 py-2.5 flex items-center gap-2"
                    style={{
                      background: "#ffffff",
                      border: "1px dashed rgba(43,4,48,0.12)",
                    }}
                  >
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(43,4,48,0.2)" }} />
                    <span
                      className="text-[10px] leading-tight"
                      style={{ color: "rgba(43,4,48,0.45)", fontFamily: "var(--font-body)" }}
                    >
                      {ch}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="rounded-lg px-3 py-2 text-center"
                style={{ background: "rgba(43,4,48,0.04)", border: "1px solid rgba(43,4,48,0.06)" }}
              >
                <span
                  className="text-[10px]"
                  style={{ color: "rgba(43,4,48,0.35)", fontFamily: "var(--font-body)" }}
                >
                  Each channel optimised independently around CPL
                </span>
              </div>
            </div>

            {/* Proposed State */}
            <div
              className="rounded-2xl p-7"
              style={{ background: "rgba(31,73,201,0.03)", border: "1px solid rgba(31,73,201,0.14)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: "#ff4800" }} />
                <span
                  className="text-[9px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}
                >
                  Proposed State
                </span>
              </div>
              <p
                className="text-sm font-bold mb-5"
                style={{ fontFamily: "var(--font-heading)", color: "rgba(43,4,48,0.7)", letterSpacing: "-0.01em" }}
              >
                Strategy-driven, integrated system
              </p>

              {/* Hub-and-spoke diagram */}
              <div className="flex items-center gap-2 mb-4">
                {/* Left channels */}
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  {proposedLeft.map((ch) => (
                    <div
                      key={ch}
                      className="rounded-xl px-2.5 py-2 text-right"
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(31,73,201,0.14)",
                      }}
                    >
                      <span
                        className="text-[10px] leading-tight"
                        style={{ color: "rgba(43,4,48,0.65)", fontFamily: "var(--font-body)" }}
                      >
                        {ch}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Left arrows */}
                <div className="flex flex-col gap-2 flex-shrink-0 items-center">
                  {proposedLeft.map((_, i) => (
                    <span
                      key={i}
                      className="text-sm font-bold"
                      style={{ color: "rgba(31,73,201,0.4)", lineHeight: "32px" }}
                    >
                      →
                    </span>
                  ))}
                </div>

                {/* Center node */}
                <div
                  className="rounded-xl p-3 flex-shrink-0 text-center"
                  style={{
                    background: "var(--spark-purple)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    minWidth: "80px",
                  }}
                >
                  <p
                    className="text-[7px] font-bold tracking-[0.15em] uppercase mb-1"
                    style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}
                  >
                    Primary Goal
                  </p>
                  <p
                    className="text-[9px] font-bold leading-tight"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#ffffff",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Enrolment Growth Strategy
                  </p>
                </div>

                {/* Right arrows */}
                <div className="flex flex-col gap-2 flex-shrink-0 items-center">
                  {proposedRight.map((_, i) => (
                    <span
                      key={i}
                      className="text-sm font-bold"
                      style={{ color: "rgba(31,73,201,0.4)", lineHeight: "32px" }}
                    >
                      ←
                    </span>
                  ))}
                </div>

                {/* Right channels */}
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  {proposedRight.map((ch) => (
                    <div
                      key={ch}
                      className="rounded-xl px-2.5 py-2"
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(31,73,201,0.14)",
                      }}
                    >
                      <span
                        className="text-[10px] leading-tight"
                        style={{ color: "rgba(43,4,48,0.65)", fontFamily: "var(--font-body)" }}
                      >
                        {ch}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-lg px-3 py-2 text-center"
                style={{ background: "rgba(31,73,201,0.06)", border: "1px solid rgba(31,73,201,0.12)" }}
              >
                <span
                  className="text-[10px]"
                  style={{ color: "rgba(43,4,48,0.5)", fontFamily: "var(--font-body)" }}
                >
                  All channels unified toward confirmed enrolments (CPA)
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* The Opportunity */}
        <FadeIn delay={150}>
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-start">
            <div>
              <p
                className="text-xs font-bold tracking-[0.18em] uppercase mb-4"
                style={{ color: "rgba(43,4,48,0.3)", fontFamily: "var(--font-body)" }}
              >
                The Opportunity
              </p>
              <h3
                className="font-bold mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  color: "var(--spark-purple)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                A coordinated system
                <br />
                <span style={{ color: "rgba(31,73,201,0.25)" }}>around a shared goal</span>
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)" }}
              >
                By aligning marketing activity around a single enrolment growth strategy, SPARK can
                transform its marketing ecosystem into a coordinated system where every channel
                contributes to a shared objective — planned around three phases of the enrolment cycle.
              </p>
            </div>

            {/* Three phases */}
            <div className="space-y-3">
              {threePhases.map((phase) => (
                <div
                  key={phase.period}
                  className="rounded-xl p-4 flex items-start gap-4"
                  style={{ background: phase.bg, border: `1px solid ${phase.border}` }}
                >
                  <div className="flex-shrink-0">
                    <span
                      className="text-xs font-bold block mb-0.5"
                      style={{ fontFamily: "var(--font-heading)", color: phase.accent, letterSpacing: "-0.01em" }}
                    >
                      {phase.period}
                    </span>
                    <span
                      className="text-[9px] font-bold tracking-[0.12em] uppercase"
                      style={{ color: phase.accent, fontFamily: "var(--font-body)", opacity: 0.7 }}
                    >
                      {phase.label}
                    </span>
                  </div>
                  <div className="w-px self-stretch flex-shrink-0" style={{ background: phase.border }} />
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)" }}
                  >
                    {phase.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* A Connected Marketing System */}
        <FadeIn delay={200}>
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "var(--spark-purple)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
              <div>
                <p
                  className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                >
                  A Connected System
                </p>
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                  }}
                >
                  Every channel
                  <br />
                  <span style={{ color: "#ff4800" }}>working together</span>
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  Instead of operating independently, each channel becomes part of a coordinated
                  system designed to support enrolment growth across the full academic year.
                </p>
              </div>

              <div className="space-y-2.5">
                {connectedChannels.map((ch) => (
                  <div
                    key={ch.label}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ff4800" }} />
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-xs font-bold"
                        style={{ fontFamily: "var(--font-heading)", color: "#ffffff", letterSpacing: "-0.01em" }}
                      >
                        {ch.label}
                      </span>
                      <span
                        className="text-xs ml-2"
                        style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                      >
                        — {ch.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
