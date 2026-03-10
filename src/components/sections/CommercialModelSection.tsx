import { FadeIn } from "@/components/FadeIn";

export function CommercialModelSection() {
  return (
    <section id="commercial-model" className="py-24 px-6" style={{ background: "#f9fafb" }}>
      <div className="container-spark">
        <FadeIn>
          <p className="section-label mb-5">Commercial Model</p>
          <div className="grid lg:grid-cols-2 gap-8 mb-14 items-end">
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
                Commercial
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>model</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                The commercial structure for this partnership is designed to align incentives between SPARK Schools and the marketing team while maintaining flexibility as the enrolment system evolves.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                The model combines strategic oversight, campaign execution and technology integration into a single operating framework.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-5">
          <FadeIn delay={80}>
            <div className="card-spark rounded-2xl p-7">
              <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--spark-purple)" }}>Strategic &amp; Performance Management</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>
                A monthly management fee supports strategic planning, campaign management, reporting analysis and ongoing optimisation across the enrolment funnel.
              </p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>This includes:</p>
              <ul className="space-y-2">
                {["campaign strategy", "media management", "reporting and optimisation", "creative planning and asset performance analysis"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
                    <span className="text-sm" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <div className="card-spark rounded-2xl p-7">
              <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--spark-purple)" }}>Creative &amp; Production</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>
                Creative production supports the development of advertising assets, landing pages and campaign content across digital channels.
              </p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>Creative work may include:</p>
              <ul className="space-y-2">
                {["digital advertising assets", "campaign creative concepts", "landing page design", "content production"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
                    <span className="text-sm" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="card-spark rounded-2xl p-7">
              <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--spark-purple)" }}>Media Investment</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>
                Media budgets are allocated directly toward advertising platforms such as Google, Meta and other channels used to reach prospective parents.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>
                Media spend remains flexible and can be adjusted throughout the enrolment cycle based on campaign performance and enrolment targets.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <div className="card-spark rounded-2xl p-7">
              <h3 className="font-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--spark-purple)" }}>Technology &amp; Integration</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>
                Where required, additional development work may be undertaken to support:
              </p>
              <ul className="space-y-2 mb-4">
                {["CRM integrations", "landing page infrastructure", "enhanced reporting environments", "marketing automation improvements"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
                    <span className="text-sm" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}>
                These development activities are scoped collaboratively with SPARK based on technical requirements and implementation priorities.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
