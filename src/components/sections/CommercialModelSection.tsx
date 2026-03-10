import { FadeIn } from "@/components/FadeIn";

const lineItems = [
  {
    category: "Campaign Management",
    description: "Strategic campaign planning, paid media management across Google Ads, Meta Ads and TikTok, campaign setup, budget allocation and ongoing management",
    cost: "R18,000",
  },
  {
    category: "App Development & App Roadmap",
    description: "Development, maintenance and strategic roadmap planning for the SPARK mobile application",
    cost: "R19,500",
  },
  {
    category: "Content Creation",
    description: "Creative production including advertising assets, campaign messaging, landing page copy and creative testing",
    cost: "R13,000",
  },
  {
    category: "Monitoring & Reporting",
    description: "Campaign monitoring, analytics analysis and maintenance of the Looker Studio reporting dashboard",
    cost: "R12,000",
  },
  {
    category: "Optimisation",
    description: "Ongoing campaign optimisation including audience refinement, creative testing and conversion rate improvements",
    cost: "R8,500",
  },
  {
    category: "Web Support & Content Management",
    description: "Maintenance and updates to the SPARK website and campaign landing pages",
    cost: "R7,000",
  },
  {
    category: "CRM & Data Integration Support",
    description: "Support for integrating SPARK CRM data into advertising platforms and reporting systems",
    cost: "R5,000",
  },
  {
    category: "SEO Monitoring & Search Visibility",
    description: "SEO monitoring using SEOptimer, search performance tracking and optimisation recommendations",
    cost: "R3,500",
  },
  {
    category: "Conversational AI & Parent Engagement Support",
    description: "Management and optimisation of conversational platforms including chatbot and messaging engagement flows",
    cost: "R3,500",
  },
  {
    category: "Reporting Data Infrastructure",
    description: "Data aggregation infrastructure using Supermetrics to maintain reporting pipelines",
    cost: "R2,940",
  },
];

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

          {/* Itemised Monthly Cost Structure */}
          <FadeIn delay={320}>
            <div className="card-spark rounded-2xl p-7">
              <p
                className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
                style={{ color: "rgba(43,4,48,0.35)", fontFamily: "var(--font-body)" }}
              >
                Itemised Monthly Cost Structure
              </p>
              <p
                className="text-sm leading-relaxed mb-2"
                style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
              >
                The proposed operating model combines strategic campaign management, creative production, reporting infrastructure and technology support into a single monthly engagement.
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
              >
                The structure below reflects the operational components required to support SPARK&apos;s Enrolment Growth Engine while maintaining continuity with the existing cost structure.
              </p>

              {/* Table */}
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(43,4,48,0.08)" }}>

                {/* Header row */}
                <div
                  className="grid gap-0"
                  style={{
                    background: "var(--spark-purple)",
                    gridTemplateColumns: "1fr 2fr 120px",
                  }}
                >
                  <div className="px-4 py-3">
                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>Category</span>
                  </div>
                  <div className="px-4 py-3">
                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>Description</span>
                  </div>
                  <div className="px-4 py-3 text-right">
                    <span className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>Monthly Cost</span>
                  </div>
                </div>

                {/* Data rows */}
                {lineItems.map((item, i) => (
                  <div
                    key={item.category}
                    className="grid gap-0"
                    style={{
                      gridTemplateColumns: "1fr 2fr 120px",
                      background: i % 2 === 0 ? "#ffffff" : "rgba(43,4,48,0.02)",
                      borderTop: "1px solid rgba(43,4,48,0.06)",
                    }}
                  >
                    <div className="px-4 py-3.5">
                      <span className="text-xs font-semibold leading-snug" style={{ color: "rgba(43,4,48,0.8)", fontFamily: "var(--font-body)" }}>{item.category}</span>
                    </div>
                    <div className="px-4 py-3.5">
                      <span className="text-xs leading-relaxed" style={{ color: "rgba(43,4,48,0.55)", fontFamily: "var(--font-body)" }}>{item.description}</span>
                    </div>
                    <div className="px-4 py-3.5 text-right">
                      <span className="text-xs font-bold" style={{ color: "rgba(43,4,48,0.75)", fontFamily: "var(--font-body)" }}>{item.cost}</span>
                    </div>
                  </div>
                ))}

                {/* Total row */}
                <div
                  className="grid gap-0"
                  style={{
                    gridTemplateColumns: "1fr 2fr 120px",
                    background: "var(--spark-purple)",
                    borderTop: "2px solid rgba(255,72,0,0.5)",
                  }}
                >
                  <div className="px-4 py-4" />
                  <div className="px-4 py-4">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#ffffff", fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
                    >
                      Total Monthly Investment (Incl. VAT)
                    </span>
                  </div>
                  <div className="px-4 py-4 text-right">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#ffffff", fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
                    >
                      R92,940
                    </span>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <p
                className="mt-4 text-xs leading-relaxed"
                style={{ color: "rgba(43,4,48,0.4)", fontFamily: "var(--font-body)" }}
              >
                Media investment for advertising platforms such as Google Ads, Meta Ads, TikTok Ads and other channels is managed separately and allocated directly to advertising platforms based on campaign performance and enrolment targets.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
