import {Sheet, SheetContent, SheetTrigger, SheetTitle} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {Menu, Search} from 'lucide-react';
import {Input} from '../ui/input';
import {NavContent} from './sidebar';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Link from 'next/link';
import { AppLogo } from '../icons';

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 md:px-6">
       <Link href="/" className="flex items-center gap-2 font-semibold mr-4">
          <AppLogo className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline-block">SpaceBio Explorer</span>
      </Link>
      
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
        <form className="flex-1 sm:flex-initial max-w-xs">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search publications..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
         <Sheet>
            <SheetTrigger asChild>
            <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
            <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <NavContent />
            </SheetContent>
      </Sheet>
      </div>
    </header>
  );
}
