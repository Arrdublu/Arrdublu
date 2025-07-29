
'use client';
import { useEffect, useState, Suspense } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import type { Order, OrderItem } from '@/lib/types';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

function OrdersPageContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(!!sessionId);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!firestore) {
            setError('Firebase is not initialized.');
            setLoading(false);
            return;
        }

        setLoading(true);
        const ordersRef = collection(firestore, 'orders');
        const q = query(ordersRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const fetchedOrders: Order[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (!data?.createdAt || !data?.totalAmount || !data?.status || !data?.items) {
            console.warn(`Incomplete order data for ID: ${doc.id}`);
            return;
          }
          const validStatuses = ['paid', 'pending', 'cancelled'] as const;
          const status = validStatuses.includes(data.status) ? data.status : 'pending';

          fetchedOrders.push({
            id: doc.id,
            date: data.createdAt.toDate
              ? format(data.createdAt.toDate(), 'MMMM d, yyyy')
              : 'Date not available',
            total: Number(data.totalAmount) || 0,
            status,
            items: (data.items || []).map((item: any) => ({
              itemId: item.itemId,
              name: item.name || 'Unknown Item',
              quantity: Number(item.quantity) || 1,
              price: Number(item.price) || 0,
            })) as OrderItem[],
          });
        });
        setOrders(fetchedOrders);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load your orders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="mt-2 text-lg text-muted-foreground">Loading your orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg text-destructive">{error}</p>
        <Button asChild className="mt-4">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {showSuccess && (
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardHeader className="flex flex-row items-center gap-4">
            <div>
              <CardTitle className="text-green-800">Payment Successful!</CardTitle>
              <CardDescription className="text-green-700">
                Thank you for your order. A confirmation email has been sent to you.
              </CardDescription>
            </div>
            <Button
              onClick={() => setShowSuccess(false)}
              className="ml-auto text-sm"
              aria-label="Dismiss success message"
            >
              ✕
            </Button>
          </CardHeader>
        </Card>
      )}
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Your Orders</h1>
      {orders.length === 0 ? (
        <Card className="text-center py-20">
          <CardContent className="flex flex-col items-center gap-4 pt-6">
            <h2 className="text-2xl font-semibold">You haven't placed any orders yet.</h2>
            <p className="text-muted-foreground">When you do, your orders will appear here.</p>
            <Button asChild className="mt-4">
              <Link href="/">Continue Browsing</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="bg-muted/50 flex flex-row justify-between items-center py-4 px-6">
                <div>
                  <p className="font-semibold">Order ID: {order.id}</p>
                  <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                </div>
                <Badge className={`capitalize ${order.status === 'paid' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {order.status}
                </Badge>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="bg-muted/50 py-4 px-6">
                <div className="w-full flex justify-end">
                  <p className="text-lg font-bold">Total: ${order.total.toFixed(2)}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading orders...</div>}>
      <OrdersPageContent />
    </Suspense>
  );
}
