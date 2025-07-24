
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const eventFilms = [
  {
    id: 'event-1',
    title: 'Corporate Summit 2023',
    client: 'Innovate Corp',
    description: 'We captured the keynotes, breakout sessions, and networking moments from the annual Innovate Corp summit.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'corporate event',
    videoUrl: '#',
  },
  {
    id: 'event-2',
    title: 'Music Festival Highlights',
    client: 'SynthWave Fest',
    description: 'A high-energy highlights reel showcasing the best performances and moments from the three-day music festival.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'music festival',
    videoUrl: '#',
  },
  {
    id: 'event-3',
    title: 'Gala Dinner & Awards Ceremony',
    client: 'Charity Foundation',
    description: 'Elegant and cinematic coverage of a black-tie gala, including emotional award acceptances and guest interviews.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gala dinner',
    videoUrl: '#',
  },
  {
    id: 'event-4',
    title: 'Product Launch Keynote',
    client: 'TechForward Inc.',
    description: 'A multi-camera production of a major product launch, edited for impact and clarity for a global online audience.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'product launch',
    videoUrl: '#',
  },
];

export function EventShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {eventFilms.map((event) => (
        <Card key={event.id} className="group overflow-hidden flex flex-col">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={event.dataAiHint}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="h-16 w-16 text-white/80" />
            </div>
          </div>
          <CardHeader>
            <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
            <CardDescription>Client: {event.client}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">{event.description}</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href={event.videoUrl}>Watch Film</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
