
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OurStoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Our Story</h1>
      <Card>
        <CardHeader>
          <CardTitle>The Arrdublu Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Learn more about our mission, vision, and the team behind Arrdublu.</p>
        </CardContent>
      </Card>
    </div>
  );
}
