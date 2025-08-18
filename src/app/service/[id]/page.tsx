import { getServiceById, getCaseStudiesByIds } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ServicePageClient } from './ServicePageClient';
import type { CaseStudy } from '@/lib/types';

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  let relatedCaseStudies: CaseStudy[] = [];
  if (service.caseStudyIds && service.caseStudyIds.length > 0) {
    relatedCaseStudies = await getCaseStudiesByIds(service.caseStudyIds);
  }

  return <ServicePageClient service={service} caseStudies={relatedCaseStudies} />;
}
