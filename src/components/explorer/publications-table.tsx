
'use client';

import type { Publication } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '../ui/card';

type PublicationsTableProps = {
  publications: Publication[];
};

export function PublicationsTable({ publications }: PublicationsTableProps) {
  if (publications.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p>No publications match your criteria.</p>
        <p className="text-sm">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {publications.map((pub) => (
        <AccordionItem value={pub.id} key={pub.id} asChild>
          <Card>
            <AccordionTrigger className="p-4 hover:no-underline [&[data-state=open]>svg]:text-primary w-full">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-left w-full">
                <div className="col-span-3 md:col-span-2 font-medium">
                  {pub.title}
                </div>
                <div className="hidden md:block">
                  <Badge variant="secondary">{pub.organism}</Badge>
                </div>
                <div className="hidden md:block">
                  <Badge variant="outline">{pub.topic}</Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="p-4 border-t">
                    <div className="flex flex-wrap gap-2 md:hidden mb-4">
                        <Badge variant="secondary">{pub.organism}</Badge>
                        <Badge variant="outline">{pub.topic}</Badge>
                    </div>
                    <h4 className="font-semibold mb-2">Summary</h4>
                    <p className="text-muted-foreground text-sm mb-4">
                    {pub.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <div>
                            <h4 className="font-semibold mb-2">Keywords</h4>
                            <div className="flex flex-wrap gap-2">
                            {pub.keywords.map((kw) => (
                                <Badge key={kw} variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                                {kw}
                                </Badge>
                            ))}
                            </div>
                        </div>
                        <Button asChild variant="ghost" size="sm" className="ml-auto">
                            <a href={pub.link} target="_blank" rel="noopener noreferrer">
                                View Publication
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </AccordionContent>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
