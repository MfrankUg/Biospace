import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { publications } from '@/lib/data';
import { BookOpen, FlaskConical, Dna } from 'lucide-react';
import { StatCard } from '@/components/dashboard/stat-card';
import { OrganismChart } from '@/components/dashboard/organism-chart';
import { TopicChart } from '@/components/dashboard/topic-chart';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

export default function Home() {
  const totalStudies = publications.length;

  const organismCounts = publications.reduce((acc, pub) => {
    const organism = pub.organism === 'N/A' ? 'Unspecified' : pub.organism;
    acc[organism] = (acc[organism] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalOrganisms = Object.keys(organismCounts).length;

  const organismData = Object.entries(organismCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const topicCounts = publications.reduce((acc, pub) => {
    const topic = pub.topic === 'N/A' ? 'Unspecified' : pub.topic;
    acc[topic] = (acc[topic] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const totalTopics = Object.keys(topicCounts).length;

  const topicData = Object.entries(topicCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground drop-shadow-lg">
           Unlock Decades of Space Biology Research with AI
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore, Summarize, and Visualize NASA’s Space Biology Research
          </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard
          title="Total Studies"
          value={totalStudies}
          icon={<BookOpen className="h-8 w-8 text-primary" />}
        />
        <StatCard
          title="Organisms Studied"
          value={totalOrganisms}
          icon={<Dna className="h-8 w-8 text-primary" />}
        />
        <StatCard
          title="Research Topics"
          value={totalTopics}
          icon={<FlaskConical className="h-8 w-8 text-primary" />}
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Studies per Organism</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <OrganismChart data={organismData} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Distribution by Topic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <TopicChart data={topicData} />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
