'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Home,
  MessageSquare,
  Search,
  Users,
  BrainCircuit,
  BarChart2,
  FileText
} from 'lucide-react';
import { AppLogo } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/chat', label: 'Chat', icon: MessageSquare },
  { href: '/explorer', label: 'Browse', icon: Search },
  { href: '/graph', label: 'Knowledge Graph', icon: BrainCircuit },
  { href: '/stats', label: 'Stats', icon: BarChart2 },
  { href: '/about', label: 'About', icon: Users },
];

export function NavContent() {
    const pathname = usePathname();
    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-16 items-center border-b px-4 lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                <AppLogo className="h-6 w-6 text-primary" />
                <span className="">SpaceBio Explorer</span>
                </Link>
            </div>
            <div className="flex-1 py-2">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
            </div>
            <div className="mt-auto p-4 border-t">
                <div className="grid gap-2">
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-muted-foreground transition-all hover:text-primary">
                        <FileText className="h-3 w-3" />
                        Terms of Service
                    </Link>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-muted-foreground transition-all hover:text-primary">
                        <FileText className="h-3 w-3" />
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}
