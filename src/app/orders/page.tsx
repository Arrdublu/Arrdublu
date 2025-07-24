
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function OrdersPage() {
  const orders = []; // No hardcoded orders

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Your Orders</h1>
      {orders.length === 0 ? (
        <Card className="text-center py-20">
          <CardContent className="flex flex-col items-center gap-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <h2 className="text-2xl font-semibold">You haven't placed any orders yet.</h2>
            <p className="text-muted-foreground">When you do, your orders will appear here.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
         {/* The mapping logic would go here when orders are fetched from a database */}
        </div>
      )}
    </div>
  );
}
