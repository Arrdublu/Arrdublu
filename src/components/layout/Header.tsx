
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from './Logo';
import { Search } from './Search';
import { ThemeToggle } from './ThemeToggle';
import { Cart } from './Cart';


export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/faq', label: 'FAQ' },
  ];
  
  const discoverItems = [
    { href: '/discover/whats-new', label: "What's New" },
    { href: '/discover/our-story', label: 'Our Story' },
    { href: '/discover/arrdublu-mag', label: 'Arrdublu Mag' },
    { href: '/discover/timeless', label: 'Timeless' },
    { href: '/discover/brands', label: 'Brands' },
    { href: '/discover/events', label: 'Events' },
  ]

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <SheetClose asChild>
      <Link
        href={href}
        className={cn(
          'transition-colors hover:text-foreground/80 block py-2 text-lg',
          pathname === href ? 'text-foreground' : 'text-foreground/60'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {children}
      </Link>
    </SheetClose>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground/80 transition-colors focus:outline-none">
              Discover <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {discoverItems.map((item) => (
                 <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                 </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          
          <div className="hidden md:flex">
             <Cart />
            <ThemeToggle />
          </div>


          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs pr-6">
             <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full p-6">
                <Link href="/" className="mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="pt-2">
                    <h3 className="text-foreground font-semibold mb-2">Discover</h3>
                    {discoverItems.map((item) => (
                       <NavLink key={item.href} href={item.href}>
                         {item.label}
                       </NavLink>
                    ))}
                  </div>
                </nav>
                 <div className="mt-auto flex items-center justify-between">
                    <ThemeToggle />
                    <Cart />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
