import { FadeIn } from "@/components/FadeIn";

const platforms = [
  // ── Core ──────────────────────────────────────────────────────
  {
    name: "SPARK CRM",
    whatItIs: "Central data hub",
    whatItDoes:
      "Manages the full lead and enrolment pipeline — from first enquiry through to confirmed placement. Provides the data foundation for campaign optimisation and audience targeting.",
    color: "#ff4800",
    role: "Core",
  },
  // ── Acquisition ───────────────────────────────────────────────
  {
    name: "Google Ads",
    whatItIs: "Paid search & display",
    whatItDoes:
      "Captures high-intent prospective families actively searching for schooling options. Search, display and YouTube campaigns drive targeted traffic throughout the enrolment cycle.",
    color: "#4285F4",
    role: "Acquisition",
  },
  {
    name: "Meta Ads",
    whatItIs: "Social acquisition",
    whatItDoes:
      "Facebook and Instagram advertising reaches prospective families through interest and demographic targeting. Creative-led campaigns build awareness and generate qualified leads.",
    color: "#1877F2",
    role: "Acquisition",
  },
  {
    name: "TikTok Ads",
    whatItIs: "Short-form video discovery",
    whatItDoes:
      "Expands reach to parents through short-form video discovery and interest-based targeting. Creative-led campaigns increase brand visibility and capture new audiences earlier in the school discovery journey.",
    color: "#69C9D0",
    role: "Acquisition",
  },
  // ── Platform ──────────────────────────────────────────────────
  {
    name: "Webflow",
    whatItIs: "Website platform",
    whatItDoes:
      "Hosts and manages the SPARK Schools website and campaign landing pages. Provides flexibility to launch new landing pages quickly while supporting conversion tracking and marketing integrations.",
    color: "#4353FF",
    role: "Platform",
  },
  // ── Analytics ─────────────────────────────────────────────────
  {
    name: "Google Analytics",
    whatItIs: "Website intelligence",
    whatItDoes:
      "Tracks visitor behaviour, traffic sources and conversion events across the SPARK website. Data informs campaign optimisation and identifies friction points in the enrolment journey.",
    color: "#E37400",
    role: "Analytics",
  },
  {
    name: "Google Search Console",
    whatItIs: "Search performance monitoring",
    whatItDoes:
      "Provides direct insight into how the SPARK website performs in Google Search. Tracks search queries, impressions, click-through rates and indexing health while identifying technical issues affecting organic visibility.",
    color: "#3367D6",
    role: "Analytics",
  },
  {
    name: "Bing Webmaster Tools",
    whatItIs: "Search visibility management",
    whatItDoes:
      "Monitors website performance in Microsoft Bing search and provides additional technical SEO diagnostics. Ensures SPARK maintains visibility across major search engines while identifying crawl, indexing and performance issues.",
    color: "#00809D",
    role: "Analytics",
  },
  // ── Creative ──────────────────────────────────────────────────
  {
    name: "The Brief",
    whatItIs: "AI campaign creative platform",
    whatItDoes:
      "An AI-powered marketing platform used to generate, design and scale advertising creatives across channels. Automates key parts of the campaign lifecycle — creative generation, testing, publishing and optimisation — enabling large volumes of on-brand ad variations quickly.",
    color: "#8B5CF6",
    role: "Creative",
  },
  // ── Reporting ─────────────────────────────────────────────────
  {
    name: "Looker Studio",
    whatItIs: "Live reporting dashboard",
    whatItDoes:
      "Consolidates data from all marketing channels into a single shared reporting environment. Both teams access real-time campaign performance, lead quality and enrolment trend data.",
    color: "#00a8e1",
    role: "Reporting",
  },
  // ── Data Infrastructure ───────────────────────────────────────
  {
    name: "Supermetrics",
    whatItIs: "Marketing data aggregation",
    whatItDoes:
      "Automatically collects marketing data from advertising platforms and feeds it into reporting systems. Enables reliable data pipelines into Looker Studio dashboards so campaign performance reporting remains accurate and continuously updated.",
    color: "#FC3464",
    role: "Data Infra",
  },
  // ── Organic ───────────────────────────────────────────────────
  {
    name: "SEOptimer",
    whatItIs: "SEO monitoring",
    whatItDoes:
      "Audits and monitors SPARK's organic search presence. Identifies technical issues, keyword opportunities and content gaps that affect long-term visibility in search results.",
    color: "#34a853",
    role: "Organic",
  },
  // ── Content Experience ────────────────────────────────────────
  {
    name: "Newsroom Studio",
    whatItIs: "AI-powered brand storytelling",
    whatItDoes:
      "Creates visual-first editorial and branded content experiences designed to engage audiences through interactive storytelling formats such as quizzes, galleries and dynamic content journeys. These experiences help SPARK capture attention and guide prospective families through the school selection journey using immersive digital storytelling.",
    color: "#7C3AED",
    role: "Content",
  },
  // ── Nurture ───────────────────────────────────────────────────
  {
    name: "WhatsApp Business",
    whatItIs: "Direct communication",
    whatItDoes:
      "Enables direct, high-engagement communication with prospective families. Supports lead nurturing, appointment reminders and admissions follow-up through a trusted channel.",
    color: "#25D366",
    role: "Nurture",
  },
  // ── Conversational AI ───────────────────────────────────────
  {
    name: "QContact",
    whatItIs: "AI-powered chat and admissions support",
    whatItDoes:
      "QContact enables intelligent conversational engagement with prospective parents through website chat, messaging automation and AI-assisted responses. The platform can answer common questions, qualify enquiries, guide parents through the admissions process and escalate high-intent conversations to admissions staff. This reduces response times while ensuring prospective families receive immediate support during the school selection journey.",
    color: "#1f49c9",
    role: "Conversational AI",
  },
  // ── Automation ────────────────────────────────────────────────
  {
    name: "Zapier",
    whatItIs: "Workflow automation",
    whatItDoes:
      "Connects supporting systems and automates operational workflows where required, including notifications, internal automation and supporting data routing between platforms.",
    color: "#FF4A00",
    role: "Automation",
  },
];

const systemFlow = [
  {
    step: "01",
    label: "Capture",
    desc: "Paid channels drive traffic. Analytics tracks behaviour. Leads enter the CRM.",
    color: "#4285F4",
  },
  {
    step: "02",
    label: "Qualify",
    desc: "CRM segments leads. QContact and WhatsApp provide conversational engagement with prospective parents, while Zapier automates routing and operational workflows.",
    color: "#ff4800",
  },
  {
    step: "03",
    label: "Report",
    desc: "Looker Studio surfaces performance. Both teams review outcomes against CPA targets.",
    color: "#00a8e1",
  },
  {
    step: "04",
    label: "Optimise",
    desc: "Enrolment data feeds back into platforms. Campaigns learn and improve each cycle.",
    color: "#25D366",
  },
  {
    step: "05",
    label: "Retain & Engage",
    desc: "Parent engagement platforms, communication systems and loyalty mechanisms strengthen relationships with existing families and encourage long-term commitment to the SPARK network.",
    color: "#ff4800",
  },
];

export function TechnologyStackSection() {
  return (
    <section
      id="technology-stack"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#2B0430" }}
    >
      <div className="container-spark relative z-10">

        {/* Header */}
        <FadeIn>
          <p
            className="section-label mb-5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Technology Stack
          </p>
          <h2
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            The systems powering
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>
              the enrolment growth engine
            </span>
          </h2>
          <p
            className="max-w-2xl text-base leading-relaxed mb-16"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
            }}
          >
            Each platform within the technology stack plays a defined role across
            acquisition, nurturing, reporting and optimisation. Together they
            form a connected system that turns marketing activity into measurable
            enrolment outcomes.
          </p>
        </FadeIn>

        {/* Platform grid — 4 col desktop, 2 col tablet */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {platforms.map((p, i) => (
            <FadeIn key={p.name} delay={i * 50}>
              <div
                className="rounded-2xl p-5 h-full flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderTop: `2px solid ${p.color}`,
                }}
              >
                {/* Role badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[9px] font-bold tracking-[0.18em] uppercase px-2 py-0.5 rounded-full"
                    style={{
                      color: p.color,
                      background: `${p.color}18`,
                      border: `1px solid ${p.color}30`,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {p.role}
                  </span>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: p.color }}
                  />
                </div>

                {/* Platform name */}
                <h3
                  className="font-bold mb-1 leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </h3>

                {/* What it is */}
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-3"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-body)" }}
                >
                  {p.whatItIs}
                </p>

                {/* Divider */}
                <div
                  className="h-px mb-3"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                {/* What it does */}
                <p
                  className="text-xs leading-relaxed flex-1"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {p.whatItDoes}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* How the System Works Together */}
        <FadeIn delay={400}>
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-body)",
              }}
            >
              How the System Works Together
            </p>
            <h3
              className="font-bold mb-8"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              A Connected Enrolment System
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {systemFlow.map((step, i) => (
                <div key={step.step} className="flex flex-col gap-3">
                  {/* Step indicator — circle + label on same row */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                      style={{
                        background: `${step.color}20`,
                        border: `1px solid ${step.color}40`,
                        color: step.color,
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {step.step}
                    </div>
                    <p
                      className="font-bold text-sm"
                      style={{
                        color: step.color,
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.label}
                    </p>
                  </div>
                  {/* Connector bar below circle row (desktop only) */}
                  {i < systemFlow.length - 1 && (
                    <div className="hidden md:block h-px w-full mt-0" style={{ background: `${step.color}25` }} />
                  )}
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing note */}
            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-xs leading-relaxed max-w-3xl"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "var(--font-body)",
                }}
              >
                This integrated system ensures that data flows continuously between marketing channels,
                CRM and reporting, creating a feedback loop that improves performance with every
                enrolment cycle. As SPARK&apos;s CRM data matures, campaign
                targeting and performance forecasting will improve proportionally.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
