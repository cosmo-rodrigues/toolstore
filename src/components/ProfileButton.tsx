import * as Shad from '@/components/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ProfileButton() {
  return (
    <Shad.DropdownMenu>
      <Shad.DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/img/shadcn.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Shad.DropdownMenuTrigger>
      <Shad.DropdownMenuContent>
        <Shad.DropdownMenuLabel>My Account</Shad.DropdownMenuLabel>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuItem className="cursor-pointer">
          Profile
        </Shad.DropdownMenuItem>
        <Shad.DropdownMenuItem className="cursor-pointer">
          Billing
        </Shad.DropdownMenuItem>
        <Shad.DropdownMenuItem className="cursor-pointer">
          Subscription
        </Shad.DropdownMenuItem>
        <Shad.DropdownMenuSeparator />
        <Shad.DropdownMenuItem className="cursor-pointer">
          Log Out
        </Shad.DropdownMenuItem>
      </Shad.DropdownMenuContent>
    </Shad.DropdownMenu>
  );
}
