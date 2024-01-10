'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as Shad from '@/components/ui';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    try {
      const supabase = createClientComponentClient();
      const { email, password } = formValues;

      const {
        error,
        data: { session },
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error('LOGIN: ', error);
      }

      if (session) {
        form.reset();
        router.refresh();
      }
    } catch (error) {
      console.error('REGISTER: ', error);
    }
  }

  return (
    <Shad.Card className="py-5 px-0 max-w-lg sm:w-full">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-center">Welcome back builder! 💪</span>
        <Shad.Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-start flex-col space-y-5"
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
                </Shad.FormItem>
              )}
            />

            <Shad.Button type="submit">ENTER</Shad.Button>
          </form>
        </Shad.Form>
      </div>
    </Shad.Card>
  );
}
