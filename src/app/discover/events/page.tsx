
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Events</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming & Past Events</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Join us for workshops, webinars, and other community events.</p>
        </CardContent>
      </Card>
    </div>
  );
}
