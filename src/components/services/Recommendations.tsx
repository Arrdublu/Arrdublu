'use client';

import { useEffect, useState, useMemo } from 'react';
import { useCart } from '@/context/CartProvider';
import { getRecommendedServicesAction } from '@/lib/actions';
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ServiceCard } from './ServiceCard';
import { Skeleton } from '../ui/skeleton';

export function Recommendations() {
  const { viewedItems, cartItems } = useCart();
  const [recommendedServices, setRecommendedServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const cartItemIds = useMemo(() => cartItems.map((item) => item.service.id), [cartItems]);

  useEffect(() => {
    // Only fetch if there's activity and we haven't fetched before
    if ((viewedItems.length > 0 || cartItemIds.length > 0) && !loading) {
      const fetchRecommendations = async () => {
        setLoading(true);
        setHasFetched(true);
        const services = await getRecommendedServicesAction(viewedItems, cartItemIds);
        setRecommendedServices(services);
        setLoading(false);
      };

      // Debounce the call to avoid rapid-fire requests
      const timer = setTimeout(() => {
        fetchRecommendations();
      }, 1000); 

      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewedItems, cartItemIds]); // We don't include loading to prevent re-triggering

  if (!hasFetched && !loading) return null;

  if (loading) {
    return (
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-primary">Just For You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                    <Skeleton className="aspect-video w-full rounded-t-lg" />
                    <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </section>
    );
  }

  if (recommendedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-headline font-semibold mb-8 text-center text-primary">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recommendedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
