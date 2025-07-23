
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsRigAgentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Terms & Conditions for ARRDUBLU™ Rig/agent</h1>
      <Card>
        <CardHeader>
          <CardTitle>Rig/Agent Usage Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>
            This section outlines the terms and conditions specific to the use of the ARRDUBLU™ Rig/agent (the “Rig/Agent”).
          </p>
          <p>
            [Placeholder for Rig/Agent terms and conditions. This section would include details about data usage, licensing, restrictions, and liability specific to this proprietary tool or service.]
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
