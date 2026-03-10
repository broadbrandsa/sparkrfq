import { FadeIn } from "@/components/FadeIn";

const successItems = [
  {
    title: "Higher Quality Enquiries",
    body: [
      "By prioritising lead quality over lead volume, marketing campaigns attract prospective families who are more likely to progress through the admissions journey.",
      "Admissions teams spend less time filtering low-intent enquiries and more time supporting families who are actively considering SPARK.",
    ],
  },
  {
    title: "Greater Marketing Efficiency",
    body: [
      "By integrating CRM data directly into advertising platforms, campaigns optimise toward audiences that historically produce enrolled learners.",
      "This improves targeting accuracy and reduces wasted media spend, allowing marketing investment to work harder across each enrolment cycle.",
    ],
  },
  {
    title: "Predictable Enrolment Growth",
    body: [
      "When marketing, admissions data and reporting operate as a connected system, enrolment performance becomes measurable and predictable.",
      "This enables SPARK to forecast demand more accurately, allocate marketing investment strategically and scale enrolment growth across campuses.",
    ],
  },
  {
    title: "Stronger Parent Experience",
    body: [
      "Faster responses, clearer information and better communication channels help prospective families navigate the school selection journey with confidence.",
      "A more responsive admissions experience strengthens trust and increases the likelihood that families choose SPARK.",
    ],
  },
];

export function SuccessSection() {
  return (
    <section id="success-looks-like" className="py-24 px-6" style={{ background: "#ffffff" }}>
      <div className="container-spark">
        <FadeIn>
          <p className="section-label mb-5">What Success Looks Like</p>
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
                What Success
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>Looks Like</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                The next stage of the Enrolment Growth Engine is not simply to generate more leads, but to build a predictable system that converts marketing investment into confirmed learner enrolments.
              </p>
              <p
                className="text-base leading-relaxed mt-4"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                As we continue developing the system together, SPARK benefits from four measurable improvements.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {successItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="card-spark rounded-2xl p-8 h-full">
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    color: "var(--spark-purple)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h3>
                <div className="space-y-3">
                  {item.body.map((para) => (
                    <p
                      key={para}
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
