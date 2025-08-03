"use client";

import { useParams, useRouter } from "next/navigation";

import React from "react";
import { ServiceCapabilities } from "@/app/components/Services-Details/ServiceCapabilities";
import { ServiceHero } from "@/app/components/Services-Details/ServiceHero";
import { ServiceModules } from "@/app/components/Services-Details/ServiceModules";
import { ServiceOverview } from "@/app/components/Services-Details/ServiceOverview";
import { ServicesCTA } from "@/app/components/Services-Details/Services-CTA";
import { services } from "@/lib/services";

export default function ServicePage() {
  const params = useParams();
  const router = useRouter()
  const id = params?.id as string;

  const service = services.find((s) => s.id === id);

  if (!service) return router.push("/not-found");

  const { hero, overview, modules, capabilities, CTA } = service;

  return (
    <>
      <ServiceHero {...hero} />
      <ServiceOverview {...overview} />
      <ServiceModules modules={modules} hero={hero} />
      <ServiceCapabilities capabilities={capabilities} />
      <ServicesCTA {...CTA} />
    </>
  );
}
