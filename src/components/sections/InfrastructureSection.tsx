import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const crmFlow = [
  { label: "Google Ads", sub: "Campaign data", icon: "G", color: "#1f49c9" },
  { label: "Meta (Facebook & Instagram)", sub: "Ad performance", icon: "M", color: "#1877F2" },
  { label: "SPARK CRM", sub: "Full enrolment lifecycle", icon: "S", color: "#1f49c9", isCenter: true },
  { label: "Campaign Optimisation", sub: "AI-driven targeting", icon: "↑", color: "#ff4800" },
  { label: "Audience Segments", sub: "Based on real enrolment data", icon: "A", color: "#00a8e1" },
];

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

const websiteFeatures = [
  "Direct CRM integration — no middleware required",
  "Improved data flow and faster lead processing",
  "Advanced analytics and conversion tracking",
  "Full control over the enrolment experience",
  "Continuously evolving digital infrastructure",
];

export function InfrastructureSection() {
  return (
    <>
      {/* ─── CRM Integration ─── */}
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
                CLOSING THE
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>DATA LOOP</span>
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

      <div className="divider" />

      {/* ─── Lead Capture ─── */}
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
              Quality Over
              <br />
              <span style={{ color: "rgba(43,4,48,0.2)" }}>Volume</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-4 max-w-xl"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              Our review of the current system identified a clear opportunity to improve
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

      <div className="divider" />

      {/* ─── Website + Reporting ─── */}
      <section id="website-reporting" className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[560px]">

          {/* Website Management — left */}
          <div
            className="px-8 md:px-14 py-20 flex flex-col justify-center"
            style={{ background: "#ffffff" }}
          >
            <FadeIn>
              <p className="section-label mb-5">Website Management</p>
              <h3
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--spark-purple)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                Active Management
                <br />
                <span style={{ color: "rgba(43,4,48,0.25)" }}>+ Future Vision</span>
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)" }}
              >
                The current SPARK website is actively managed to support marketing and
                enrolment campaigns. There is also an opportunity to explore a future
                custom-developed platform designed specifically for SPARK&apos;s enrolment ecosystem.
              </p>
              <div className="space-y-3">
                {websiteFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: "rgba(31,73,201,0.12)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
                    </span>
                    <span className="text-sm" style={{ color: "rgba(43,4,48,0.7)", fontFamily: "var(--font-body)" }}>{feat}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Reporting — right, dark */}
          <div
            className="px-8 md:px-14 py-20 flex flex-col justify-center grain relative overflow-hidden"
            style={{ background: "var(--spark-dark-blue, #1f49c9)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 80% at 80% 20%, rgba(0,168,225,0.3) 0%, transparent 65%)" }}
            />
            <FadeIn delay={100}>
              <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>Reporting & Data Visibility</p>
              <h3
                className="font-bold mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                REAL-TIME
                <br />
                <span style={{ color: "rgba(255,255,255,0.25)" }}>INTELLIGENCE</span>
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-body)" }}
              >
                A shared Looker Studio reporting dashboard will provide real-time visibility
                into campaign performance across all marketing channels — integrating campaign
                data, website analytics and lead generation performance.
              </p>

              {/* Dashboard mockup */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#ff4800" }} />
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}>
                    Looker Studio Dashboard
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {["Campaign Data", "Website Analytics", "Lead Performance"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg p-2 text-center"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="rounded-lg p-3 text-center"
                  style={{ background: "rgba(31,73,201,0.12)", border: "1px solid rgba(31,73,201,0.2)" }}
                >
                  <p className="text-xs font-bold" style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}>
                    Full enrolment funnel view — first interaction to confirmed enrolment
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
