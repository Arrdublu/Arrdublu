
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Welcome, Admin!
          </h3>
          <p className="text-sm text-muted-foreground">
            You can manage your site&apos;s content and settings here.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/admin/discounts">Manage Discounts</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
