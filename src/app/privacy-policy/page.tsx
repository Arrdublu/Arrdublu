
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
            This Privacy Policy describes how Arrdublu (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information in connection with your use of our website and services. By using our services, you agree to the collection and use of information in accordance with this policy.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us directly, such as your name, email address, and any other information you choose to provide when you fill out a contact form or purchase our services. We also collect certain information automatically when you visit our site, such as your IP address, browser type, operating system, referring/exit pages, and date/time stamps.
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
            <li>Monitor the usage of our service and for fraud prevention</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</p>

          <h2>Data Security</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>

          <h2>Opt-Out</h2>
          <p>
            You may opt out of receiving promotional communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us directly.
          </p>
          
          <h2>Governing Law</h2>
            <p>This Privacy Policy and any disputes related to it shall be governed by and construed in accordance with the laws of the State of Florida, United States, and the country of Jamaica, without regard to their conflict of law provisions.</p>


          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us by visiting the <a href="/support">support page</a> on our website.
          </p>

        </CardContent>
      </Card>
    </div>
  );
}
