import { FadeIn } from "@/components/FadeIn";

const crmFlow = [
  { label: "Google Ads", sub: "Campaign data", icon: "G", color: "#1f49c9" },
  { label: "Meta (Facebook & Instagram)", sub: "Ad performance", icon: "M", color: "#1877F2" },
  { label: "SPARK CRM", sub: "Full enrolment lifecycle", icon: "S", color: "#1f49c9", isCenter: true },
  { label: "Campaign Optimisation", sub: "AI-driven targeting", icon: "↑", color: "#ff4800" },
  { label: "Audience Segments", sub: "Based on real enrolment data", icon: "A", color: "#00a8e1" },
];

export function CRMSection() {
  return (
    <section id="crm-integration" className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="container-spark">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="section-label mb-5">CRM & Platform Integration</p>
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
              Closing the
              <br />
              <span style={{ color: "rgba(43,4,48,0.2)" }}>data loop</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              SPARK&apos;s custom CRM tracks the complete enrolment lifecycle — leads,
              qualified leads, applications and confirmed enrolments. By integrating
              CRM data directly into Google Ads and Meta, campaign optimisation algorithms
              can learn which audiences historically produce enrolled learners.
            </p>
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(43,4,48,0.03)",
                border: "1px solid rgba(43,4,48,0.07)",
              }}
            >
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--spark-purple)", fontFamily: "var(--font-body)" }}
              >
                This integration enables:
              </p>
              <ul className="space-y-2">
                {[
                  "Significantly more accurate audience targeting",
                  "Optimisation based on real enrolment outcomes",
                  "Precision audience segments built from CRM data",
                  "Reduced reliance on top-of-funnel metrics alone",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(43,4,48,0.65)", fontFamily: "var(--font-body)" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ff4800" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* CRM flow diagram */}
          <FadeIn delay={150}>
            <div className="space-y-3">
              {/* Inputs */}
              <div className="grid grid-cols-2 gap-3">
                {crmFlow.slice(0, 2).map((node) => (
                  <div
                    key={node.label}
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{ background: "#f9fafb", border: "1px solid rgba(43,4,48,0.07)" }}
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: node.color }}
                    >
                      {node.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--spark-purple)", fontFamily: "var(--font-body)" }}>{node.label}</p>
                      <p className="text-[10px]" style={{ color: "rgba(43,4,48,0.45)", fontFamily: "var(--font-body)" }}>{node.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-4" style={{ background: "rgba(43,4,48,0.15)" }} />
                  <span className="text-xs" style={{ color: "rgba(43,4,48,0.3)" }}>↓</span>
                </div>
              </div>

              {/* CRM */}
              <div
                className="rounded-2xl p-5 text-center"
                style={{ background: "var(--spark-purple)", border: "2px solid rgba(31,73,201,0.3)" }}
              >
                <p className="text-xs font-bold tracking-[0.15em] uppercase mb-1" style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}>SPARK Custom CRM</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body)" }}>Full enrolment lifecycle tracking</p>
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-px h-4" style={{ background: "rgba(43,4,48,0.15)" }} />
                  <span className="text-xs" style={{ color: "rgba(43,4,48,0.3)" }}>↓</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-2 gap-3">
                {crmFlow.slice(3).map((node) => (
                  <div
                    key={node.label}
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{ background: "#f9fafb", border: `1px solid ${node.color}33` }}
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: `${node.color}18`, color: node.color }}
                    >
                      {node.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: "var(--spark-purple)", fontFamily: "var(--font-body)" }}>{node.label}</p>
                      <p className="text-[10px]" style={{ color: "rgba(43,4,48,0.45)", fontFamily: "var(--font-body)" }}>{node.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
