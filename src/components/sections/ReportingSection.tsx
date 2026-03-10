import { FadeIn } from "@/components/FadeIn";

// ─── Schedule data ───────────────────────────────────────────
// Days of the week: Mon(0) Tue(1) Wed(2) Thu(3) Fri(4)

type DayEvent = {
  label: string;
  sublabel?: string;
  duration: string;
  type: "session" | "standup" | "empty";
  color: string;
  bg: string;
  border: string;
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

const outOfSeasonSchedule: (DayEvent | null)[] = [
  null,
  {
    label: "Session 1",
    sublabel: "Reporting & Asset Review",
    duration: "60 min",
    type: "session",
    color: "#1f49c9",
    bg: "rgba(31,73,201,0.12)",
    border: "rgba(31,73,201,0.25)",
  },
  null,
  {
    label: "Session 2",
    sublabel: "Planning & Project Mgmt",
    duration: "60 min",
    type: "session",
    color: "#1f49c9",
    bg: "rgba(31,73,201,0.08)",
    border: "rgba(31,73,201,0.18)",
  },
  null,
];

const highSeasonSchedule: (DayEvent | null)[] = [
  {
    label: "Stand-up",
    sublabel: "Operational check-in",
    duration: "20 min",
    type: "standup",
    color: "#ff4800",
    bg: "rgba(255,72,0,0.12)",
    border: "rgba(255,72,0,0.25)",
  },
  {
    label: "Session 1",
    sublabel: "Performance Review",
    duration: "60 min",
    type: "session",
    color: "#ff4800",
    bg: "rgba(255,72,0,0.1)",
    border: "rgba(255,72,0,0.22)",
  },
  {
    label: "Stand-up",
    sublabel: "Operational check-in",
    duration: "20 min",
    type: "standup",
    color: "#ff4800",
    bg: "rgba(255,72,0,0.12)",
    border: "rgba(255,72,0,0.25)",
  },
  {
    label: "Session 2",
    sublabel: "Planning & Execution",
    duration: "60 min",
    type: "session",
    color: "#ff4800",
    bg: "rgba(255,72,0,0.1)",
    border: "rgba(255,72,0,0.22)",
  },
  {
    label: "Stand-up",
    sublabel: "Operational check-in",
    duration: "20 min",
    type: "standup",
    color: "#ff4800",
    bg: "rgba(255,72,0,0.12)",
    border: "rgba(255,72,0,0.25)",
  },
];


function EventCell({ event }: { event: DayEvent | null }) {
  if (!event) {
    return (
      <div
        className="flex items-center justify-center h-full min-h-[80px] rounded-xl"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.08)" }}
      >
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>—</span>
      </div>
    );
  }
  return (
    <div
      className="rounded-xl p-3 h-full min-h-[80px] flex flex-col justify-between"
      style={{ background: event.bg, border: `1px solid ${event.border}` }}
    >
      <div>
        <p
          className="text-xs font-bold leading-tight mb-0.5"
          style={{ color: event.color, fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
        >
          {event.label}
        </p>
        {event.sublabel && (
          <p
            className="text-[10px] leading-tight"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body)" }}
          >
            {event.sublabel}
          </p>
        )}
      </div>
      <span
        className="text-[9px] font-bold tracking-[0.1em] uppercase mt-2 inline-block px-1.5 py-0.5 rounded-full"
        style={{
          color: event.color,
          background: `${event.border}`,
          fontFamily: "var(--font-body)",
        }}
      >
        {event.duration}
      </span>
    </div>
  );
}

export function ReportingSection() {
  return (
    <section
      id="reporting"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#2B0430" }}
    >

      <div className="container-spark relative z-10">

        {/* Header */}
        <FadeIn>
          <p className="section-label mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Operating Model
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
            How we
            <br />
            <span style={{ color: "rgba(255,255,255,0.2)" }}>work together</span>
          </h2>
          <p
            className="max-w-2xl text-base leading-relaxed mb-16"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)", fontSize: "1.125rem" }}
          >
            The partnership operating model adapts to the academic calendar and the
            intensity of the enrolment season, enabling faster decision-making during the
            most critical periods.
          </p>
        </FadeIn>

        {/* ── Schedule Grid ── */}
        <FadeIn delay={80}>
          <div
            className="rounded-2xl overflow-hidden mb-16"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* Grid header — day labels */}
            <div
              className="grid"
              style={{ gridTemplateColumns: "180px repeat(5, 1fr)", background: "rgba(255,255,255,0.04)" }}
            >
              <div
                className="px-5 py-3 border-r"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              />
              {days.map((day) => (
                <div
                  key={day}
                  className="px-3 py-3 text-center border-r last:border-r-0"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <span
                    className="text-[10px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}
                  >
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Row 1 — Out of Enrolment Season */}
            <div
              className="grid border-t"
              style={{ gridTemplateColumns: "180px repeat(5, 1fr)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              {/* Row label */}
              <div
                className="px-5 py-4 flex flex-col justify-center border-r"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(31,73,201,0.08)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#1f49c9" }} />
                  <span
                    className="text-[9px] font-bold tracking-[0.16em] uppercase"
                    style={{ color: "#1f49c9", fontFamily: "var(--font-body)" }}
                  >
                    Out of Season
                  </span>
                </div>
                <span
                  className="text-[10px] leading-tight"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                >
                  Fortnightly
                </span>
                <span
                  className="text-[10px] mt-1"
                  style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}
                >
                  2 sessions / fortnight
                </span>
              </div>

              {outOfSeasonSchedule.map((event, i) => (
                <div
                  key={i}
                  className="p-2 border-r last:border-r-0"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <EventCell event={event} />
                </div>
              ))}
            </div>

            {/* Row 2 — High Enrolment Season */}
            <div
              className="grid border-t"
              style={{ gridTemplateColumns: "180px repeat(5, 1fr)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              {/* Row label */}
              <div
                className="px-5 py-4 flex flex-col justify-center border-r"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,72,0,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ff4800" }} />
                  <span
                    className="text-[9px] font-bold tracking-[0.16em] uppercase"
                    style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}
                  >
                    High Season
                  </span>
                </div>
                <span
                  className="text-[10px] leading-tight"
                  style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                >
                  Weekly
                </span>
                <span
                  className="text-[10px] mt-1"
                  style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-body)" }}
                >
                  2 sessions + 3 stand-ups / week
                </span>
              </div>

              {highSeasonSchedule.map((event, i) => (
                <div
                  key={i}
                  className="p-2 border-r last:border-r-0"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <EventCell event={event} />
                </div>
              ))}
            </div>

            {/* Legend row */}
            <div
              className="px-5 py-3 border-t flex flex-wrap items-center gap-6"
              style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: "rgba(31,73,201,0.12)", border: "1px solid rgba(31,73,201,0.25)" }} />
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>Working session (out of season)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: "rgba(255,72,0,0.1)", border: "1px solid rgba(255,72,0,0.22)" }} />
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>Working session (high season)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: "rgba(255,72,0,0.12)", border: "1px solid rgba(255,72,0,0.25)" }} />
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>Stand-up (20 min)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.08)" }} />
                <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>No session scheduled</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Mobile schedule fallback */}
        <FadeIn delay={80}>
          <div className="block lg:hidden mb-16 space-y-4">
            {/* Out of Season mobile */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(31,73,201,0.08)", border: "1px solid rgba(31,73,201,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: "#1f49c9" }} />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#1f49c9", fontFamily: "var(--font-body)" }}>
                  Out of Enrolment Season — Fortnightly
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-3" style={{ background: "rgba(31,73,201,0.12)", border: "1px solid rgba(31,73,201,0.25)" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#1f49c9", fontFamily: "var(--font-heading)" }}>Session 1 · Tue</p>
                  <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>Reporting & Asset Review</p>
                  <p className="text-[10px] mt-2 font-bold" style={{ color: "rgba(31,73,201,0.8)" }}>60 min</p>
                </div>
                <div className="rounded-xl p-3" style={{ background: "rgba(31,73,201,0.08)", border: "1px solid rgba(31,73,201,0.18)" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#1f49c9", fontFamily: "var(--font-heading)" }}>Session 2 · Thu</p>
                  <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>Planning & Project Mgmt</p>
                  <p className="text-[10px] mt-2 font-bold" style={{ color: "rgba(31,73,201,0.8)" }}>60 min</p>
                </div>
              </div>
            </div>

            {/* High Season mobile */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,72,0,0.06)", border: "1px solid rgba(255,72,0,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: "#ff4800" }} />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#ff4800", fontFamily: "var(--font-body)" }}>
                  High Enrolment Season — Weekly
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { day: "Mon / Wed / Fri", title: "Stand-up", desc: "Operational check-in", duration: "20 min" },
                  { day: "Tue", title: "Session 1", desc: "Performance Review", duration: "60 min" },
                  { day: "Thu", title: "Session 2", desc: "Planning & Execution", duration: "60 min" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl p-3" style={{ background: "rgba(255,72,0,0.1)", border: "1px solid rgba(255,72,0,0.22)" }}>
                    <p className="text-[9px] font-bold tracking-wide uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)" }}>{item.day}</p>
                    <p className="text-xs font-bold mb-1" style={{ color: "#ff4800", fontFamily: "var(--font-heading)" }}>{item.title}</p>
                    <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)" }}>{item.desc}</p>
                    <p className="text-[10px] mt-2 font-bold" style={{ color: "rgba(255,72,0,0.7)" }}>{item.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
