
'use client';

import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

interface ServiceActionsProps {
  service: Service;
}

export function ServiceActions({ service }: ServiceActionsProps) {

  const handleBookNowClick = () => {
    if (service.paymentLink) {
        window.open(service.paymentLink, '_blank', 'noopener,noreferrer');
    }
  }
  
  const handleFastpayClick = () => {
    if (service.fastpayLink) {
        window.open(service.fastpayLink, '_blank', 'noopener,noreferrer');
    }
  }

    return (
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <Button size="lg" className="w-full sm:w-auto flex-grow bg-primary hover:bg-primary/90" onClick={handleBookNowClick}>
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
             <Button size="lg" variant="secondary" className="w-full sm:w-auto flex-grow" onClick={handleFastpayClick}>
                Fastpay
                <Zap className="ml-2 h-5 w-5" />
            </Button>
        </div>
    )
}
