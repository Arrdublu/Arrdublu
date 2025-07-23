
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Privacy Policy & Opt-Out</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <p>
            This Privacy Policy describes how Arrdublu (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information in connection with your use of our website and services.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us directly, such as your name, email address, and any other information you choose to provide when you fill out a contact form or purchase our services. We also collect certain information automatically when you visit our site, such as your IP address, browser type, and operating system.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Process your transactions and manage your orders</li>
            <li>Communicate with you, including for customer service and support</li>
            <li>Improve and personalize your experience on our website</li>
            <li>Send you marketing communications, if you have opted in</li>
          </ul>

          <h2>Opt-Out</h2>
          <p>
            You may opt out of receiving promotional communications from us by following the unsubscribe link or instructions provided in any email we send.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
