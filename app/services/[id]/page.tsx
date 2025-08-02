"use client"

import React from 'react'
import { ServiceCapabilities } from '@/app/components/ServiceCapabilities';
import { ServiceHero } from '@/app/components/ServiceHero';
import { ServiceModules } from '@/app/components/ServiceModules';
import { ServiceOverview } from '@/app/components/ServiceOverview';
import { services } from '@/lib/services';
import { useParams } from 'next/navigation'

export default function ServicePage() {
  const params = useParams();
  const id = params?.id as string;

  const service = services.find(s => s.id === id)!
  const { hero, overview, modules, capabilities } = service

  return (
    <>
    <ServiceHero {...hero} />
    <ServiceOverview {...overview} />
    <ServiceModules modules={modules} hero={hero} />
    <ServiceCapabilities capabilities={capabilities} />
    </>
  )
}