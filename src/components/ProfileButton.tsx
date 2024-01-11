import * as Shad from '@/components/ui';
import { useUserStore } from '@/zustand-store/userStore';
import {
  User,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function ProfileButton() {
  const router = useRouter();
  const userStore = useUserStore();
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    await supabase.auth.signOut();

    userStore.logoutUser();
    router.refresh();
  }

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
              {userStore.username}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userStore.email}
            </p>
          </div>
        </Shad.DropdownMenuLabel>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuGroup
          onClick={() => router.push('/dashboard/profile')}
        >
          <Shad.DropdownMenuItem>
            Profile
            <Shad.DropdownMenuShortcut>⇧⌘P</Shad.DropdownMenuShortcut>
          </Shad.DropdownMenuItem>
        </Shad.DropdownMenuGroup>
        <Shad.DropdownMenuGroup onClick={() => router.push('/dashboard')}>
          <Shad.DropdownMenuItem>
            Dashboard
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
