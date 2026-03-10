import { FadeIn } from "@/components/FadeIn";

const outOfSeasonSchedule = [
  {
    label: "Session 1 — Bi-weekly",
    desc: "Campaign reporting, creative performance and asset review",
    day: "Every 2 weeks",
    duration: "90 min",
    accent: "#1f49c9",
  },
  {
    label: "Session 2 — Bi-weekly",
    desc: "Creative planning, campaign development and project management",
    day: "Every 2 weeks",
    duration: "90 min",
    accent: "#1f49c9",
  },
];

const highSeasonSchedule = [
  {
    label: "Session 1 — Weekly",
    desc: "Campaign performance review, creative assets and reporting insights",
    day: "Weekly",
    duration: "90 min",
    accent: "#ff4800",
  },
  {
    label: "Session 2 — Weekly",
    desc: "Campaign planning, creative development and project management",
    day: "Weekly",
    duration: "90 min",
    accent: "#ff4800",
  },
  {
    label: "Stand-ups × 3",
    desc: "Campaign adjustments, operational updates and emerging opportunities",
    day: "3× per week",
    duration: "20 min",
    accent: "#ff4800",
  },
];

const strategySessions = [
  {
    num: "01",
    title: "Brand Building Strategy",
    desc: "Aligning marketing direction for the out-of-enrolment period. Creative direction, brand positioning and awareness campaign planning.",
    timing: "Pre February",
    accent: "#1f49c9",
  },
  {
    num: "02",
    title: "Pre-Enrolment Readiness",
    desc: "Preparing marketing systems and campaign strategies for the pre-enrolment phase. Pipeline development and lead generation planning.",
    timing: "Pre June",
    accent: "#801078",
  },
  {
    num: "03",
    title: "Full Season Readiness",
    desc: "Enrolment season preparation — campaign planning, creative development and performance forecasting for the peak window.",
    timing: "Pre October",
    accent: "#ff4800",
  },
];

export function PartnershipSection() {
  return (
    <>
      <section
        id="partnership"
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "#2B0430" }}
      >

        <div className="container-spark relative z-10">
          <FadeIn>
            <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Operating Model</p>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              How we
              <br />
              <span style={{ color: "rgba(255,255,255,0.2)" }}>work together</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-14 max-w-xl"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              The partnership operating model adapts to the academic calendar and the
              intensity of the enrolment season, enabling faster decision-making during
              the most critical periods.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Out of season */}
            <FadeIn delay={100}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(31,73,201,0.2)", border: "1px solid rgba(31,73,201,0.4)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#1f49c9" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: "#1f49c9", fontFamily: "var(--font-body)" }}>Out of Enrolment Season</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>Brand Building Period</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {outOfSeasonSchedule.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body)" }}>{s.label}</p>
                        <div className="flex gap-2 flex-shrink-0">
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(31,73,201,0.15)", color: "#1f49c9" }}>{s.day}</span>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>{s.duration}</span>
                        </div>
                      </div>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* High season */}
            <FadeIn delay={180}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: "rgba(255,72,0,0.06)", border: "1px solid rgba(255,72,0,0.2)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,72,0,0.15)", border: "1px solid rgba(255,72,0,0.35)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#ff4800" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] uppercase" style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}>High Enrolment Season</p>
                    <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>Peak Performance Period</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {highSeasonSchedule.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,72,0,0.12)" }}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body)" }}>{s.label}</p>
                        <div className="flex gap-2 flex-shrink-0">
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,72,0,0.15)", color: "#ff4800" }}>{s.day}</span>
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>{s.duration}</span>
                        </div>
                      </div>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Strategy sessions */}
          <div className="divider mb-14" style={{ background: "rgba(255,255,255,0.08)" }} />

          <FadeIn>
            <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>Annual Strategy Sessions</p>
            <h3
              className="font-bold mb-10"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              THREE SESSIONS,
              <span style={{ color: "rgba(255,255,255,0.25)" }}> THREE PHASES</span>
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {strategySessions.map((session, i) => (
              <FadeIn key={session.num} delay={i * 80}>
                <div
                  className="rounded-2xl p-7 h-full flex flex-col relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${session.accent}33` }}
                >
                  <span
                    className="absolute -right-4 -bottom-6 font-bold select-none pointer-events-none opacity-[0.07]"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "8rem", color: session.accent, lineHeight: 1 }}
                  >
                    {session.num}
                  </span>
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold mb-4"
                    style={{ background: session.accent, color: "#fff", fontFamily: "var(--font-body)" }}
                  >
                    {session.num}
                  </span>
                  <p
                    className="font-bold mb-3 text-base"
                    style={{ color: "#ffffff", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}
                  >
                    {session.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}
                  >
                    {session.desc}
                  </p>
                  <span
                    className="text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full inline-block"
                    style={{ background: `${session.accent}22`, color: session.accent }}
                  >
                    {session.timing}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
