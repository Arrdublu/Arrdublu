import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Admin Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome, Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This is the admin dashboard. Future management features for services, orders, and users will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
