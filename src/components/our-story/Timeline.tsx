
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const timelineEvents = [
  {
    year: '2018',
    title: 'The Spark of an Idea',
    description: 'Arrdublu was founded by Ramone C. Wynter, a passionate creative and tech enthusiast with a vision: to provide high-quality, impactful media services that help brands tell their unique stories.',
  },
  {
    year: '2020',
    title: 'Expanding Our Horizons',
    description: 'We broadened our service offerings to include a full suite of creative solutions, from brand identity design to video production, helping our clients achieve a cohesive and powerful presence across all channels.',
  },
  {
    year: '2022',
    title: 'Recognition and Growth',
    description: 'Our commitment to excellence was recognized with several industry awards. Our team grew, bringing in new talent and expertise to better serve our expanding client base and tackle more ambitious projects.',
  },
  {
    year: '2024',
    title: 'Innovating for the Future',
    description: 'Embracing the future, we integrated advanced AI tools like the ARRDUBLU™ Rig/agent into our workflow, pushing the boundaries of creativity and efficiency to deliver next-generation media solutions.',
  },
];

export function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto py-8">
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true" />
      <div className="relative flex flex-col items-start md:items-center gap-16">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`relative w-full flex items-center ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div className="md:w-1/2 pl-12 md:px-4">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                 <CardHeader>
                    <Badge
                        variant="outline"
                        className="mb-2 w-fit text-lg font-bold text-primary border-primary"
                    >
                        {event.year}
                    </Badge>
                    <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
