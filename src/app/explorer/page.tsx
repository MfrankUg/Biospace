import { publications } from '@/lib/data';
import { ExplorerView } from '@/components/explorer/explorer-view';

export default function ExplorerPage() {
  const organisms = [
    ...new Set(publications.map((p) => p.organism).filter((o) => o !== 'N/A')),
  ];
  const topics = [
    ...new Set(publications.map((p) => p.topic).filter((t) => t !== 'N/A')),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Research Explorer</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Search and filter through NASA's space biology publications.
        </p>
      </div>
      <ExplorerView
        publications={publications}
        organisms={organisms}
        topics={topics}
      />
    </div>
  );
}
