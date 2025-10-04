'use server';

/**
 * @fileOverview This flow extracts keywords (organism, mission, research topic) from a research publication using Gemini AI.
 *
 * - extractPublicationKeywords - A function that extracts keywords from a publication.
 * - ExtractPublicationKeywordsInput - The input type for the extractPublicationKeywords function.
 * - ExtractPublicationKeywordsOutput - The return type for the extractPublicationKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractPublicationKeywordsInputSchema = z.object({
  title: z.string().describe('The title of the research publication.'),
  summary: z.string().describe('A summary of the research publication.'),
});
export type ExtractPublicationKeywordsInput = z.infer<typeof ExtractPublicationKeywordsInputSchema>;

const ExtractPublicationKeywordsOutputSchema = z.object({
  organism: z.string().describe('The organism studied in the publication (e.g., mice, plants, human).'),
  mission: z.string().describe('The mission associated with the publication (e.g., ISS, Bion-M1).'),
  topic: z.string().describe('The research topic of the publication (e.g., bone loss, microgravity, radiation).'),
  keywords: z.array(z.string()).describe('List of keywords extracted from the publication.'),
});
export type ExtractPublicationKeywordsOutput = z.infer<typeof ExtractPublicationKeywordsOutputSchema>;

export async function extractPublicationKeywords(input: ExtractPublicationKeywordsInput): Promise<ExtractPublicationKeywordsOutput> {
  return extractPublicationKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractPublicationKeywordsPrompt',
  input: {schema: ExtractPublicationKeywordsInputSchema},
  output: {schema: ExtractPublicationKeywordsOutputSchema},
  prompt: `You are an expert in space biology research.
  Your task is to extract relevant keywords from a research publication based on its title and summary.
  Identify the organism studied, the mission associated with the research, and the primary research topic.
  Also, extract a list of keywords.

  Title: {{{title}}}
  Summary: {{{summary}}}

  Please provide the organism, mission, topic, and keywords in the output schema format. If the organism, mission or topic cannot be derived from the text, mark it as N/A.
  `,
});

const extractPublicationKeywordsFlow = ai.defineFlow(
  {
    name: 'extractPublicationKeywordsFlow',
    inputSchema: ExtractPublicationKeywordsInputSchema,
    outputSchema: ExtractPublicationKeywordsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
