'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateTaglineAction } from './actions';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  dramaSummary: z.string().min(20, {
    message: 'Summary must be at least 20 characters.',
  }).max(1000, {
    message: 'Summary must not be longer than 1000 characters.',
  }),
});

export function GeneratorForm() {
  const [tagline, setTagline] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dramaSummary: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTagline(null);
    try {
      const result = await generateTaglineAction(values);
      if (result.tagline) {
        setTagline(result.tagline);
      } else {
        throw new Error('Failed to generate tagline. The result was empty.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "An error occurred while generating the tagline. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="dramaSummary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Drama Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A star-crossed love story between a modern-day CEO and a woman who traveled back in time from a historical dynasty..."
                        className="min-h-[150px] text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Tagline
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center mt-8">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-accent" />
            <p className="text-muted-foreground mt-2">Generating your creative tagline...</p>
        </div>
      )}

      {tagline && (
        <Card className="mt-8 border-accent bg-secondary">
          <CardHeader>
            <CardTitle className="text-center font-headline text-accent text-2xl">
                Generated Tagline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-4xl font-bold text-primary-foreground">
              &ldquo;{tagline}&rdquo;
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
}
