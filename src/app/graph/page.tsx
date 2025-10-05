import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function GraphPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
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

      <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/10">
        <CardHeader>
          <CardTitle>Interactive Network</CardTitle>
          <CardDescription>
            Click and drag nodes to explore the data relationships.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full rounded-lg bg-background flex items-center justify-center p-8 border border-dashed border-primary/20">
             <Alert className="max-w-md bg-background/80">
              <Info className="h-4 w-4" />
              <AlertTitle>Feature Under Development</AlertTitle>
              <AlertDescription>
                The interactive Knowledge Graph is coming soon. Stay tuned for a
                new way to visualize connections in space biology research!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}