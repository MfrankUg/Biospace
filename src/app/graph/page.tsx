import { KnowledgeGraph } from '@/components/graph/knowledge-graph';
import { publications } from '@/lib/data';
import { BrainCircuit, Info } from 'lucide-react';

export default function GraphPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
          <BrainCircuit className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Knowledge Graph Explorer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Visually navigate the intricate connections between research topics,
          publications, and key findings.
        </p>
      </div>

      <div className="w-full h-[60vh] rounded-lg bg-background p-0 border border-primary/20 shadow-xl shadow-primary/10">
        <KnowledgeGraph publications={publications} />
      </div>
       <div className="flex justify-center mt-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span>Publication</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span>Topic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-400" />
              <span>Organism</span>
            </div>
          </div>
        </div>
    </div>
  );
}
