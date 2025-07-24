
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
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true" />
      <div className="relative space-y-16">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative">
            <div className="flex items-center">
              {/* Card on one side */}
              <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                {index % 2 !== 0 && (
                  <Card className="shadow-lg hover:shadow-xl transition-shadow invisible">
                      <CardHeader>
                          <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                  </Card>
                )}
              </div>
              {/* Dot in the middle */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
               {/* Card on the other side */}
              <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                 {index % 2 === 0 && (
                  <Card className="shadow-lg hover:shadow-xl transition-shadow invisible">
                      <CardHeader>
                          <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Positioned elements */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center">
                {/* Year Badge */}
                <div className={`w-1/2 flex items-center ${index % 2 === 0 ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                    {index % 2 !== 0 && (
                        <Badge variant="outline" className="text-lg font-bold text-primary border-primary z-10">
                            {event.year}
                        </Badge>
                    )}
                </div>
                <div className="w-auto" />
                <div className={`w-1/2 flex items-center ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                    {index % 2 === 0 && (
                        <Badge variant="outline" className="text-lg font-bold text-primary border-primary z-10">
                            {event.year}
                        </Badge>
                    )}
                </div>
            </div>

             <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-start">
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                     {index % 2 === 0 && (
                        <Card className="shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{event.description}</p>
                            </CardContent>
                        </Card>
                     )}
                </div>
                <div className="w-auto" />
                 <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                     {index % 2 !== 0 && (
                        <Card className="shadow-lg hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <CardTitle className="font-headline text-xl text-primary">{event.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{event.description}</p>
                            </CardContent>
                        </Card>
                     )}
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
