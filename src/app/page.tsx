import * as Shad from '@/components/ui';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
import Image from 'next/image';
import { HomeBar } from '@/components/HomeBar';
import { SignUp } from '@/components/auth/sign-up/SigUp';
import { SignIn } from '@/components/auth/sign-in/SignIn';

export default async function Home() {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) loggedIn = true;
  } catch (error) {
    console.error('AUTH: ', error);
  } finally {
    if (loggedIn) {
      redirect('/dashboard', RedirectType.replace);
    }
  }

  return (
    <>
      <HomeBar />

      <main className="flex h-4/5 w-full justify-center mx-auto pt-10 bg-orange-600">
        <Shad.Container className="ml-32 hidden md:block">
          <Image src="/workers.png" height={700} width={700} alt="Workers" />
        </Shad.Container>
        <Shad.Container className="w-full">
          <Shad.Tabs defaultValue="create-account" className="mx-auto max-w-md">
            <Shad.TabsList className="grid w-full grid-cols-2">
              <Shad.TabsTrigger
                value="create-account"
                className="transition-all delay-150"
              >
                Create Account
              </Shad.TabsTrigger>
              <Shad.TabsTrigger
                value="login"
                className="transition-all delay-150"
              >
                Login
              </Shad.TabsTrigger>
            </Shad.TabsList>
            <Shad.TabsContent value="create-account">
              <SignUp />
            </Shad.TabsContent>
            <Shad.TabsContent value="login">
              <SignIn />
            </Shad.TabsContent>
          </Shad.Tabs>
        </Shad.Container>
      </main>
    </>
  );
}
