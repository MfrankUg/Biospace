import { config } from 'dotenv';
config();

import '@/ai/flows/extract-publication-keywords.ts';
import '@/ai/flows/answer-space-biology-queries.ts';
import '@/ai/flows/summarize-publications.ts';
import '@/ai/flows/enhance-research-explorer-with-gemini.ts';