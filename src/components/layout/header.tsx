'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Rocket, Search } from 'lucide-react';
import { useState } from 'react';
import { AppLogo } from '@/components/icons';
import { Input } from '../ui/input';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/explorer', label: 'Browse' },
  { href: '/chat', label: 'Chat' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 md:px-6">
       <div className="flex-1">
         {/* For mobile view, this button is part of the sidebar trigger */}
       </div>
        <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search publications..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
        </div>
    </header>
  );
}
