"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useLeadModal } from "@/context/LeadModalContext";
import Hero from "@/components/sections/Hero";

// Below-fold sections loaded lazily to reduce initial JS bundle
const Benefits = dynamic(() => import("@/components/sections/Benefits"));
const AppShowcase = dynamic(() => import("@/components/sections/AppShowcase"));
const SavingsSimulator = dynamic(() => import("@/components/sections/SavingsSimulator"));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const Sustainability = dynamic(() => import("@/components/sections/Sustainability"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));

function SectionSkeleton() {
  return <div className="w-full py-24 bg-[var(--color-bg-deep)] animate-pulse" aria-hidden="true" />;
}

export default function LandingPage() {
  const { openModal } = useLeadModal();

  return (
    <div className="flex flex-col">
      {/* Hero is eagerly loaded — above the fold */}
      <Hero onOpenLeadForm={openModal} />

      <Suspense fallback={<SectionSkeleton />}>
        <Benefits onOpenLeadForm={openModal} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AppShowcase />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SavingsSimulator onOpenLeadForm={openModal} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Sustainability />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials onOpenLeadForm={openModal} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQ onOpenLeadForm={openModal} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FinalCTA onOpenLeadForm={openModal} />
      </Suspense>
    </div>
  );
}
