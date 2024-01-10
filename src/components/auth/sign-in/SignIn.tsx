'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as Shad from '@/components/ui';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Must be a valid email.',
    }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must have at lest 8 characters',
    })
    .max(20, {
      message: "Password can't be more than 20 characters.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignIn() {
  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    console.log(formValues);
  }

  return (
    <Shad.Card className="py-5 px-0 max-w-lg sm:w-full">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-lg">Welcome back builder! 💪</span>
        <Shad.Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-start flex-col space-y-2"
          >
            <Shad.FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormLabel>email</Shad.FormLabel>
                  <Shad.FormControl>
                    <Shad.Input placeholder="john_doe@email.com" {...field} />
                  </Shad.FormControl>
                  <Shad.FormDescription>Your best email</Shad.FormDescription>
                  <Shad.FormMessage />
                </Shad.FormItem>
              )}
            />

            <Shad.FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormLabel>password</Shad.FormLabel>
                  <Shad.FormControl>
                    <Shad.Input
                      type="password"
                      placeholder="********"
                      {...field}
                    />
                  </Shad.FormControl>
                  <Shad.FormDescription>
                    Strong pass ir required
                  </Shad.FormDescription>
                  <Shad.FormMessage />
                </Shad.FormItem>
              )}
            />

            <Shad.Button type="submit">CREATE ACCOUNT</Shad.Button>
          </form>
        </Shad.Form>
      </div>
    </Shad.Card>
  );
}
