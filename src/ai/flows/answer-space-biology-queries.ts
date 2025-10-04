'use server';

/**
 * @fileOverview This flow enables users to ask natural language questions about space biology research and receive summarized responses.
 *
 * - answerSpaceBiologyQueries - A function that answers questions about space biology research.
 * - AnswerSpaceBiologyQueriesInput - The input type for the answerSpaceBiologyQueries function.
 * - AnswerSpaceBiologyQueriesOutput - The return type for the answerSpaceBiologyQueries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerSpaceBiologyQueriesInputSchema = z.object({
  query: z.string().describe('The user query about space biology research.'),
  relevantStudies: z.string().describe('Relevant studies to base answer on'),
});
export type AnswerSpaceBiologyQueriesInput = z.infer<
  typeof AnswerSpaceBiologyQueriesInputSchema
>;

const AnswerSpaceBiologyQueriesOutputSchema = z.object({
  answer: z.string().describe('The summarized response to the user query.'),
});
export type AnswerSpaceBiologyQueriesOutput = z.infer<
  typeof AnswerSpaceBiologyQueriesOutputSchema
>;

export async function answerSpaceBiologyQueries(
  input: AnswerSpaceBiologyQueriesInput
): Promise<AnswerSpaceBiologyQueriesOutput> {
  return answerSpaceBiologyQueriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerSpaceBiologyQueriesPrompt',
  input: {schema: AnswerSpaceBiologyQueriesInputSchema},
  output: {schema: AnswerSpaceBiologyQueriesOutputSchema},
  prompt: `You are BioAI, an expert NASA Space Biology research assistant. You summarize and explain biological experiments conducted in space using the Firestore dataset.

You have access to the following studies: {{{relevantStudies}}}

Answer the following question using the provided studies: {{{query}}}.

You must provide scientifically accurate summaries, answer user questions in simple language, and cite publication titles when possible. Keep responses factual, concise, and relevant to space biology.`,
});

const answerSpaceBiologyQueriesFlow = ai.defineFlow(
  {
    name: 'answerSpaceBiologyQueriesFlow',
    inputSchema: AnswerSpaceBiologyQueriesInputSchema,
    outputSchema: AnswerSpaceBiologyQueriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
