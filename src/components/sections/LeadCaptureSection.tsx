import { FadeIn } from "@/components/FadeIn";

const currentFlow = [
  { step: "Landing Page", bg: "#f0f4ff", border: "#1f49c9" },
  { step: "Webflow Form", bg: "#f0f4ff", border: "#1f49c9" },
  { step: "Zapier", bg: "#fff5f0", border: "#ff4800", note: "Additional layer — reduces flexibility" },
  { step: "CRM", bg: "#f0f4ff", border: "#1f49c9" },
];

const proposedFlow = [
  { step: "Dedicated Landing Page", bg: "#f0fff4", border: "#25D366" },
  { step: "Direct CRM Integration", bg: "#f0fff4", border: "#25D366" },
  { step: "Higher-Quality Leads", bg: "#1f49c9", border: "#ff4800", isOutcome: true },
];

export function LeadCaptureSection() {
  return (
    <section id="lead-capture" className="py-24 px-6" style={{ background: "#f9fafb" }}>
      <div className="container-spark">
        <FadeIn>
          <p className="section-label mb-5">Lead Capture Optimisation</p>
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              color: "var(--spark-purple)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            Quality over
            <br />
            <span style={{ color: "rgba(43,4,48,0.2)" }}>volume</span>
          </h2>
          <p
            className="text-base leading-relaxed mb-4 max-w-xl"
            style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
          >
            Our review of the current system highlighted an important opportunity to improve
            lead quality at the point of capture.
          </p>
          <p
            className="text-base leading-relaxed mb-12 max-w-xl"
            style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
          >
            Higher-quality leads allow admissions teams to focus their time on prospective
            families who are most likely to convert — reducing wasted effort and
            improving enrolment outcomes.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current */}
          <FadeIn delay={100}>
            <div>
              <p
                className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
                style={{ color: "rgba(43,4,48,0.4)", fontFamily: "var(--font-body)" }}
              >
                Current Flow
              </p>
              <div className="space-y-3">
                {currentFlow.map((step, i) => (
                  <div key={step.step}>
                    <div
                      className="rounded-xl p-4 flex items-center gap-3"
                      style={{
                        background: step.bg,
                        border: `1px solid ${step.border}44`,
                      }}
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ background: step.border }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold" style={{ color: "var(--spark-purple)", fontFamily: "var(--font-body)" }}>{step.step}</p>
                        {step.note && (
                          <p className="text-[10px] mt-0.5" style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}>⚠ {step.note}</p>
                        )}
                      </div>
                    </div>
                    {i < currentFlow.length - 1 && (
                      <div className="flex justify-center py-1">
                        <span className="text-xs" style={{ color: "rgba(43,4,48,0.25)" }}>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Proposed */}
          <FadeIn delay={180}>
            <div>
              <p
                className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
                style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}
              >
                Proposed Approach
              </p>
              <div className="space-y-3">
                {proposedFlow.map((step, i) => (
                  <div key={step.step}>
                    <div
                      className="rounded-xl p-4 flex items-center gap-3"
                      style={{
                        background: step.isOutcome ? step.bg : step.bg,
                        border: `1px solid ${step.border}55`,
                      }}
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                        style={{
                          background: step.border,
                          color: step.isOutcome ? "#ff4800" : "#fff",
                        }}
                      >
                        {i + 1}
                      </span>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          color: step.isOutcome ? "#ffffff" : "var(--spark-purple)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {step.step}
                      </p>
                    </div>
                    {i < proposedFlow.length - 1 && (
                      <div className="flex justify-center py-1">
                        <span className="text-xs" style={{ color: "rgba(43,4,48,0.25)" }}>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="mt-6 rounded-xl p-4"
                style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <p className="text-xs font-bold mb-1" style={{ color: "#25D366", fontFamily: "var(--font-body)" }}>Key improvement</p>
                <p className="text-sm" style={{ color: "rgba(43,4,48,0.65)", fontFamily: "var(--font-body)" }}>
                  Eliminating Zapier reduces integration complexity, improves data flow speed,
                  and prioritises dedicated landing pages over Meta instant forms — producing
                  consistently higher-quality leads.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
