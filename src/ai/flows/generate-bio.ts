// src/ai/flows/generate-bio.ts
'use server';
/**
 * @fileOverview A flow for generating a tailored bio based on user inputs.
 *
 * - generateBio - A function that handles the bio generation process.
 * - GenerateBioInput - The input type for the generateBio function.
 * - GenerateBioOutput - The return type for the generateBio function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateBioInputSchema = z.object({
  desiredRoles: z.string().describe('The desired roles for the user.'),
  experience: z.string().describe('The experience of the user.'),
  skills: z.string().describe('The skills the user wants to highlight.'),
});
export type GenerateBioInput = z.infer<typeof GenerateBioInputSchema>;

const GenerateBioOutputSchema = z.object({
  bio: z.string().describe('The generated bio for the user.'),
});
export type GenerateBioOutput = z.infer<typeof GenerateBioOutputSchema>;

export async function generateBio(input: GenerateBioInput): Promise<GenerateBioOutput> {
  return generateBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBioPrompt',
  input: {
    schema: z.object({
      desiredRoles: z.string().describe('The desired roles for the user.'),
      experience: z.string().describe('The experience of the user.'),
      skills: z.string().describe('The skills the user wants to highlight.'),
    }),
  },
  output: {
    schema: z.object({
      bio: z.string().describe('The generated bio for the user.'),
    }),
  },
  prompt: `You are a professional bio writer. You will generate a tailored bio for the user based on the roles they want, their experience, and the skills they want to highlight. Make sure to highlight the most relevant information.

Desired Roles: {{{desiredRoles}}}
Experience: {{{experience}}}
Skills: {{{skills}}}

Bio:`,
});

const generateBioFlow = ai.defineFlow<
  typeof GenerateBioInputSchema,
  typeof GenerateBioOutputSchema
>({
  name: 'generateBioFlow',
  inputSchema: GenerateBioInputSchema,
  outputSchema: GenerateBioOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
