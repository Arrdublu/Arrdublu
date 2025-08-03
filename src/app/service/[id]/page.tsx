import { getServiceById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ServicePageClient } from './ServicePageClient';

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}
