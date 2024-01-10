import { RedirectType, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

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

  return <> {children} </>;
}
