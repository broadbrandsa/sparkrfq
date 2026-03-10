import { FadeIn } from "@/components/FadeIn";

const websiteFeatures = [
  {
    title: "Direct CRM integration without middleware",
    desc: "Eliminates reliance on Zapier and allows lead data to flow directly into SPARK's CRM in real time.",
  },
  {
    title: "Full control over lead capture infrastructure",
    desc: "Landing pages, forms and conversion flows can be designed specifically for admissions performance.",
  },
  {
    title: "Scalable architecture",
    desc: "A modern development stack allows SPARK to scale content, campaigns and school-specific funnels without platform restrictions.",
  },
  {
    title: "Foundation for future platforms",
    desc: "A custom platform creates the foundation for parent portal features, loyalty systems and deeper integration with the broader SPARK technology ecosystem.",
  },
  {
    title: "SEO and performance improvements",
    desc: "Custom architecture improves technical SEO capabilities and site performance, supporting long-term organic visibility.",
  },
];

export function WebsiteSection() {
  return (
    <section id="website-management" className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="container-spark">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="section-label mb-5">Website Management</p>
            <h2
              className="font-bold mb-5"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                color: "var(--spark-purple)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              Active management
              <br />
              <span style={{ color: "rgba(43,4,48,0.2)" }}>+ future vision</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              The current SPARK website, built on Webflow, has supported campaign launches and
              marketing activity effectively. However, as the enrolment ecosystem evolves, the
              limitations of Webflow&apos;s architecture begin to restrict the flexibility required
              for a fully integrated marketing and admissions platform.
            </p>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              A custom-built website hosted on Vercel would allow SPARK to move beyond these
              constraints and build a digital platform designed specifically for the enrolment
              journey.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              Replacing Webflow with a custom development environment unlocks several strategic
              advantages.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="space-y-3 pt-16 lg:pt-0">
              {websiteFeatures.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                    style={{ background: "rgba(31,73,201,0.12)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "rgba(43,4,48,0.85)", fontFamily: "var(--font-body)" }}>{feat.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(43,4,48,0.55)", fontFamily: "var(--font-body)" }}>{feat.desc}</p>
                  </div>
                </div>
              ))}
              <p
                className="text-sm leading-relaxed pt-2"
                style={{ color: "rgba(43,4,48,0.55)", fontFamily: "var(--font-body)" }}
              >
                This approach transforms the SPARK website from a marketing site into a fully
                integrated enrolment platform capable of supporting the organisation&apos;s
                long-term growth strategy.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
