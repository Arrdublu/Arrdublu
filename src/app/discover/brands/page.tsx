
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Brands</h1>
      <Card>
        <CardHeader>
          <CardTitle>Partners & Collaborations</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Discover the amazing brands we've had the pleasure to work with.</p>
        </CardContent>
      </Card>
    </div>
  );
}
