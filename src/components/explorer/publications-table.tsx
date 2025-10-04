'use client';

import type { Publication } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

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
    <div className="border rounded-lg">
      <Accordion type="single" collapsible className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">Title</TableHead>
              <TableHead>Organism</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead className="text-right w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {publications.map((pub) => (
              <AccordionItem value={pub.id} asChild key={pub.id}>
                <>
                  <TableRow className="hover:bg-muted/20 data-[state=open]:bg-muted/50">
                    <TableCell className="font-medium align-top py-4">
                      {pub.title}
                    </TableCell>
                    <TableCell className="align-top py-4">
                      <Badge variant="secondary">{pub.organism}</Badge>
                    </TableCell>
                    <TableCell className="align-top py-4">
                      <Badge variant="outline">{pub.topic}</Badge>
                    </TableCell>
                    <TableCell className="text-right align-top py-2">
                      <div className="flex items-center justify-end gap-2">
                        <Button asChild variant="ghost" size="sm">
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            View
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                        <AccordionTrigger className="p-2 hover:no-underline [&[data-state=open]>svg]:text-primary" />
                      </div>
                    </TableCell>
                  </TableRow>
                  <AccordionContent asChild>
                    <TableRow>
                      <TableCell colSpan={4} className="p-0">
                        <div className="p-4 bg-muted/50">
                          <h4 className="font-semibold mb-2">Summary</h4>
                          <p className="text-muted-foreground text-sm mb-4">
                            {pub.summary}
                          </p>
                          <h4 className="font-semibold mb-2">Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {pub.keywords.map((kw) => (
                              <Badge key={kw} variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                                {kw}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  </AccordionContent>
                </>
              </AccordionItem>
            ))}
          </TableBody>
        </Table>
      </Accordion>
    </div>
  );
}
