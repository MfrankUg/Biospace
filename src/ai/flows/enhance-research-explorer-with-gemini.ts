'use server';

/**
 * @fileOverview Enhances the Research Explorer with Gemini AI to provide a summary of the search results and the reasoning used to reach the conclusion.
 *
 * - enhanceResearchExplorerWithGemini - A function that enhances research explorer search results with a Gemini-generated summary.
 * - EnhanceResearchExplorerWithGeminiInput - The input type for the enhanceResearchExplorerWithGemini function.
 * - EnhanceResearchExplorerWithGeminiOutput - The return type for the enhanceResearchExplorerWithGemini function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceResearchExplorerWithGeminiInputSchema = z.object({
  searchTerm: z.string().describe('The search term entered by the user.'),
  searchResults: z.array(z.object({
    title: z.string(),
    link: z.string(),
    summary: z.string(),
    keywords: z.array(z.string()),
    organism: z.string(),
    topic: z.string()
  })).describe('The search results from Firestore.'),
});
export type EnhanceResearchExplorerWithGeminiInput = z.infer<typeof EnhanceResearchExplorerWithGeminiInputSchema>;

const EnhanceResearchExplorerWithGeminiOutputSchema = z.object({
  summary: z.string().describe('A summary of the search results and the reasoning used to reach the conclusion.')
});
export type EnhanceResearchExplorerWithGeminiOutput = z.infer<typeof EnhanceResearchExplorerWithGeminiOutputSchema>;

export async function enhanceResearchExplorerWithGemini(input: EnhanceResearchExplorerWithGeminiInput): Promise<EnhanceResearchExplorerWithGeminiOutput> {
  return enhanceResearchExplorerWithGeminiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceResearchExplorerWithGeminiPrompt',
  input: {schema: EnhanceResearchExplorerWithGeminiInputSchema},
  output: {schema: EnhanceResearchExplorerWithGeminiOutputSchema},
  prompt: `You are an expert NASA Space Biology research assistant. Based on the user's search term and the search results from Firestore, provide a summary of the search results and the reasoning used to reach the conclusion.  Cite publication titles when possible. Keep responses factual, concise, and relevant to space biology.

Search Term: {{{searchTerm}}}

Search Results:
{{#each searchResults}}
  Title: {{{title}}}
  Summary: {{{summary}}}
  Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Organism: {{{organism}}}
  Topic: {{{topic}}}
{{/each}}
`
});

const enhanceResearchExplorerWithGeminiFlow = ai.defineFlow(
  {
    name: 'enhanceResearchExplorerWithGeminiFlow',
    inputSchema: EnhanceResearchExplorerWithGeminiInputSchema,
    outputSchema: EnhanceResearchExplorerWithGeminiOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
