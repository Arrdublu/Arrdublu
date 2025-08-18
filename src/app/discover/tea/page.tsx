
import { Timeline } from '@/components/our-story/Timeline';

export default function TEAPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          T.E.A (The Epic Adventures)
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
          From a simple idea to a thriving creative hub, follow our journey and see the milestones that shaped us.
        </p>
      </div>
      <Timeline />
    </div>
  );
}
