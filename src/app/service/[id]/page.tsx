
import { getServiceById, getCaseStudiesByIds } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ServicePageClient } from './ServicePageClient';
import type { CaseStudy } from '@/lib/types';

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  let relatedCaseStudies: CaseStudy[] = [];
  if (service.caseStudyIds && service.caseStudyIds.length > 0) {
    relatedCaseStudies = await getCaseStudiesByIds(service.caseStudyIds);
  }

  return <ServicePageClient service={service} caseStudies={relatedCaseStudies} />;
}
