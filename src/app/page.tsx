
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Recommendations } from '@/components/services/Recommendations';
import { CustomRequestForm } from '@/components/services/CustomRequestForm';
import { Separator } from '@/components/ui/separator';
import { HomePageClient } from './HomePageClient';

export default function Home() {
  const categories = ['Creative', 'Lifestyle', 'SEO'];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center py-16 md:py-24 bg-hero-background rounded-lg my-8">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary-foreground">
          Elevate Your Vision
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
          Exquisite media services for the discerning client. Unparalleled quality in SEO, creative, and lifestyle content.
        </p>
      </section>

      <HomePageClient />

      {categories.map((category) => {
        const categoryServices = services.filter(
          (service) => service.category === category
        );
        if (categoryServices.length === 0) return null;

        return (
          <section key={category} className="py-12">
            <h2 className="text-3xl font-headline font-semibold mb-8 text-primary">
              {category} Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categoryServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        );
      })}

      <Separator className="my-16" />

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-semibold text-primary">
            Need Something Different?
          </h2>
 <p className="mt-4 text-lg max-w-2xl mx-auto text-foreground/80">
            If you have a unique request or need a custom package, please let us know. We're happy to discuss your project.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <CustomRequestForm />
        </div>
      </section>
      
      <Recommendations />
    </div>
  );
}
