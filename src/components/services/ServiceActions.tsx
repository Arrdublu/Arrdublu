
'use client';

import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceActionsProps {
  service: Service;
}

export function ServiceActions({ service }: ServiceActionsProps) {

  const handleBookNowClick = () => {
    if (service.paymentLink) {
      window.open(service.paymentLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
      <div className="mt-4 flex flex-col">
           <Button size="lg" className="w-full" onClick={handleBookNowClick}>
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
      </div>
  )
}
