
import { getServiceById, getCaseStudiesByIds } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ServicePageClient } from './ServicePageClient';
import type { CaseStudy, Service } from '@/lib/types';
import type { Metadata, ResolvingMetadata } from 'next';

interface ServicePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: ServicePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const service = getServiceById(id)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  // optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${service.name} | Arrdublu`,
    description: service.description,
    openGraph: {
      title: service.name,
      description: service.description.substring(0, 150),
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
        ...previousImages,
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: service.name,
        description: service.description.substring(0, 150),
        images: [service.image],
    }
  }
}


export default async function ServicePage({ params }: ServicePageProps) {
  const { id } = params;
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
