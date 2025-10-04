'use server';

import { enhanceResearchExplorerWithGemini } from '@/ai/flows/enhance-research-explorer-with-gemini';
import { answerSpaceBiologyQueries } from '@/ai/flows/answer-space-biology-queries';
import { publications } from '@/lib/data';

type SearchResult = {
  title: string;
  link: string;
  summary: string;
  keywords: string[];
  organism: string;
  topic: string;
}

export async function getEnhancedSummary(
  searchTerm: string,
  searchResults: SearchResult[]
) {
  try {
    const response = await enhanceResearchExplorerWithGemini({
      searchTerm,
      searchResults,
    });
    return response;
  } catch (error) {
    console.error('Error in getEnhancedSummary:', error);
    throw new Error('Failed to generate enhanced summary.');
  }
}

export async function getBioAIChatResponse(query: string) {
    try {
        // In a real application, this would be a more sophisticated semantic search
        // against a vector database (like Firestore Vector Search).
        // For this mock, we perform a simple keyword search on our local data.
        const lowerCaseQuery = query.toLowerCase();
        const relevantStudies = publications
            .filter(pub => 
                pub.title.toLowerCase().includes(lowerCaseQuery) ||
                pub.summary.toLowerCase().includes(lowerCaseQuery) ||
                pub.keywords.some(k => k.toLowerCase().includes(lowerCaseQuery))
            )
            .slice(0, 5); // Limit to 5 most relevant studies for the context

        if (relevantStudies.length === 0) {
            return { answer: "I couldn't find any specific studies related to your query. Please try rephrasing or asking something else about space biology." };
        }
        
        const relevantStudiesText = relevantStudies.map(pub => 
            `Title: ${pub.title}\nSummary: ${pub.summary}`
        ).join('\n\n---\n\n');

        const response = await answerSpaceBiologyQueries({
            query,
            relevantStudies: relevantStudiesText
        });
        return response;

    } catch (error) {
        console.error('Error in getBioAIChatResponse:', error);
        throw new Error("Failed to get response from BioAI.");
    }
}
