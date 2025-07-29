// src/components/layout/Footer.tsx

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

// Store social media links and developer info in constants for easier updates
const SOCIAL_MEDIA_LINKS = {
  instagram: 'https://www.instagram.com/arrdublu',
  facebook: 'https://www.facebook.com/arrdublu',
  twitter: 'https://twitter.com/arrdublu',
  linkedin: 'https://www.linkedin.com/company/arrdublu',
};

const DEVELOPER_INFO = {
  name: 'Ramone C. Wynter',
  linkedin: 'https://www.linkedin.com/in/ramone-wynter-a783053b/',
};

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-10 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-foreground/80">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground">Legal</h3>
            <ul>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/privacy">Privacy Policy & Opt-Out</Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/terms-arrdublu-rig-agent">
                  Terms & Conditions for ARRDUBLU™ Rig/agent (the “Rig/Agent”)
                </Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/modern-slavery-act">Modern Slavery Act Statement</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground">Support</h3>
            <ul>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/support">Support</Link>
              </li>
              <li className="mb-2 hover:text-primary transition-colors">
                <Link href="/careers">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground">Follow Us [@arrdublu]</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_MEDIA_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href={SOCIAL_MEDIA_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-foreground/60">
          <p>© {new Date().getFullYear()} Arrdublu. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              {DEVELOPER_INFO.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer as SiteFooter };