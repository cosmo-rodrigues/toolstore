import * as Shad from '@/components/ui';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';
import Image from 'next/image';

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
    <main className="flex h-4/5 w-full justify-center items-center my-auto bg-orange-600">
      <Shad.Container className="hidden md:block">
        <Image src="/workers.png" height={700} width={700} alt="Workers" />
      </Shad.Container>
      <Shad.Container className="w-full">
        <Shad.Tabs defaultValue="account" className="w-[400px] mx-auto">
          <Shad.TabsList className="grid w-full grid-cols-2">
            <Shad.TabsTrigger value="account">Account</Shad.TabsTrigger>
            <Shad.TabsTrigger value="password">Password</Shad.TabsTrigger>
          </Shad.TabsList>
          <Shad.TabsContent value="account">
            <Shad.Card>
              <Shad.CardHeader>
                <Shad.CardTitle>Account</Shad.CardTitle>
                <Shad.CardDescription>
                  {`Make changes to your account here. Click save when you're done.`}
                </Shad.CardDescription>
              </Shad.CardHeader>
              <Shad.CardContent className="space-y-2">
                <div className="space-y-1">
                  <Shad.Label htmlFor="name">Name</Shad.Label>
                  <Shad.Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Shad.Label htmlFor="username">Username</Shad.Label>
                  <Shad.Input id="username" defaultValue="@peduarte" />
                </div>
              </Shad.CardContent>
              <Shad.CardFooter>
                <Shad.Button>Save changes</Shad.Button>
              </Shad.CardFooter>
            </Shad.Card>
          </Shad.TabsContent>
          <Shad.TabsContent value="password">
            <Shad.Card>
              <Shad.CardHeader>
                <Shad.CardTitle>Password</Shad.CardTitle>
                <Shad.CardDescription>
                  {`Change your password here. After saving, you'll be logged out.`}
                </Shad.CardDescription>
              </Shad.CardHeader>
              <Shad.CardContent className="space-y-2">
                <div className="space-y-1">
                  <Shad.Label htmlFor="current">Current password</Shad.Label>
                  <Shad.Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Shad.Label htmlFor="new">New password</Shad.Label>
                  <Shad.Input id="new" type="password" />
                </div>
              </Shad.CardContent>
              <Shad.CardFooter>
                <Shad.Button>Save password</Shad.Button>
              </Shad.CardFooter>
            </Shad.Card>
          </Shad.TabsContent>
        </Shad.Tabs>
      </Shad.Container>
    </main>
  );
}
