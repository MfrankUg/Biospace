
'use client';

import type { Publication } from '@/lib/types';
import { useState, useMemo, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PublicationsTable } from './publications-table';
import { Button } from '@/components/ui/button';
import { getEnhancedSummary } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Bot, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ExplorerViewProps = {
  publications: Publication[];
  organisms: string[];
  topics: string[];
};

export function ExplorerView({ publications, organisms, topics }: ExplorerViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [organismFilter, setOrganismFilter] = useState('all');
  const [topicFilter, setTopicFilter] = useState('all');
  const [aiSummary, setAiSummary] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const searchMatch =
        searchTerm.length < 2 ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.keywords.some((k) =>
          k.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const organismMatch =
        organismFilter === 'all' || pub.organism === organismFilter;
      const topicMatch = topicFilter === 'all' || pub.topic === topicFilter;

      return searchMatch && organismMatch && topicMatch;
    });
  }, [publications, searchTerm, organismFilter, topicFilter]);

  const handleGenerateSummary = async () => {
    startTransition(async () => {
      setAiSummary('');
      if (filteredPublications.length === 0) {
        toast({
          variant: 'destructive',
          title: 'No publications found',
          description: 'Cannot generate summary for an empty list.',
        });
        return;
      }
      try {
        const result = await getEnhancedSummary(
          searchTerm || 'all publications',
          filteredPublications.map(p => ({
            title: p.title,
            link: p.link,
            summary: p.summary,
            keywords: p.keywords,
            organism: p.organism,
            topic: p.topic
          }))
        );
        setAiSummary(result.summary);
      } catch (error) {
        console.error('Error generating AI summary:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to generate AI summary.',
        });
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 border rounded-lg bg-card">
        <Input
          placeholder="Search by title, summary, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:col-span-3"
        />
        <Select value={organismFilter} onValueChange={setOrganismFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Organism" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Organisms</SelectItem>
            {organisms.map((org) => (
              <SelectItem key={org} value={org}>
                {org}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={topicFilter} onValueChange={setTopicFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Topics</SelectItem>
            {topics.map((topic) => (
              <SelectItem key={topic} value={topic}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {(aiSummary || isPending) && (
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Bot /> AI Summary of Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isPending ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating summary with Gemini...</span>
              </div>
            ) : (
              <p className="text-foreground/90 whitespace-pre-wrap">{aiSummary}</p>
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>
              {filteredPublications.length} Publication
              {filteredPublications.length !== 1 ? 's' : ''} Found
            </CardTitle>
          </div>
          <Button onClick={handleGenerateSummary} disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Bot className="mr-2 h-4 w-4" />
            )}
            Generate AI Summary
          </Button>
        </CardHeader>
        <CardContent>
          <PublicationsTable publications={filteredPublications} />
        </CardContent>
      </Card>
    </div>
  );
}
