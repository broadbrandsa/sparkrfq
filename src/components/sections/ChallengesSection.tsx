"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";

const challenges = [
  {
    num: "01",
    title: "CPL Has Been the Primary Optimisation Metric",
    body: [
      "Historically, campaign performance has been evaluated primarily through Cost Per Lead (CPL).",
      "While CPL helps us measure campaign efficiency, focusing too heavily on it can unintentionally shift marketing strategy toward producing cheaper leads rather than attracting families who are most likely to enrol.",
      "This is a common challenge in education marketing and can cause optimisation decisions to drift away from the outcomes that matter most.",
    ],
    accent: "#1f49c9",
  },
  {
    num: "02",
    title: "Heavy Reliance on Instant Lead Forms",
    body: [
      "A large portion of recent lead generation has come from instant lead forms on social platforms.",
      "These forms help produce very low CPL figures because they reduce friction significantly. However, our review of lead performance shows that these leads often have lower intent and are less likely to convert into enrolled learners.",
      "As a result, admissions teams spend valuable time filtering enquiries that may not represent genuine enrolment interest.",
    ],
    accent: "#ff4800",
  },
  {
    num: "03",
    title: "CRM Data Is Not Yet Integrated Into Marketing Platforms",
    body: [
      "Although SPARK's CRM tracks the full enrolment lifecycle, that data is not currently connected directly to advertising platforms.",
      "Instead, CRM insights are currently shared with the marketing team through exported spreadsheets.",
      "This prevents platforms such as Google Ads and Meta from learning which audiences historically produce confirmed enrolments. As a result, campaign optimisation still relies largely on top-of-funnel metrics.",
    ],
    accent: "#1f49c9",
  },
  {
    num: "04",
    title: "Middleware Complexity in Lead Capture",
    body: [
      "Our current lead capture process typically follows this structure:",
      "While this setup works, the additional middleware layer introduces unnecessary complexity and limits the speed and flexibility of the marketing system.",
      "Reducing reliance on middleware will improve data flow and strengthen the overall marketing infrastructure.",
    ],
    hasFlow: true,
    flow: ["Landing Page", "Webflow Form", "Zapier", "CRM"],
    accent: "#ff4800",
  },
  {
    num: "05",
    title: "No Structured Parent Retention or Loyalty System",
    body: [
      "While SPARK's marketing ecosystem focuses heavily on generating new enquiries and prospective families, there is currently no structured system designed to strengthen long-term relationships with existing parents.",
      "Once a learner is enrolled, communication typically shifts to operational or school-level interactions rather than a coordinated engagement strategy designed to build loyalty, advocacy and long-term commitment to the SPARK network.",
      "This creates several missed opportunities.",
      "There is limited ability to encourage longer-term commitments from families, limited mechanisms for rewarding loyalty across multiple children, and no structured way to activate referrals from satisfied parents.",
      "In education networks with strong growth ambitions, parent loyalty and engagement can become one of the most powerful drivers of sustainable enrolment growth. Introducing structured engagement and loyalty mechanisms can strengthen retention, encourage sibling enrolments, and transform satisfied parents into active advocates for the SPARK brand.",
    ],
    accent: "#1f49c9",
  },
];

const flowColors = ["#1f49c9", "#1f49c9", "#ff4800", "#1f49c9"];

export function ChallengesSection() {
  const [active, setActive] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const goTo = (i: number) => {
    if (i === active) return;
    setActive(i);
    setSlideKey((k) => k + 1);
  };

  const c = challenges[active];

  return (
    <section
      id="challenges"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bold whitespace-nowrap"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(8rem, 22vw, 20rem)",
            color: "rgba(31,73,201,0.025)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          CHALLENGES
        </span>
      </div>

      <div className="container-spark relative z-10">

        {/* Header */}
        <FadeIn>
          <p className="section-label mb-5">Context</p>
          <div className="grid lg:grid-cols-2 gap-8 mb-12 items-end">
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
                Challenges
                <br />
                <span style={{ color: "rgba(31,73,201,0.2)" }}>we identified</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                While the current marketing system generates strong activity at the top of the funnel,
                our review together identified several structural challenges that limit our ability
                to optimise marketing toward confirmed enrolments.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Slider */}
        <FadeIn delay={100}>
          {/* Tab navigation + arrows */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {challenges.map((ch, i) => (
              <button
                key={ch.num}
                onClick={() => goTo(i)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                style={{
                  background: i === active ? ch.accent : "transparent",
                  color: i === active ? "#ffffff" : "rgba(43,4,48,0.35)",
                  border: i === active
                    ? `1px solid ${ch.accent}`
                    : "1px solid rgba(43,4,48,0.1)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.02em",
                }}
              >
                {ch.num}
              </button>
            ))}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Prev / Next */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(Math.max(0, active - 1))}
                disabled={active === 0}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(43,4,48,0.05)",
                  border: "1px solid rgba(43,4,48,0.1)",
                  color: active === 0 ? "rgba(43,4,48,0.2)" : "rgba(43,4,48,0.6)",
                  cursor: active === 0 ? "not-allowed" : "pointer",
                }}
              >
                ←
              </button>
              <button
                onClick={() => goTo(Math.min(challenges.length - 1, active + 1))}
                disabled={active === challenges.length - 1}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(43,4,48,0.05)",
                  border: "1px solid rgba(43,4,48,0.1)",
                  color: active === challenges.length - 1 ? "rgba(43,4,48,0.2)" : "rgba(43,4,48,0.6)",
                  cursor: active === challenges.length - 1 ? "not-allowed" : "pointer",
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div
            className="h-0.5 rounded-full mb-6 overflow-hidden"
            style={{ background: "rgba(43,4,48,0.07)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${((active + 1) / challenges.length) * 100}%`,
                background: c.accent,
              }}
            />
          </div>

          {/* Active card */}
          <div
            key={slideKey}
            className="slide-card-in rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "#f9fafb",
              border: "1px solid rgba(43,4,48,0.07)",
              borderLeft: `4px solid ${c.accent}`,
              minHeight: "320px",
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute -right-4 -top-4 font-bold select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "8rem",
                color: "rgba(43,4,48,0.04)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              {c.num}
            </span>

            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              {/* Number badge + accent */}
              <div className="flex flex-col items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold text-white flex-shrink-0"
                  style={{ background: c.accent, fontFamily: "var(--font-body)" }}
                >
                  {c.num}
                </span>
                <div
                  className="hidden md:block w-px flex-1"
                  style={{ background: `${c.accent}20`, minHeight: "40px" }}
                />
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-bold mb-5"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    color: "var(--spark-purple)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.title}
                </h3>

                <div className="space-y-3">
                  {c.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Flow diagram for challenge 04 */}
                {c.hasFlow && (
                  <div className="mt-5 flex items-center gap-1.5 flex-wrap">
                    {c.flow!.map((step, fi) => (
                      <div key={step} className="flex items-center gap-1.5">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            background: `${flowColors[fi]}12`,
                            color: flowColors[fi],
                            border: `1px solid ${flowColors[fi]}30`,
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {step}
                        </span>
                        {fi < c.flow!.length - 1 && (
                          <span
                            className="text-xs font-bold"
                            style={{ color: "rgba(43,4,48,0.25)" }}
                          >
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dot pagination */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {challenges.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === active ? "24px" : "6px",
                  height: "6px",
                  background: i === active ? c.accent : "rgba(43,4,48,0.15)",
                }}
              />
            ))}
          </div>
        </FadeIn>

        {/* The Opportunity — closing card */}
        <FadeIn delay={300}>
          <div
            className="rounded-2xl p-8 md:p-10 mt-10"
            style={{
              background: "var(--spark-purple)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <p
                  className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                >
                  The Opportunity
                </p>
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  WHAT&apos;S
                  <br />
                  <span style={{ color: "#ff4800" }}>POSSIBLE</span>
                </h3>
              </div>
              <div className="md:col-span-2 space-y-4">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-body)" }}
                >
                  The good news is that together we have already built many of the key components
                  required for a high-performance enrolment growth system.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  We have strong demand generation channels, a CRM capable of tracking the full
                  enrolment lifecycle, and a reporting foundation that allows us to analyse campaign
                  performance.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  The next step is to connect these components more tightly, prioritise lead quality,
                  optimise marketing activity around{" "}
                  <span style={{ color: "#ff4800", fontWeight: 600 }}>
                    Cost Per Enrolment
                  </span>{" "}
                  rather than Cost Per Lead, and introduce new engagement systems that strengthen
                  long-term relationships with families already within the SPARK network.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)" }}
                >
                  By combining acquisition, conversion and retention into a unified system, SPARK can
                  build a marketing ecosystem that supports both enrolment growth and long-term parent
                  loyalty.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
                >
                  This proposal outlines how we can build on the progress already achieved together
                  and transform the current marketing ecosystem into a fully integrated enrolment
                  growth system.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
