
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Discount } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { deleteDiscount } from '@/lib/discount-actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export function DiscountsTable({ discounts }: { discounts: Discount[] }) {
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async (id: string, code: string) => {
    if (!window.confirm(`Are you sure you want to delete the code "${code}"?`)) {
      return;
    }
    try {
      await deleteDiscount(id);
      toast({
        title: 'Success',
        description: `Discount code "${code}" has been deleted.`,
      });
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not delete discount code.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Existing Discounts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Code</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discounts.length > 0 ? (
              discounts.map((discount) => (
                <TableRow key={discount.id}>
                  <TableCell className="font-medium">
                    <Badge variant="outline">{discount.code}</Badge>
                  </TableCell>
                  <TableCell className="capitalize">{discount.type}</TableCell>
                  <TableCell>
                    {discount.type === 'percentage'
                      ? `${discount.value}%`
                      : `$${discount.value.toFixed(2)}`}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(discount.id, discount.code)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No discounts created yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
