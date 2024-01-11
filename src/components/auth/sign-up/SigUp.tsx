'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as Shad from '@/components/ui';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/zustand-store/userStore';

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
  username: z
    .string({
      required_error: 'Whats is your name?',
    })
    .min(3, {
      message: 'Names should contain at least 3 characters.',
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignUp() {
  const router = useRouter();
  const userStore = useUserStore();

  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    try {
      const supabase = createClientComponentClient();
      const { username, email, password } = formValues;

      const {
        error,
        data: { user },
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
        // If you need to confirme email, uncomment this block and activate this function on supabase dashboard
        // options: {
        //   emailRedirectTo: `${location.origin}/auth/callback`,
        // },
      });

      if (error) {
        throw new Error('REGISTER: ', error);
      }

      if (user) {
        userStore.setUser(user.id, username, email);

        form.reset();
        // Change to refresh if you need email verification
        // router.refresh();
        router.push('/store');
      }
    } catch (error) {
      console.error('REGISTER: ', error);
    }
  }

  return (
    <Shad.Card className="py-5 px-0 max-w-lg sm:w-full">
      <div className="flex flex-col justify-center items-center space-y-2">
        <span className="text-center">
          Create your account and get discounts.
        </span>
        <Shad.Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-start flex-col space-y-3"
          >
            <Shad.FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormLabel>Full Name</Shad.FormLabel>
                  <Shad.FormControl>
                    <Shad.Input placeholder="John Doe" {...field} />
                  </Shad.FormControl>
                  <Shad.FormDescription>AKA</Shad.FormDescription>
                  <Shad.FormMessage />
                </Shad.FormItem>
              )}
            />

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
