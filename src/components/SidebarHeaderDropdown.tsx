import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Moon,
  Package2,
} from "lucide-react";

export function SidebarHeaderDropdown() {
  return (
    <div className="py-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-between w-full cursor-pointer rounded-md px-3 py-2 hover:bg-gray-200 transition">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-md">
                  <Package2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">your appname</h2>
                  <p className="text-xs text-gray-400">Enterprise</p>
                </div>
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

        <DropdownMenuContent
          side="top"
          align="end"
          className="w-64 bg-white  border border-gray-200 ml-[50%]"
        >
          <DropdownMenuLabel className="flex items-center gap-3 px-2 py-1.5">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-md">
                  <Package2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">your appname</h2>
                  <p className="text-xs text-gray-400">Enterprise</p>
                </div>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {/* Dark mode */}
            <Moon className="mr-2 size-4" />
            Dark Mode
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
