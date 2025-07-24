
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TimelessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Timeless</h1>
      <Card>
        <CardHeader>
          <CardTitle>Iconic Designs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">A curated collection of our most enduring and impactful projects.</p>
        </CardContent>
      </Card>
    </div>
  );
}
