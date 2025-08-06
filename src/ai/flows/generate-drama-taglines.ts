// src/ai/flows/generate-drama-taglines.ts
'use server';
/**
 * @fileOverview Generates short, catchy taglines for dramas based on their summaries.
 *
 * - generateDramaTaglines - A function that generates drama taglines.
 * - GenerateDramaTaglinesInput - The input type for the generateDramaTaglines function.
 * - GenerateDramaTaglinesOutput - The return type for the generateDramaTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDramaTaglinesInputSchema = z.object({
  dramaSummary: z.string().describe('The summary of the drama.'),
});
export type GenerateDramaTaglinesInput = z.infer<typeof GenerateDramaTaglinesInputSchema>;

const GenerateDramaTaglinesOutputSchema = z.object({
  tagline: z.string().describe('A short, catchy tagline for the drama.'),
});
export type GenerateDramaTaglinesOutput = z.infer<typeof GenerateDramaTaglinesOutputSchema>;

export async function generateDramaTaglines(input: GenerateDramaTaglinesInput): Promise<GenerateDramaTaglinesOutput> {
  return generateDramaTaglinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDramaTaglinesPrompt',
  input: {schema: GenerateDramaTaglinesInputSchema},
  output: {schema: GenerateDramaTaglinesOutputSchema},
  prompt: `You are a creative marketing expert specializing in generating taglines for dramas.

  Generate a short, catchy tagline (3-4 words) that captures the essence of the drama.

  Drama Summary: {{{dramaSummary}}}`,
});

const generateDramaTaglinesFlow = ai.defineFlow(
  {
    name: 'generateDramaTaglinesFlow',
    inputSchema: GenerateDramaTaglinesInputSchema,
    outputSchema: GenerateDramaTaglinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
