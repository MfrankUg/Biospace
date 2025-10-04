import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Rocket, Database, Cpu } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">About BioSpace Explorer</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
          Bridging data science and space biology to reveal how life adapts beyond Earth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="text-primary" />
              The Project
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              BioSpace Explorer is a space biology knowledge engine created for the NASA Space Apps Challenge. Our goal is to make NASA’s vast bioscience research data more accessible and understandable to scientists, students, and space enthusiasts alike. By leveraging AI, we transform complex publications into digestible summaries, interactive charts, and conversational insights.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              The Team: Matrix Bubbies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are a passionate team of developers, designers, and space lovers dedicated to promoting open science. This project represents our commitment to using technology to solve challenges and make scientific knowledge universally accessible.
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="text-primary" />
              The Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This project is powered by the NASA Space Biology Program's publication dataset, containing hundreds of research papers funded by the agency. The data provides a window into decades of biological experiments conducted in space, from studies on the ISS to missions like Bion-M1.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="text-primary" />
              The Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              BioSpace Explorer is built with a modern tech stack including Next.js, Tailwind CSS, and Firebase. The core AI capabilities for summarization, tagging, and question-answering are powered by Google's Gemini API, integrated via Firebase AI Studio and Genkit.
            </p>
          </CardContent>
        </Card>
      </div>

       <div className="mt-16 text-center">
        <blockquote className="text-xl italic text-foreground/80 max-w-2xl mx-auto">
        “To confine our attention to terrestrial matters would be to limit the human spirit.”
        </blockquote>
        <cite className="block mt-4 text-md text-muted-foreground">— Stephen Hawking</cite>
      </div>
    </div>
  );
}
