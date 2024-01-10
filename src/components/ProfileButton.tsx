import * as Shad from '@/components/ui';
import {
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function ProfileButton() {
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const getUser = async () => {
    const {
      error,
      data: { user },
    } = await supabase.auth.getUser();

    if (error) {
      console.error('NAV AUTH: ', error);
    }

    if (user) return setUser(user);
  };

  async function handleSignOut() {
    await supabase.auth.signOut();

    router.refresh();
  }

  useEffect(() => {
    getUser();
  });

  return (
    <Shad.DropdownMenu>
      <Shad.DropdownMenuTrigger asChild>
        <Shad.Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Shad.Avatar className="h-8 w-8">
            <Shad.AvatarImage src="/worker.svg" alt="@shadcn" />
            <Shad.AvatarFallback>SC</Shad.AvatarFallback>
          </Shad.Avatar>
        </Shad.Button>
      </Shad.DropdownMenuTrigger>
      <Shad.DropdownMenuContent className="w-56" align="end" forceMount>
        <Shad.DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user?.email?.split('@')[0]}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </Shad.DropdownMenuLabel>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuGroup>
          <Shad.DropdownMenuItem>
            Profile
            <Shad.DropdownMenuShortcut>⇧⌘P</Shad.DropdownMenuShortcut>
          </Shad.DropdownMenuItem>
        </Shad.DropdownMenuGroup>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuItem onClick={handleSignOut}>
          Log out
          <Shad.DropdownMenuShortcut>⇧⌘Q</Shad.DropdownMenuShortcut>
        </Shad.DropdownMenuItem>
      </Shad.DropdownMenuContent>
    </Shad.DropdownMenu>
  );
}
