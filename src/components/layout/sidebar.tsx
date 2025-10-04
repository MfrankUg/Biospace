'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Home,
  MessageSquare,
  Search,
  BarChart2,
  Menu,
  AppWindow,
  Users,
} from 'lucide-react';
import { AppLogo } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/chat', label: 'Chat', icon: MessageSquare },
  { href: '/explorer', label: 'Browse', icon: Search },
  { href: '/about', label: 'About', icon: Users },
];

function NavContent() {
    const pathname = usePathname();
    return (
        <>
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4 px-4">
              <AppLogo className="h-6 w-6 text-primary" />
              <span className="">BioSpace Explorer</span>
            </Link>
            <nav className="grid items-start px-2 text-sm font-medium">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                    pathname === href && 'bg-muted text-primary'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </nav>
        </>
    )
}


export function Sidebar() {
  return (
    <>
      <div className="hidden border-r bg-background md:block md:w-64">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-16 items-center border-b px-4 lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <AppLogo className="h-6 w-6 text-primary" />
              <span className="">BioSpace Explorer</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const pathname = usePathname();
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                      pathname === href && 'bg-muted text-primary'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="md:hidden sticky top-0 z-50 p-2">
         <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <NavContent />
            </SheetContent>
          </Sheet>
      </div>
    </>
  );
}
