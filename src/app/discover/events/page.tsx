
import { EventShowcase } from '@/components/events/EventShowcase';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          Event Cinematography
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
          From corporate summits to live performances, we capture the energy and narrative of every event.
        </p>
      </div>
      <EventShowcase />
    </div>
  );
}
