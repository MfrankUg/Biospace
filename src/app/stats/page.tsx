import { publications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OrganismChart } from '@/components/dashboard/organism-chart';
import { TopicChart } from '@/components/dashboard/topic-chart';
import { ResearchTimeline } from '@/components/stats/research-timeline';
import { BarChart, Telescope } from 'lucide-react';

export default function StatsPage() {
  const organismCounts = publications.reduce((acc, pub) => {
    const organism = pub.organism === 'N/A' ? 'Unspecified' : pub.organism;
    acc[organism] = (acc[organism] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const organismData = Object.entries(organismCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); // Top 10

  const topicCounts = publications.reduce((acc, pub) => {
    const topic = pub.topic === 'N/A' ? 'Unspecified' : pub.topic;
    acc[topic] = (acc[topic] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topicData = Object.entries(topicCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7); // Top 7 for pie chart visibility


  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.id === '1' ? 2017 : (parseInt(pub.id, 10) > 4 ? (2020 + parseInt(pub.id, 10)) % 4 : 2014 + parseInt(pub.id, 10) % 5) // Use a placeholder for year
    if (year) {
        acc[year] = (acc[year] || 0) + 1;
    }
    return acc;
    }, {} as Record<number, number>);

  const timelineData = Object.entries(publicationsByYear)
    .map(([year, count]) => ({ year: parseInt(year), count }))
    .sort((a, b) => a.year - b.year);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
          <BarChart className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Research Analytics
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Visualizing trends and insights from decades of space biology data.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-8">
        <Card className="shadow-lg shadow-primary/10">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Telescope className="text-primary" />
                    Publication Timeline
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-96 pr-8">
                   <ResearchTimeline data={timelineData} />
                </div>
            </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Card className="shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle>Top Organisms Studied</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <OrganismChart data={organismData} />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle>Top Research Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <TopicChart data={topicData} />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}