import { FadeIn } from "@/components/FadeIn";

const channels = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.03 2 11c0 2.84 1.45 5.38 3.71 7.03V22l3.2-1.76c.97.27 2 .41 3.09.41 5.52 0 10-4.03 10-9s-4.48-9-10-9zm.5 12.5h-1v-1h1v1zm0-2.5h-1V7h1v5z" fill="currentColor"/>
      </svg>
    ),
    name: "AI Chat Support",
    tagline: "Instant admissions assistance",
    accent: "#1f49c9",
    desc: "Website chat powered by conversational AI allows parents to receive immediate answers to common questions about campuses, admissions requirements, open days and application processes. High-intent conversations can be escalated directly to admissions teams, ensuring prospective families receive fast and helpful support throughout the decision journey.",
    useCases: ["Campus questions", "Admissions requirements", "Open day information", "High-intent escalation"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" fill="currentColor"/>
        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zm-8.475 18.297h-.006c-1.775 0-3.513-.477-5.031-1.378l-.361-.214-3.741.975.997-3.648-.235-.374c-.99-1.576-1.516-3.393-1.516-5.26C2.13 6.435 6.607 1.977 12.049 1.977c2.637 0 5.112 1.023 6.977 2.878a9.833 9.833 0 012.877 6.985c-.002 5.444-4.479 9.906-9.858 9.906z" fill="currentColor"/>
      </svg>
    ),
    name: "WhatsApp",
    tagline: "Fast & conversational",
    accent: "#25D366",
    desc: "A fast and convenient channel for reminders, responses to questions and ongoing engagement with prospective parents. Meets parents where they already communicate.",
    useCases: ["Appointment reminders", "Quick Q&A responses", "Open day follow-ups", "Application nudges"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
      </svg>
    ),
    name: "Phone",
    tagline: "High-intent engagement",
    accent: "#1f49c9",
    desc: "Phone conversations allow admissions teams to engage directly with high-intent families and support them through the application process. The most personal touchpoint.",
    useCases: ["High-intent follow-up", "Application support", "Decision stage calls", "Personalised guidance"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
      </svg>
    ),
    name: "Email",
    tagline: "Structured information",
    accent: "#ff4800",
    desc: "Email remains valuable for structured communication such as application instructions, school information and event invitations. Ideal for detailed, reference content.",
    useCases: ["Application instructions", "School information packs", "Event invitations", "Welcome sequences"],
  },
];

export function CommunicationSection() {
  return (
    <section id="communication" className="py-24 px-6" style={{ background: "#f9fafb" }}>
      <div className="container-spark">
        <FadeIn>
          <p className="section-label mb-5">Parent Communication</p>
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
                Meeting
                <br />
                parents
                <br />
                <span style={{ color: "rgba(43,4,48,0.2)" }}>where they are</span>
              </h2>
            </div>
            <div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(43,4,48,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
              >
                Effective communication plays a critical role in guiding parents through
                the decision-making journey. Modern communication habits increasingly favour
                faster and more conversational engagement — a multi-channel approach ensures
                parents receive timely, relevant communication throughout their decision journey.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mb-10 max-w-4xl">
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              Conversational engagement plays an increasingly important role in modern parent communication.
              Intelligent chat and messaging platforms allow prospective families to receive immediate responses
              to questions while guiding them through the admissions journey.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
            >
              These tools support admissions teams by answering common questions, qualifying enquiries and directing
              high-intent parents toward the next step in the enrolment process.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {channels.map((ch, i) => (
            <FadeIn key={ch.name} delay={i * 100}>
              <div
                className="card-spark rounded-2xl p-8 h-full flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${ch.accent}15`, color: ch.accent }}
                >
                  {ch.icon}
                </div>

                {/* Name + tagline */}
                <p
                  className="font-bold text-2xl mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--spark-purple)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {ch.name}
                </p>
                <p
                  className="text-xs font-bold tracking-[0.12em] uppercase mb-4"
                  style={{ color: ch.accent, fontFamily: "var(--font-body)" }}
                >
                  {ch.tagline}
                </p>

                <p
                  className="text-sm leading-relaxed mb-6 flex-1"
                  style={{ color: "rgba(43,4,48,0.62)", fontFamily: "var(--font-body)" }}
                >
                  {ch.desc}
                </p>

                {/* Use cases */}
                <div className="space-y-2">
                  {ch.useCases.map((uc) => (
                    <div key={uc} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: ch.accent }}
                      />
                      <span
                        className="text-xs"
                        style={{ color: "rgba(43,4,48,0.55)", fontFamily: "var(--font-body)" }}
                      >
                        {uc}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div
                  className="mt-6 h-0.5 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${ch.accent}, transparent)` }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
