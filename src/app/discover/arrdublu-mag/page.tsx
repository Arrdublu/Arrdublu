
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ArrdubluMagPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Arrdublu Mag</h1>
      <Card>
        <CardHeader>
          <CardTitle>Magazine</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Explore insightful articles, trends, and inspiration from the world of media and design.</p>
        </CardContent>
      </Card>
    </div>
  );
}
