import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Rocket, Database, Cpu, Milestone } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative text-center mb-16 p-8 rounded-lg overflow-hidden bg-gradient-to-r from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary drop-shadow-lg">
            About SpaceBio Explorer
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging data science and space biology to reveal how life adapts beyond Earth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="shadow-lg shadow-primary/20 backdrop-blur-sm bg-card/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-primary">
              <Rocket size={24} />
              The Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SpaceBio Explorer is a space biology knowledge engine created for the NASA Space Apps Challenge. Our goal is to make NASA’s vast bioscience research data more accessible and understandable to scientists, students, and space enthusiasts alike. By leveraging AI, we transform complex publications into digestible summaries, interactive charts, and conversational insights.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg shadow-secondary/20 backdrop-blur-sm bg-card/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-secondary">
              <Users size={24} />
              The Team: Matrix Bubbies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are a passionate team of developers, designers, and space lovers dedicated to promoting open science. This project represents our commitment to using technology to solve challenges and make scientific knowledge universally accessible.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg shadow-primary/20 backdrop-blur-sm bg-card/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-primary">
              <Database size={24} />
              The Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This project is powered by the NASA Space Biology Program's publication dataset, containing hundreds of research papers. The data provides a window into decades of biological experiments conducted in space, from studies on the ISS to missions like Bion-M1.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg shadow-secondary/20 backdrop-blur-sm bg-card/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-secondary">
              <Cpu size={24} />
              The Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SpaceBio Explorer is built with a modern tech stack including Next.js, Tailwind CSS, and Firebase. The core AI capabilities for summarization, tagging, and question-answering are powered by Google's Gemini API, integrated via Firebase AI Studio and Genkit.
            </p>
          </CardContent>
        </Card>
      </div>

       <div className="text-center">
        <blockquote className="text-xl italic text-foreground/80 max-w-2xl mx-auto">
        “To confine our attention to terrestrial matters would be to limit the human spirit.”
        </blockquote>
        <cite className="block mt-4 text-md text-muted-foreground">— Stephen Hawking</cite>
      </div>
    </div>
  );
}