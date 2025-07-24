
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
    image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'corporate event',
    videoUrl: '#',
  },
  {
    id: 'event-2',
    title: 'Music Festival Highlights',
    client: 'SynthWave Fest',
    description: 'A high-energy highlights reel showcasing the best performances and moments from the three-day music festival.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'music festival',
    videoUrl: '#',
  },
  {
    id: 'event-3',
    title: 'Gala Dinner & Awards Ceremony',
    client: 'Charity Foundation',
    description: 'Elegant and cinematic coverage of a black-tie gala, including emotional award acceptances and guest interviews.',
    image: 'https://images.unsplash.com/photo-1523301343965-65356351a5a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'gala dinner',
    videoUrl: '#',
  },
  {
    id: 'event-4',
    title: 'Product Launch Keynote',
    client: 'TechForward Inc.',
    description: 'A multi-camera production of a major product launch, edited for impact and clarity for a global online audience.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4b2489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
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
