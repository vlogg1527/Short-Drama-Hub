'use server';

import { generateDramaTaglines } from '@/ai/flows/generate-drama-taglines';
import { z } from 'zod';

const formSchema = z.object({
  dramaSummary: z.string(),
});

export async function generateTaglineAction(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Invalid input.');
  }
  
  try {
    const result = await generateDramaTaglines({
      dramaSummary: validatedFields.data.dramaSummary,
    });
    return result;
  } catch (error) {
    console.error('Error generating tagline with Genkit:', error);
    throw new Error('Failed to communicate with the AI service.');
  }
}
