'use client';

import { useSearchParams } from 'next/navigation';
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

const SearchPageClient: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const filteredServices = services.filter((service) => {
    if (!query) return false;
    const searchTerm = query.toLowerCase();
    return (
      service.name.toLowerCase().includes(searchTerm) ||
      service.description.toLowerCase().includes(searchTerm) ||
      service.category.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-2">
        Search Results
      </h1>
      {query ? (
        <p className="text-lg text-muted-foreground mb-8">
          Showing results for: <span className="font-semibold text-foreground">"{query}"</span>
        </p>
      ) : (
         <p className="text-lg text-muted-foreground mb-8">
          Please enter a search term to see results.
        </p>
      )}

      {query && filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        query && (
            <Card className="text-center py-20">
                <CardContent className="flex flex-col items-center gap-4 pt-6">
                    <h2 className="text-2xl font-semibold">No services found</h2>
                    <p className="text-muted-foreground max-w-md">\
                        We couldn't find any services matching your search. Try a different keyword or browse our full catalog.
                    </p>
                    <Button asChild className="mt-4">
                        <Link href="/">Browse All Services</Link>
                    </Button>
                </CardContent>
            </Card>
        )
      )}
    </div>
  );
};

export default SearchPageClient;