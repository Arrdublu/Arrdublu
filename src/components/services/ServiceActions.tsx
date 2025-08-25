'use client';

import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign } from 'lucide-react';

interface ServiceActionsProps {
  service: Service;
}

export function ServiceActions({ service }: ServiceActionsProps) {

  const handleBookNowClick = () => {
    if (service.paymentLink) {
      window.open(service.paymentLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDepositClick = () => {
    window.open('https://buy.stripe.com/aFacN58UK2Hy9WK5Ho93y0m', '_blank', 'noopener,noreferrer');
  };

  return (
      <div className="mt-4 flex flex-col gap-3">
           <Button size="lg" className="w-full" onClick={handleBookNowClick}>
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="secondary" className="w-full" onClick={handleDepositClick}>
              Make a Deposit
              <DollarSign className="ml-2 h-5 w-5" />
          </Button>
      </div>
  )
}
