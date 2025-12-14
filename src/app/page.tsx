
import { services } from '@/lib/data';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Recommendations } from '@/components/services/Recommendations';
import { CustomRequestForm } from '@/components/services/CustomRequestForm';
import { Separator } from '@/components/ui/separator';
import { HomePageClient } from './HomePageClient';

export default function Home() {
  const categories = ['Creative', 'Lifestyle', 'SEO'];

  return (
    <>
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-hero-background">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/arrdublu-d1c06.appspot.com/o/mobile_web_wide.mp4?alt=media&token=4b5c3db0-22a1-4bea-8f3e-f5a0361d774b"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 hidden md:block"
        />
        <video
          src="https://firebasestorage.googleapis.com/v0/b/arrdublu-d1c06.firebasestorage.app/o/motion_portrait.mp4?alt=media&token=74cddd9f-390f-4a2f-b23d-84fbe7ef3042"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 md:hidden"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-4xl md:text-7xl font-headline font-bold drop-shadow-md">
            Elevate Your Vision
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
            Exquisite media services for the discerning client. Unparalleled quality in SEO, creative, and lifestyle content.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
    </>
  );
}
