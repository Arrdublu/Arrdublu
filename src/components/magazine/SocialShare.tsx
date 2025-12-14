
'use client';

import { Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const fullUrl = `https://arrdublu.us${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    instagram: 'https://www.instagram.com/arrdublu',
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-muted-foreground">Share:</span>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4" />
          <span className="sr-only">Share on Instagram</span>
        </a>
      </Button>
    </div>
  );
}
