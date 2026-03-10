import { FadeIn } from "@/components/FadeIn";

const BG = "#2B0430";
const TEXT = "#C8DAE3";
const ACCENT = "#FF4800";

export function StrategicShiftSection() {
  return (
    <section
      id="strategic-shift"
      className="relative overflow-hidden"
      style={{ background: BG }}
    >

      {/* ── Hero: Full-width CPL → CPA transform panel ── */}
      <div
        className="relative border-b"
        style={{ borderColor: `rgba(200,218,227,0.08)` }}
      >
        <div className="container-spark py-20 md:py-28">

          {/* Section label */}
          <FadeIn>
            <p
              className="section-label mb-12"
              style={{ color: `rgba(200,218,227,0.35)` }}
            >
              The Strategic Shift
            </p>
          </FadeIn>

          {/* Three-column metric display */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-0 items-center">

            {/* LEFT — CPL (before, dimmed) */}
            <FadeIn>
              <div className="pr-0 md:pr-10 pb-10 md:pb-0">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{
                    background: `rgba(200,218,227,0.06)`,
                    border: `1px solid rgba(200,218,227,0.12)`,
                  }}
                >
                  <span
                    className="text-[9px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: `rgba(200,218,227,0.35)`, fontFamily: "var(--font-body)" }}
                  >
                    Previously measured by
                  </span>
                </div>

                <p
                  className="font-bold mb-1 leading-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    color: `rgba(200,218,227,0.2)`,
                    letterSpacing: "-0.04em",
                    textDecoration: "line-through",
                    textDecorationColor: `rgba(200,218,227,0.12)`,
                  }}
                >
                  COST PER
                  <br />
                  LEAD
                </p>

                <p
                  className="font-bold mt-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "3rem",
                    color: `rgba(200,218,227,0.12)`,
                    letterSpacing: "0.15em",
                  }}
                >
                  CPL
                </p>

                <p
                  className="mt-6 text-sm leading-relaxed max-w-xs"
                  style={{ color: `rgba(200,218,227,0.35)`, fontFamily: "var(--font-body)" }}
                >
                  Measures how cheaply leads are generated — but says nothing about
                  whether those leads become enrolled learners.
                </p>
              </div>
            </FadeIn>

            {/* CENTER — arrow divider */}
            <FadeIn delay={100}>
              <div className="flex flex-row md:flex-col items-center justify-center gap-3 py-4 md:py-0">
                <div
                  className="h-px md:h-16 w-16 md:w-px"
                  style={{ background: `rgba(255,72,0,0.3)` }}
                />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: ACCENT,
                    boxShadow: `0 0 24px rgba(255,72,0,0.4)`,
                  }}
                >
                  <span
                    className="font-bold text-white text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    →
                  </span>
                </div>
                <div
                  className="h-px md:h-16 w-16 md:w-px"
                  style={{ background: `rgba(255,72,0,0.3)` }}
                />
              </div>
            </FadeIn>

            {/* RIGHT — CPA (after, highlighted) */}
            <FadeIn delay={160}>
              <div className="pl-0 md:pl-10 pt-10 md:pt-0">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
                  style={{
                    background: `rgba(255,72,0,0.12)`,
                    border: `1px solid rgba(255,72,0,0.25)`,
                  }}
                >
                  <span
                    className="relative flex h-1.5 w-1.5 flex-shrink-0"
                  >
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                      style={{ background: ACCENT }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-1.5 w-1.5"
                      style={{ background: ACCENT }}
                    />
                  </span>
                  <span
                    className="text-[9px] font-bold tracking-[0.2em] uppercase"
                    style={{ color: ACCENT, fontFamily: "var(--font-body)" }}
                  >
                    New primary metric
                  </span>
                </div>

                <p
                  className="font-bold mb-1 leading-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    color: TEXT,
                    letterSpacing: "-0.04em",
                  }}
                >
                  COST PER
                  <br />
                  <span style={{ color: ACCENT }}>ENROLMENT</span>
                </p>

                <p
                  className="font-bold mt-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "3rem",
                    color: ACCENT,
                    letterSpacing: "0.15em",
                  }}
                >
                  CPA
                </p>

                <p
                  className="mt-6 text-sm leading-relaxed max-w-xs"
                  style={{ color: `rgba(200,218,227,0.65)`, fontFamily: "var(--font-body)" }}
                >
                  Measures the total marketing investment required to produce a
                  confirmed enrolment — the clearest signal of true effectiveness.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Comparison cards ── */}
      <div
        className="border-b"
        style={{ borderColor: `rgba(200,218,227,0.08)` }}
      >
        <div className="container-spark py-16">
          <div className="grid md:grid-cols-2 gap-4">

            {/* CPL card */}
            <FadeIn delay={80}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: `rgba(200,218,227,0.03)`,
                  border: `1px solid rgba(200,218,227,0.08)`,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `rgba(200,218,227,0.06)`,
                      color: `rgba(200,218,227,0.25)`,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ✕
                  </div>
                  <p
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      color: `rgba(200,218,227,0.3)`,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Cost Per Lead
                  </p>
                  <span
                    className="ml-auto text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                    style={{
                      color: `rgba(200,218,227,0.25)`,
                      background: `rgba(200,218,227,0.05)`,
                      border: `1px solid rgba(200,218,227,0.08)`,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    CPL
                  </span>
                </div>

                {[
                  "Measures campaign efficiency, not enrolment outcomes",
                  "Encourages optimising toward cheaper leads, not better ones",
                  "Lower CPL does not mean more enrolled learners",
                  "Misaligns marketing incentives with school growth goals",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 mb-3">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: `rgba(200,218,227,0.2)` }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: `rgba(200,218,227,0.3)`, fontFamily: "var(--font-body)" }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CPA card */}
            <FadeIn delay={160}>
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: `rgba(255,72,0,0.06)`,
                  border: `1px solid rgba(255,72,0,0.2)`,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{
                      background: `rgba(255,72,0,0.2)`,
                      color: ACCENT,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ✓
                  </div>
                  <p
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.125rem",
                      color: TEXT,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Cost Per Enrolment
                  </p>
                  <span
                    className="ml-auto text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                    style={{
                      color: ACCENT,
                      background: `rgba(255,72,0,0.12)`,
                      border: `1px solid rgba(255,72,0,0.25)`,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    CPA
                  </span>
                </div>

                {[
                  "Directly aligned with SPARK's school growth objectives",
                  "Campaigns are refined to attract families most likely to enrol",
                  "Marketing investment evaluated by confirmed enrolments",
                  "Creates a feedback loop between CRM data and ad optimisation",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5 mb-3">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: ACCENT }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: `rgba(200,218,227,0.65)`, fontFamily: "var(--font-body)" }}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── Closing statement ── */}
      <div className="container-spark py-14">
        <FadeIn delay={240}>
          <p
            className="text-lg leading-relaxed max-w-3xl"
            style={{ color: `rgba(200,218,227,0.6)`, fontFamily: "var(--font-body)" }}
          >
            This shift allows us to move beyond measuring marketing by leads alone and begin{" "}
            <span style={{ color: TEXT, fontWeight: 600 }}>
              optimising the entire system
            </span>{" "}
            around{" "}
            <span style={{ color: ACCENT, fontWeight: 600 }}>
              confirmed enrolments
            </span>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
