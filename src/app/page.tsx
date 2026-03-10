import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { SuccessSection } from "@/components/sections/SuccessSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { StrategicShiftSection } from "@/components/sections/StrategicShiftSection";
import { GrowthEngineSection } from "@/components/sections/GrowthEngineSection";
import { MeasurementSection } from "@/components/sections/MeasurementSection";
import { CRMSection } from "@/components/sections/CRMSection";
import { TechnologyStackSection } from "@/components/sections/TechnologyStackSection";
import { NextGenPlatformsSection } from "@/components/sections/NextGenPlatformsSection";
import { LeadCaptureSection } from "@/components/sections/LeadCaptureSection";
import { WebsiteSection } from "@/components/sections/WebsiteSection";
import { SeasonalStrategySection } from "@/components/sections/SeasonalStrategySection";
import { UnifiedGrowthSection } from "@/components/sections/UnifiedGrowthSection";
import { CommunicationSection } from "@/components/sections/CommunicationSection";
import { ReportingSection } from "@/components/sections/ReportingSection";
import { PartnershipPhilosophySection } from "@/components/sections/PartnershipPhilosophySection";
import { PartnershipExpectationsSection } from "@/components/sections/PartnershipExpectationsSection";
import { CommercialModelSection } from "@/components/sections/CommercialModelSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <main id="proposal">
        {/* 2. Context / Challenges We Identified */}
        <ChallengesSection />

        {/* 3. What Success Looks Like */}
        <SuccessSection />

        {/* 4. Introduction */}
        <IntroSection />

        {/* 5. The Strategic Shift (CPL → CPA) */}
        <StrategicShiftSection />

        {/* 6. The Framework — Enrolment Growth Engine */}
        <GrowthEngineSection />

        {/* 7. Measurement Framework */}
        <MeasurementSection />

        {/* 8. CRM & Platform Integration */}
        <CRMSection />

        {/* 9. Technology Stack */}
        <TechnologyStackSection />

        {/* 10. Next-Generation Marketing Platforms */}
        <NextGenPlatformsSection />

        {/* 11. Lead Capture Optimisation */}
        <LeadCaptureSection />

        {/* 12. Website Management */}
        <WebsiteSection />

        {/* 12. Marketing Strategy by Enrolment Season */}
        <SeasonalStrategySection />

        {/* 13. From Lead-Driven to Unified Growth */}
        <UnifiedGrowthSection />

        {/* 14. Parent Communication */}
        <CommunicationSection />

        {/* 14. Reporting & Data Visibility */}
        <ReportingSection />

        {/* 15. Partnership Philosophy */}
        <PartnershipPhilosophySection />

        {/* 16. Partnership Expectations */}
        <PartnershipExpectationsSection />

        {/* 17. Commercial Model */}
        <CommercialModelSection />

        {/* 18. Implementation */}
        <TimelineSection />
      </main>

      {/* 18. Final CTA */}
      <section className="py-24 px-6" style={{ background: "#2B0430" }}>
        <div className="container-spark text-center">
          <FadeIn>
            <p className="section-label mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Ready to talk?
            </p>
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: "rgba(255,255,255,0.25)" }}>something great</span>
            </h2>
            <p
              className="max-w-md mx-auto mb-10 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)" }}
            >
              Broadbrand · Digital Solutions Group · March 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="mailto:mikee@dsg.co.za"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90"
                style={{ background: "#ff4800", color: "#fff" }}
              >
                Get in Touch
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
              >
                About Us →
              </a>
            </div>

            {/* Logo strip */}
            <div
              className="pt-12 mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-14"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="relative w-[180px] h-[36px]">
                <Image
                  src="/Logos/Broadbrand.png"
                  alt="Broadbrand"
                  fill
                  className="object-contain object-center"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div className="relative w-[160px] h-[36px]">
                <Image
                  src="/Logos/heart-DSG.png"
                  alt="Doing Something Great"
                  fill
                  className="object-contain object-center"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <div className="relative w-[180px] h-[36px]">
                <Image
                  src="/Logos/Proud member of DSG.png"
                  alt="Proud member of DSG"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
