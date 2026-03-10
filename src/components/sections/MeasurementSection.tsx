import { FadeIn } from "@/components/FadeIn";

const funnelStages = [
  {
    num: "01",
    stage: "Awareness",
    color: "#1f49c9",
    bgColor: "rgba(31,73,201,0.08)",
    borderColor: "rgba(31,73,201,0.2)",
    width: 100,
    metrics: ["Reach", "Impressions", "Video completion rate", "Engagement rate"],
  },
  {
    num: "02",
    stage: "Traffic",
    color: "#00a8e1",
    bgColor: "rgba(0,168,225,0.08)",
    borderColor: "rgba(0,168,225,0.2)",
    width: 80,
    metrics: ["Click-through rate", "Landing page visits", "Cost per click"],
  },
  {
    num: "03",
    stage: "Lead Generation",
    color: "#801078",
    bgColor: "rgba(128,16,120,0.08)",
    borderColor: "rgba(128,16,120,0.2)",
    width: 62,
    metrics: ["Cost per lead", "Lead form completion rate", "Landing page conversion rate"],
  },
  {
    num: "04",
    stage: "Lead Qualification",
    color: "#ff4800",
    bgColor: "rgba(255,72,0,0.07)",
    borderColor: "rgba(255,72,0,0.18)",
    width: 46,
    metrics: ["Qualified lead rate", "Response rate to first contact", "Engagement with follow-up"],
  },
  {
    num: "05",
    stage: "Admissions",
    color: "#ff4800",
    bgColor: "rgba(255,72,0,0.1)",
    borderColor: "rgba(255,72,0,0.25)",
    width: 32,
    metrics: ["Application rate", "School visit attendance", "Open day attendance"],
  },
  {
    num: "06",
    stage: "Final Outcome",
    color: "#ffffff",
    bgColor: "var(--spark-purple)",
    borderColor: "rgba(255,255,255,0.1)",
    width: 20,
    metrics: ["Enrolment conversion rate", "Cost per enrolment (CPA)"],
    isPrimary: true,
  },
  {
    num: "07",
    stage: "Parent Engagement",
    color: "#1a7a3a",
    bgColor: "rgba(26,122,58,0.07)",
    borderColor: "rgba(26,122,58,0.2)",
    width: 100,
    metrics: ["Parent engagement rate", "Sibling enrolment rate", "Referral participation rate", "Long-term commitment uptake"],
  },
];

const dashboardSources = [
  { label: "Google Ads", sublabel: "Campaign data", color: "#4285F4" },
  { label: "Meta", sublabel: "Ad performance", color: "#1877F2" },
  { label: "Website Analytics", sublabel: "Google Analytics", color: "#00a8e1" },
  { label: "Lead Generation", sublabel: "Form & funnel metrics", color: "#ff4800" },
];

export function MeasurementSection() {
  return (
    <section id="measurement" className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="container-spark">

        {/* Header */}
        <FadeIn>
          <p className="section-label mb-5">Measurement Framework</p>
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
                Full-Funnel
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>Intelligence</span>
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                A layered approach ensuring that marketing decisions are informed by
                performance across the entire funnel — not a single metric.
              </p>
            </div>

            {/* Primary KPI card */}
            <div>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "var(--spark-purple)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                  style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}
                >
                  Primary KPI
                </p>
                <p
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Cost Per
                  <br />
                  <span style={{ color: "#ff4800" }}>Enrolment</span>
                </p>
                <div className="h-px w-full mb-4" style={{ background: "rgba(255,255,255,0.1)" }} />
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
                >
                  CPA measures the total marketing investment required to produce a confirmed
                  enrolment — providing the clearest view of marketing effectiveness.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Funnel Visualisation ── */}
        <FadeIn delay={100}>
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-10"
            style={{ color: "rgba(43,4,48,0.4)", fontFamily: "var(--font-body)" }}
          >
            Supporting Funnel Metrics
          </p>

          {/* Desktop: two-col — funnel shape left, metric rows right */}
          <div className="hidden lg:grid grid-cols-[1fr_1.6fr] gap-10 items-start">

            {/* Left: tapering funnel shape */}
            <div className="sticky top-24 flex flex-col items-center gap-px pt-1">
              {funnelStages.map((s, i) => (
                <div key={s.stage} className="w-full flex flex-col items-center">
                  <div
                    className="flex items-center justify-center rounded-sm"
                    style={{
                      width: `${s.width}%`,
                      height: "44px",
                      background: s.isPrimary ? "var(--spark-purple)" : s.bgColor,
                      border: `1px solid ${s.borderColor}`,
                      position: "relative",
                      transition: "width 0.6s ease",
                    }}
                  >
                    {/* Left accent stripe */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-sm"
                      style={{ background: s.isPrimary ? "#ff4800" : s.color }}
                    />
                    <span
                      className="text-[10px] font-bold tracking-[0.12em] uppercase px-3 text-center leading-tight"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: s.isPrimary ? "rgba(255,255,255,0.9)" : s.color,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
                    >
                      {s.isPrimary && "★ "}{s.stage}
                    </span>
                  </div>
                  {/* Connector dot */}
                  {i < funnelStages.length - 1 && (
                    <div
                      className="w-px h-px"
                      style={{ background: "transparent" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right: metric rows — one per stage */}
            <div className="space-y-2">
              {funnelStages.map((s, i) => (
                <div
                  key={s.stage}
                  className="rounded-xl p-4"
                  style={{
                    background: s.isPrimary ? "var(--spark-purple)" : s.bgColor,
                    border: `1px solid ${s.borderColor}`,
                    minHeight: "44px",
                  }}
                >
                  <div className="flex items-start gap-3">
                    {/* Stage label */}
                    <div className="flex-shrink-0 w-[120px]">
                      <span
                        className="text-[9px] font-bold tracking-[0.15em] uppercase block"
                        style={{
                          color: s.isPrimary ? "rgba(255,255,255,0.4)" : "rgba(43,4,48,0.35)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {s.num}
                      </span>
                      <span
                        className="text-xs font-bold leading-tight"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: s.isPrimary ? "#ffffff" : s.color,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.stage}
                      </span>
                    </div>

                    {/* Metric pills */}
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {s.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-[11px] px-2.5 py-0.5 rounded-full leading-tight"
                          style={{
                            background: s.isPrimary
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(255,255,255,0.7)",
                            color: s.isPrimary ? "rgba(255,255,255,0.8)" : "rgba(43,4,48,0.7)",
                            border: `1px solid ${s.isPrimary ? "rgba(255,255,255,0.12)" : s.borderColor}`,
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked rows only */}
          <div className="lg:hidden space-y-2">
            {funnelStages.map((s, i) => (
              <div
                key={s.stage}
                className="rounded-xl p-4"
                style={{
                  background: s.isPrimary ? "var(--spark-purple)" : s.bgColor,
                  border: `1px solid ${s.borderColor}`,
                  borderLeft: `3px solid ${s.isPrimary ? "#ff4800" : s.color}`,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-bold tracking-[0.15em] uppercase"
                    style={{ color: s.isPrimary ? "rgba(255,255,255,0.4)" : "rgba(43,4,48,0.35)", fontFamily: "var(--font-body)" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: s.isPrimary ? "#ffffff" : s.color, letterSpacing: "-0.01em" }}
                  >
                    {s.isPrimary && "★ "}{s.stage}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-[11px] px-2.5 py-0.5 rounded-full"
                      style={{
                        background: s.isPrimary ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.7)",
                        color: s.isPrimary ? "rgba(255,255,255,0.8)" : "rgba(43,4,48,0.7)",
                        border: `1px solid ${s.isPrimary ? "rgba(255,255,255,0.12)" : s.borderColor}`,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Parent Engagement note */}
        <FadeIn delay={150}>
          <div
            className="mt-6 rounded-xl p-5"
            style={{ background: "rgba(26,122,58,0.05)", border: "1px solid rgba(26,122,58,0.15)" }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
            >
              While enrolment remains the primary growth metric, long-term engagement with existing
              parents also plays a critical role in sustainable school network growth. Measuring
              parent engagement helps SPARK identify opportunities to strengthen loyalty, encourage
              advocacy and increase multi-child enrolments across the network.
            </p>
          </div>
        </FadeIn>

        {/* Shared Reporting Dashboard */}
        <FadeIn delay={200}>
          <div
            className="mt-16 rounded-2xl p-8"
            style={{ background: "rgba(43,4,48,0.02)", border: "1px solid rgba(43,4,48,0.08)" }}
          >
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-1"
              style={{ color: "rgba(43,4,48,0.35)", fontFamily: "var(--font-body)" }}
            >
              Shared Reporting Dashboard
            </p>
            <h3
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                color: "var(--spark-purple)",
                letterSpacing: "-0.02em",
              }}
            >
              Looker Studio — Live Visibility
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 max-w-2xl"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)" }}
            >
              A live Looker Studio dashboard provides real-time visibility into campaign performance
              across all marketing channels. This shared reporting environment allows both teams to
              monitor marketing performance continuously while using working sessions to analyse
              insights and plan optimisation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {dashboardSources.map((src) => (
                <div
                  key={src.label}
                  className="rounded-xl p-3 flex items-center gap-3"
                  style={{ background: "#ffffff", border: "1px solid rgba(43,4,48,0.08)" }}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: src.color }} />
                  <div>
                    <p className="text-xs font-semibold leading-tight" style={{ color: "rgba(43,4,48,0.8)", fontFamily: "var(--font-body)" }}>{src.label}</p>
                    <p className="text-[10px]" style={{ color: "rgba(43,4,48,0.4)", fontFamily: "var(--font-body)" }}>{src.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(43,4,48,0.4)", fontFamily: "var(--font-body)" }}
            >
              If deeper integration with SPARK&apos;s CRM becomes possible, an enhanced reporting
              environment can be developed to provide a complete view of the enrolment funnel from
              first interaction through to confirmed enrolment.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
