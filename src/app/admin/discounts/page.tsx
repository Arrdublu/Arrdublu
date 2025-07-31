
import { DiscountForm } from '@/components/admin/DiscountForm';
import { DiscountsTable } from '@/components/admin/DiscountsTable';
import { getDiscounts } from '@/lib/discount-actions';

export default async function AdminDiscountsPage() {
  const discounts = await getDiscounts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-headline font-bold text-primary">
          Manage Discounts
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <DiscountForm />
        </div>
        <div className="md:col-span-2">
          <DiscountsTable discounts={discounts} />
        </div>
      </div>
    </div>
  );
}
