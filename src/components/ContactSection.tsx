
'use client';

import React from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {Section} from '@/components/Section';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {useToast} from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, {message: 'Name must be at least 2 characters.'}),
  email: z.string().email({message: 'Please enter a valid email address.'}),
  message: z.string().min(10, {message: 'Message must be at least 10 characters.'}),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection = React.forwardRef<HTMLElement, {}>(({}, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const {toast} = useToast();

  const onSubmit = async (data: ContactFormValues) => {
    // Here, you would typically handle the form submission,
    // such as sending the data to a backend server.
    console.log(data); // For testing purposes
    toast({
      title: 'Thank you!',
      description: 'Your message has been received. We\'ll get back to you soon.',
    });
    reset();
  };

  return (
    <Section ref={ref} id="contact" title="Contact" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 py-20">
        <div className="max-w-md mx-auto bg-secondary rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                type="text"
                id="name"
                {...register('name')}
                className="mt-1 block w-full rounded-md shadow-sm text-foreground"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                type="email"
                id="email"
                {...register('email')}
                className="mt-1 block w-full rounded-md shadow-sm  text-foreground"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                rows={4}
                {...register('message')}
                className="mt-1 block w-full rounded-md shadow-sm  text-foreground"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';

