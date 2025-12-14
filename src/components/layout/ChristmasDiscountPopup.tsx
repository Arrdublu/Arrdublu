'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

export function ChristmasDiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenChristmasPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenChristmasPopup', 'true');
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('XMAS2025');
    toast({
      title: 'Code Copied!',
      description: 'The discount code XMAS2025 has been copied to your clipboard.',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="relative h-48 w-full">
            <Image 
                src="https://firebasestorage.googleapis.com/v0/b/arrdublu-d1c06.firebasestorage.app/o/IMG_4004.jpg?alt=media&token=c97ab1f0-f49f-4839-804c-78dc9f874359"
                alt="Christmas gift"
                fill
                className="object-cover"
                data-ai-hint="christmas gift present"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
        <DialogHeader className="p-6">
          <DialogTitle className="font-headline text-2xl text-primary">Holiday Savings!</DialogTitle>
          <DialogDescription className="pt-2">
            Get in the festive spirit with a special discount on us. Use the code below to get 
            <span className="font-bold text-primary"> 15% OFF</span> your next order.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <pre className="py-2 px-3 text-sm font-mono bg-muted rounded-md text-center">XMAS2025</pre>
            </div>
            <Button onClick={handleCopyCode} className="px-3">
              Copy Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
