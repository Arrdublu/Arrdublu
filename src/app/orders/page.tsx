import { orders } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function OrdersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Your Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader className="flex flex-row justify-between items-start">
              <div>
                <CardTitle className="font-headline">{order.id}</CardTitle>
                <CardDescription>Date: {new Date(order.date).toLocaleDateString()}</CardDescription>
              </div>
              <div className="text-right">
                <Badge 
                  variant={order.status === 'Completed' ? 'default' : 'secondary'}
                  className={order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}
                >
                  {order.status}
                </Badge>
                <p className="font-semibold text-lg mt-1">${order.total.toFixed(2)}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-4">
                           <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                                <Image src={item.service.image} alt={item.service.name} fill className="object-cover" sizes="64px" />
                           </div>
                           <div>
                            <p className="font-medium">{item.service.name}</p>
                           </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">${item.service.price.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
