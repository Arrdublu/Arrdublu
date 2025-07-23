
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Terms & Conditions</h1>
      <Card>
        <CardHeader>
          <CardTitle>General Terms</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
           <h2>1. Introduction</h2>
            <p>Welcome to Arrdublu. These are our terms and conditions for use of the services, which you may access in several ways, including but not limited to the World Wide Web via arrdublu.us.</p>
            
            <h2>2. Services</h2>
            <p>Our services are provided on an "as is" and "as available" basis. We do not guarantee that the services will be error-free or uninterrupted. We reserve the right to modify, suspend or discontinue any part of the services without notice.</p>
            
            <h2>3. Payment</h2>
            <p>All services must be paid for in advance. Prices are subject to change without notice. We are not responsible for any fees charged by your bank or credit card company.</p>

            <h2>4. Refund Policy</h2>
            <p>Due to the nature of our digital services, we do not offer refunds once work has commenced. Client satisfaction is our priority, and we will make reasonable efforts to resolve any issues.</p>
        </CardContent>
      </Card>
    </div>
  );
}
