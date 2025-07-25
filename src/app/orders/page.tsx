'use client';
import { useEffect, useState, Suspense } from 'react';
import { collection, query, where, getDocs, orderBy, DocumentSnapshot } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import type { Order } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function OrdersPageContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // This is a simplified way to fetch orders. 
  // In a real app, you would fetch orders for the logged-in user.
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const ordersRef = collection(firestore, 'orders');
        const q = query(ordersRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const fetchedOrders: Order[] = [];
        querySnapshot.forEach((doc: DocumentSnapshot) => {
            const data = doc.data();
            fetchedOrders.push({
                id: doc.id,
                date: data?.createdAt?.toDate() ? format(data.createdAt.toDate(), 'MMMM d, yyyy') : 'Date not available',
                total: data?.totalAmount,
                status: data?.status,
                items: data?.items,
            });
        });
        setOrders(fetchedOrders);
      } catch (err) {
        console.error("Error fetching orders: ", err);
        setError("Failed to load your orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-lg text-muted-foreground">Loading your orders...</p>
        </div>
    );
  }

  if (error) {
     return (
        <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-lg text-destructive">{error}</p>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
        {sessionId && (
            <Card className="mb-8 bg-green-50 border-green-200">
                <CardHeader className="flex flex-row items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                        <CardTitle className="text-green-800">Payment Successful!</CardTitle>
                        <CardDescription className="text-green-700">Thank you for your order. A confirmation email has been sent to you.</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        )}
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Your Orders</h1>
      {orders.length === 0 ? (
        <Card className="text-center py-20">
          <CardContent className="flex flex-col items-center gap-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
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
                       <CardHeader className="bg-muted/50 flex-row justify-between items-center py-4 px-6">
                           <div>
                               <p className="font-semibold">Order ID: {order.id}</p>
                               <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                           </div>
                           <Badge variant={order.status === 'paid' ? 'default' : 'secondary'} className="capitalize">
                               {order.status}
                           </Badge>
                       </CardHeader>
                       <CardContent className="p-6 space-y-4">
                          {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between items-center">
                                  <div>
                                      <p className="font-semibold">{item.name}</p>
                                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                                  </div>
                                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                          ))}
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
       <Suspense fallback={<div>Loading orders...</div>}>
         <OrdersPageContent />
       </Suspense>
     );
   }