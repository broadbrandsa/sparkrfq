import { FadeIn } from "@/components/FadeIn";

const phases = [
  {
    num: "01",
    label: "10 Days",
    title: "Foundation & System Alignment",
    desc: "Auditing the current marketing ecosystem, reviewing lead flow processes and establishing improved reporting infrastructure.",
    tasks: [
      "Marketing ecosystem audit",
      "Lead flow process review",
      "Reporting infrastructure setup",
      "CRM requirements evaluation",
    ],
    accent: "#1f49c9",
    status: "Optimisation Kickoff",
  },
  {
    num: "02",
    label: "20 Days",
    title: "Integration & Build",
    desc: "Implementing CRM integration and identifying opportunities for deeper marketing platform integration across all touchpoints.",
    tasks: [
      "CRM integration implementation",
      "Platform connectivity build",
      "Lead capture environment deployment",
      "Tracking & attribution setup",
    ],
    accent: "#801078",
    status: "Build Phase",
  },
  {
    num: "03",
    label: "Ongoing",
    title: "Optimisation & Execution",
    desc: "Moving into ongoing optimisation and campaign execution aligned with the enrolment calendar and peak performance windows.",
    tasks: [
      "Campaign calendar activation",
      "Performance monitoring",
      "Creative iteration cycles",
      "Enrolment season readiness",
    ],
    accent: "#ff4800",
    status: "Live",
  },
];

const milestones = [
  { label: "Week 1–2", event: "Onboarding & access", dot: "#1f49c9" },
  { label: "Week 3–4", event: "Audit complete", dot: "#1f49c9" },
  { label: "Month 2", event: "Integration live", dot: "#801078" },
  { label: "Month 3", event: "Full system active", dot: "#ff4800" },
  { label: "Pre-June", event: "Pre-enrolment readiness", dot: "#ff4800" },
  { label: "October", event: "Peak season launch", dot: "#ff4800" },
];

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(43,4,48,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(43,4,48,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-spark relative z-10">
        <FadeIn>
          <p className="section-label mb-5">Implementation</p>
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
                Getting
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>started fast</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                To continue evolving the current marketing system into the full Enrolment Growth Engine, the next phase begins with a structured optimisation and integration phase before moving
                into full campaign execution.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Phase cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, i) => (
            <FadeIn key={phase.num} delay={i * 100}>
              <div
                className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: `1px solid rgba(43,4,48,0.09)`,
                  boxShadow: "0 2px 20px rgba(43,4,48,0.06)",
                }}
              >
                {/* Ghost number */}
                <span
                  className="absolute -right-3 -bottom-6 font-bold select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "7rem",
                    color: "rgba(43,4,48,0.04)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {phase.num}
                </span>

                {/* Top accent bar */}
                <div
                  className="h-1 w-12 rounded-full mb-6"
                  style={{ background: phase.accent }}
                />

                {/* Phase label */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: `${phase.accent}14`,
                      color: phase.accent,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {phase.label}
                  </span>
                  <span
                    className="text-[9px] font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(43,4,48,0.05)",
                      color: "rgba(43,4,48,0.4)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {phase.status}
                  </span>
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
                  {phase.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: "rgba(43,4,48,0.58)", fontFamily: "var(--font-body)" }}
                >
                  {phase.desc}
                </p>

                {/* Task list */}
                <div className="space-y-2">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: phase.accent }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "rgba(43,4,48,0.55)", fontFamily: "var(--font-body)" }}
                      >
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Milestone timeline strip */}
        <FadeIn delay={320}>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "var(--spark-purple)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-8"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
            >
              Key Milestones
            </p>

            {/* Desktop timeline */}
            <div className="hidden md:flex items-start gap-0">
              {milestones.map((m, i) => (
                <div key={i} className="flex-1 relative">
                  {/* Connector line */}
                  {i < milestones.length - 1 && (
                    <div
                      className="absolute top-2 left-1/2 right-0 h-px"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    />
                  )}
                  <div className="flex flex-col items-center text-center px-2">
                    <div
                      className="w-4 h-4 rounded-full border-2 relative z-10 mb-3"
                      style={{
                        background: m.dot,
                        borderColor: m.dot,
                        boxShadow: `0 0 8px ${m.dot}66`,
                      }}
                    />
                    <span
                      className="text-[9px] font-bold tracking-[0.12em] uppercase mb-1 block"
                      style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                    >
                      {m.label}
                    </span>
                    <span
                      className="text-xs font-semibold leading-tight"
                      style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}
                    >
                      {m.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden space-y-4">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: m.dot, boxShadow: `0 0 6px ${m.dot}66` }}
                  />
                  <div>
                    <span
                      className="text-[9px] font-bold tracking-[0.12em] uppercase"
                      style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                    >
                      {m.label}
                    </span>
                    <span
                      className="text-xs font-semibold ml-3"
                      style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-body)" }}
                    >
                      {m.event}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
