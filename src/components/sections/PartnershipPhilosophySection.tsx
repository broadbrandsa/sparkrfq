import { FadeIn } from "@/components/FadeIn";

const philosophyItems = [
  {
    title: "Shared Ownership of Outcomes",
    desc: "Both teams operate with a shared focus on enrolment outcomes rather than isolated marketing metrics. Performance discussions centre on Cost Per Enrolment and overall enrolment growth rather than lead volume alone.",
  },
  {
    title: "Transparency Through Data",
    desc: "All campaign performance, funnel metrics and reporting dashboards are shared openly between teams. This ensures decisions are informed by real performance data rather than assumptions.",
  },
  {
    title: "Rapid Feedback Loops",
    desc: "Regular working sessions allow insights from admissions teams, marketing performance and parent interactions to feed directly into campaign optimisation. This creates a continuous improvement cycle across each enrolment season.",
  },
  {
    title: "Collaborative Planning",
    desc: "Strategic planning sessions ensure marketing activity aligns with SPARK's academic calendar, campus growth plans and enrolment targets.",
  },
];

export function PartnershipPhilosophySection() {
  return (
    <section id="partnership-philosophy" className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="container-spark">
        <FadeIn>
          <p className="section-label mb-5">Partnership Philosophy</p>
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
                Partnership
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>philosophy</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                The success of the Enrolment Growth Engine depends on a close partnership between SPARK Schools and the marketing team. As an extension of SPARK's marketing team, the model is designed to function as a shared growth partnership focused on a single outcome: increasing confirmed enrolments.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                This requires transparency, fast decision-making and shared ownership of results.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {philosophyItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="card-spark rounded-2xl p-7 h-full">
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    color: "var(--spark-purple)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
