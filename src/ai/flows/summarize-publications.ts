'use server';

/**
 * @fileOverview A flow for summarizing research publications using Gemini AI.
 *
 * - summarizePublication - A function that takes a publication title and link, and returns a summary.
 * - SummarizePublicationInput - The input type for the summarizePublication function.
 * - SummarizePublicationOutput - The return type for the summarizePublication function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePublicationInputSchema = z.object({
  title: z.string().describe('The title of the research publication.'),
  link: z.string().describe('The URL link to the research publication.'),
});
export type SummarizePublicationInput = z.infer<typeof SummarizePublicationInputSchema>;

const SummarizePublicationOutputSchema = z.object({
  summary: z.string().describe('A 2-3 sentence summary of the research publication.'),
  keywords: z.array(z.string()).describe('Keywords related to the publication (organism, mission, research topic).'),
  organism: z.string().describe('The organism studied in the publication.'),
  topic: z.string().describe('The main research topic of the publication.'),
});
export type SummarizePublicationOutput = z.infer<typeof SummarizePublicationOutputSchema>;

export async function summarizePublication(input: SummarizePublicationInput): Promise<SummarizePublicationOutput> {
  return summarizePublicationFlow(input);
}

const summarizePublicationPrompt = ai.definePrompt({
  name: 'summarizePublicationPrompt',
  input: {schema: SummarizePublicationInputSchema},
  output: {schema: SummarizePublicationOutputSchema},
  prompt: `You are an expert NASA space biology research assistant. Your goal is to summarize a research publication and extract relevant keywords.

  Title: {{{title}}}
  Link: {{{link}}}

  Provide a concise 2-3 sentence summary of the publication. Also, extract keywords related to the publication, including the organism studied, the mission (if applicable), and the research topic. Return the summary, keywords, organism, and topic in the JSON format. Focus on extracting information related to space biology.
  Follow the schema instructions strictly. Do not include any introductory or concluding remarks. Just return the JSON. If organism or topic is not present in the text, mark it as "unknown".`,
});

const summarizePublicationFlow = ai.defineFlow(
  {
    name: 'summarizePublicationFlow',
    inputSchema: SummarizePublicationInputSchema,
    outputSchema: SummarizePublicationOutputSchema,
  },
  async input => {
    const {output} = await summarizePublicationPrompt(input);
    return output!;
  }
);
