import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LogOut,
  Bell,
  CreditCard,
  User,
  Rocket,
} from "lucide-react";
import { signOut } from "next-auth/react";

export function SidebarUserDropdown() {
  return (
    <div className="py-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-between w-full cursor-pointer rounded-md px-3 py-2 hover:bg-gray-200 transition">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 rounded-md">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-left">
                <span className="text-sm font-medium ">shadcn</span>
                <span className="text-xs text-gray-400">m@example.com</span>
              </div>
            </div>
            <div className="">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="top" align="end" className="w-64 bg-white  border border-gray-200 ml-[50%]">
          <DropdownMenuLabel className="flex items-center gap-3 px-2 py-1.5">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback>SH</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">shadcn</p>
              <p className="text-xs text-gray-400">m@example.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Rocket className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </DropdownMenuItem>
          <DropdownMenuItem>
            <User className="w-4 h-4 mr-2" />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="w-4 h-4 mr-2" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
