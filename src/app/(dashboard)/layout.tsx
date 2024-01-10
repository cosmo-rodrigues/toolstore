import { RedirectType, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { DashboardBar } from '@/components/dashboard/DashboardBar';
import { DashboardFooter } from '@/components/dashboard/DashboardFooter';
import * as Shad from '@/components/ui';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    if (!loggedIn) {
      redirect('/', RedirectType.replace);
    }
  }

  return (
    <>
      <DashboardBar />
      <Shad.Container className="w-screen h-screen bg-orange-600 dark:bg-slate-900">
        {children}
      </Shad.Container>
      <DashboardFooter />
    </>
  );
}
