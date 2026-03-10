"use client";

import { useState, useRef } from "react";
import { FadeIn } from "@/components/FadeIn";

const platforms = [
  {
    id: "newsroom",
    num: "01",
    title: "Newsroom AI",
    subtitle: "AI-driven programmatic media buying",
    accent: "#1f49c9",
    bgAlpha: "rgba(31,73,201,0.06)",
    borderAlpha: "rgba(31,73,201,0.2)",
    icon: "◈",
    body: [
      "Newsroom introduces AI-powered programmatic advertising that automatically distributes campaigns across a wide network of premium digital media placements.",
      "Instead of manually selecting placements, the platform uses performance data to dynamically optimise where ads appear. This allows SPARK campaigns to reach prospective parents across news sites, lifestyle platforms and high-traffic digital environments where families are already consuming content.",
      "Programmatic delivery continuously optimises placement, format and timing to improve engagement and drive qualified traffic back to SPARK's enrolment ecosystem.",
    ],
    impact: [
      "Expands reach beyond traditional social and search channels",
      "Places SPARK messaging across premium digital media environments",
      "Uses AI optimisation to continuously improve campaign performance",
    ],
  },
  {
    id: "meta",
    num: "02",
    title: "Meta Performance Budget Automation",
    subtitle: "AI-assisted campaign optimisation",
    accent: "#0866FF",
    bgAlpha: "rgba(8,102,255,0.06)",
    borderAlpha: "rgba(8,102,255,0.2)",
    icon: "⬡",
    body: [
      "Meta's latest performance tools allow campaigns to optimise toward a defined outcome rather than individual ad budgets.",
      "Instead of manually allocating spend across campaigns, marketing teams can define a target outcome — such as a specific number of enrolments — and allow the platform to automatically distribute budget across audiences, creatives and placements.",
      "The system continuously learns from campaign performance and shifts budget toward the combinations that produce the strongest conversion results. For SPARK, this means campaigns can optimise toward enrolment outcomes rather than simply generating leads.",
    ],
    impact: [
      "Budget automatically shifts toward high-performing audiences",
      "Faster optimisation cycles across creatives and targeting",
      "Stronger alignment between media investment and enrolment outcomes",
    ],
  },
  {
    id: "dooh",
    num: "03",
    title: "Digital Out-of-Home Advertising",
    subtitle: "High-visibility brand presence",
    accent: "#ff4800",
    bgAlpha: "rgba(255,72,0,0.05)",
    borderAlpha: "rgba(255,72,0,0.18)",
    icon: "◻",
    body: [
      "Digital Out-of-Home advertising expands SPARK's visibility into physical environments where parents commute, shop and spend time with their families.",
      "Large digital screens in high-traffic areas allow SPARK messaging to appear in locations such as shopping centres, transport corridors and urban centres.",
      "Unlike traditional billboards, digital out-of-home media can be scheduled dynamically and integrated with broader marketing campaigns. Campaigns can also be aligned with enrolment phases, campus locations and local community awareness initiatives.",
    ],
    impact: [
      "Builds strong local brand visibility around campuses",
      "Reinforces digital campaigns through physical media presence",
      "Supports brand building during non-enrolment periods",
    ],
  },
  {
    id: "email",
    num: "04",
    title: "Email & Parent Nurture Automation",
    subtitle: "Structured parent engagement",
    accent: "#00a8e1",
    bgAlpha: "rgba(0,168,225,0.06)",
    borderAlpha: "rgba(0,168,225,0.2)",
    icon: "◎",
    body: [
      "When a prospective parent shows interest in SPARK — whether through a lead form, website enquiry, open day registration or chatbot interaction — a structured email nurture journey can automatically begin.",
      "These communication flows provide parents with helpful information about SPARK's learning approach, campus culture, admissions process and the benefits of enrolling their child at SPARK.",
      "The system can also guide parents through the application process by providing reminders, helpful resources and next steps. Where appropriate, communication can extend beyond email to include WhatsApp messages or direct admissions follow-up.",
    ],
    impact: [
      "Keeps prospective families engaged after the initial enquiry",
      "Improves application completion rates",
      "Ensures parents receive helpful information throughout the enrolment journey",
    ],
  },
  {
    id: "seo",
    num: "05",
    title: "Search Growth Strategy",
    subtitle: "Long-term organic visibility",
    accent: "#1a7a3a",
    bgAlpha: "rgba(26,122,58,0.06)",
    borderAlpha: "rgba(26,122,58,0.2)",
    icon: "◑",
    body: [
      "Search remains one of the most powerful discovery channels for parents exploring schooling options.",
      "A structured SEO strategy ensures SPARK appears prominently when parents search for schooling options, campuses and education topics relevant to their children.",
      "Using tools such as SEOptimer, SPARK can continuously monitor technical SEO health, identify keyword opportunities and develop content that improves search visibility. This approach supports long-term growth by generating qualified traffic organically while strengthening SPARK's digital authority.",
    ],
    impact: [
      "Increased organic visibility in search engines",
      "More qualified parent traffic without additional media spend",
      "Stronger long-term digital presence",
    ],
  },
  {
    id: "ai-chat",
    num: "06",
    title: "AI Conversational Admissions Assistant",
    subtitle: "24/7 parent engagement",
    accent: "#801078",
    bgAlpha: "rgba(128,16,120,0.06)",
    borderAlpha: "rgba(128,16,120,0.2)",
    icon: "◐",
    body: [
      "Modern parents expect fast responses when exploring schooling options.",
      "AI-powered conversational assistants allow SPARK to respond instantly to questions about campuses, admissions requirements, open days and application processes.",
      "Unlike basic chat widgets, advanced conversational systems can qualify enquiries, provide structured information and guide parents through the next step in the enrolment journey. High-intent conversations can be escalated directly to admissions teams, ensuring prospective families receive timely support.",
    ],
    impact: [
      "Immediate responses to parent questions",
      "Reduced workload for admissions teams",
      "Improved conversion from enquiry to application",
    ],
  },
  {
    id: "parent-app",
    num: "07",
    title: "SPARK Parent Engagement App",
    subtitle: "Loyalty, retention and parent engagement platform",
    accent: "#1f49c9",
    bgAlpha: "rgba(31,73,201,0.06)",
    borderAlpha: "rgba(31,73,201,0.2)",
    icon: "◉",
    body: [
      "While most marketing systems focus on acquiring new families, the most successful education networks also invest in strengthening relationships with existing parents.",
      "The SPARK Parent Engagement App introduces a dedicated platform designed to reward loyalty, improve communication and encourage long-term commitment to the SPARK network.",
      "The app would be available to existing parents and provide a central space for engagement with the school ecosystem. Key capabilities could include loyalty rewards for long-term commitments, sibling enrolment incentives, parent communication tools, referral programmes and school updates. This platform transforms satisfied parents into active advocates while strengthening retention across the network.",
    ],
    examples: [
      "Discounts for siblings or multiple enrolled children",
      "Early commitment incentives for upcoming academic years",
      "Long-term enrolment rewards",
      "Parent referral programmes",
      "School news and updates",
      "Central communication hub for parents",
    ],
    impact: [
      "Strengthens long-term parent relationships",
      "Encourages multi-child enrolments within families",
      "Creates a structured referral engine for new learners",
      "Improves engagement between parents and the SPARK network",
    ],
  },
  {
    id: "budget-allocation",
    num: "08",
    title: "Enrolment Budget Allocation Platform",
    subtitle: "Marketing demand allocation platform",
    accent: "#d97706",
    bgAlpha: "rgba(217,119,6,0.06)",
    borderAlpha: "rgba(217,119,6,0.2)",
    icon: "◆",
    body: [
      "While most marketing platforms optimise campaigns around clicks, impressions or cost per lead, school networks ultimately need to optimise for a different outcome: filling available seats across grades and campuses.",
      "The Enrolment Budget Allocation Platform connects marketing performance directly to school demand by linking campaign data with the number of seats remaining in each grade.",
      "Instead of distributing advertising budget evenly, the system forecasts the number of leads and enrolments required per school and automatically recommends how marketing budget should be allocated to meet those targets. This transforms marketing from a lead-generation exercise into a controlled enrolment pipeline that directs advertising investment toward the grades and campuses that need students most.",
    ],
    impact: [
      "Aligns marketing investment with actual seat demand",
      "Forecasts expected leads and enrolments before budget is deployed",
      "Directs spend toward schools and grades that need students most",
      "Transforms campaign optimisation from CPL to enrolment outcomes",
    ],
  },
];

export function NextGenPlatformsSection() {
  const [active, setActive] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const touchStartX = useRef(0);

  const goTo = (i: number) => {
    if (i === active) return;
    setActive(i);
    setSlideKey((k) => k + 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(Math.min(platforms.length - 1, active + 1));
      else goTo(Math.max(0, active - 1));
    }
  };

  const p = platforms[active];

  return (
    <section
      id="next-gen-platforms"
      className="py-24 px-6"
      style={{ background: "#ffffff" }}
    >
      <div className="container-spark">

        {/* Header */}
        <FadeIn>
          <p className="section-label mb-5">Emerging Platforms</p>
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
            <div>
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
                Next-Generation
                <br />
                <span style={{ color: "rgba(31,73,201,0.2)" }}>Marketing Platforms</span>
              </h2>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              As SPARK continues to scale its enrolment system, several new marketing technologies
              can unlock additional performance and reach. These platforms extend the current marketing
              ecosystem beyond traditional channels, enabling smarter budget allocation, stronger brand
              visibility, and more responsive parent engagement.
            </p>
          </div>
        </FadeIn>

        {/* Slider */}
        <FadeIn delay={100}>
          {/* Tab navigation */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {platforms.map((pl, i) => (
              <button
                key={pl.id}
                onClick={() => goTo(i)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200"
                style={{
                  background: i === active ? pl.accent : "transparent",
                  color: i === active ? "#ffffff" : "rgba(43,4,48,0.35)",
                  border: i === active
                    ? `1px solid ${pl.accent}`
                    : "1px solid rgba(43,4,48,0.1)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.02em",
                }}
              >
                <span className="font-bold">{pl.num}</span>
                <span className="hidden md:inline">{pl.title}</span>
              </button>
            ))}

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
                onClick={() => goTo(Math.min(platforms.length - 1, active + 1))}
                disabled={active === platforms.length - 1}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: "rgba(43,4,48,0.05)",
                  border: "1px solid rgba(43,4,48,0.1)",
                  color: active === platforms.length - 1 ? "rgba(43,4,48,0.2)" : "rgba(43,4,48,0.6)",
                  cursor: active === platforms.length - 1 ? "not-allowed" : "pointer",
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
                width: `${((active + 1) / platforms.length) * 100}%`,
                background: p.accent,
              }}
            />
          </div>

          {/* Active card */}
          <div
            key={slideKey}
            className="slide-card-in rounded-2xl relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              background: "#f9fafb",
              border: "1px solid rgba(43,4,48,0.07)",
              borderTop: `3px solid ${p.accent}`,
            }}
          >
            {/* Ghost number */}
            <span
              className="absolute -right-3 -top-3 font-bold select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "7rem",
                color: "rgba(43,4,48,0.04)",
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              {p.num}
            </span>

            <div className="grid md:grid-cols-[1fr_300px] gap-0">
              {/* Left: main content */}
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className="text-3xl flex-shrink-0"
                    style={{ color: p.accent }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <p
                      className="text-[9px] font-bold tracking-[0.18em] uppercase mb-1"
                      style={{ color: p.accent, fontFamily: "var(--font-body)" }}
                    >
                      {p.num} / {p.subtitle}
                    </p>
                    <h3
                      className="font-bold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                        color: "var(--spark-purple)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {p.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {"examples" in p && p.examples && (
                  <div className="mt-5">
                    <p
                      className="text-[9px] font-bold tracking-[0.18em] uppercase mb-3"
                      style={{ color: "rgba(43,4,48,0.35)", fontFamily: "var(--font-body)" }}
                    >
                      Example engagement opportunities
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {(p.examples as string[]).map((ex, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div
                            className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                            style={{ background: p.accent }}
                          />
                          <span
                            className="text-xs leading-relaxed"
                            style={{ color: "rgba(43,4,48,0.55)", fontFamily: "var(--font-body)" }}
                          >
                            {ex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Impact panel */}
              <div
                className="p-8 md:p-10 flex flex-col border-t md:border-t-0 md:border-l"
                style={{
                  background: p.bgAlpha,
                  borderColor: p.borderAlpha,
                }}
              >
                <p
                  className="text-[9px] font-bold tracking-[0.18em] uppercase mb-5"
                  style={{ color: p.accent, fontFamily: "var(--font-body)" }}
                >
                  Impact for SPARK
                </p>
                <div className="space-y-4 flex-1">
                  {p.impact.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: p.accent }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(43,4,48,0.65)", fontFamily: "var(--font-body)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dot pagination */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {platforms.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === active ? "24px" : "6px",
                  height: "6px",
                  background: i === active ? p.accent : "rgba(43,4,48,0.15)",
                }}
              />
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
