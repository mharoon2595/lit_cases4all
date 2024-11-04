"use client";

import { useState } from "react";
import { UserButton, useClerk, useUser } from "@clerk/nextjs";
import { LogOut, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function CustomUserButton({ isAdmin }: { isAdmin: boolean }) {
  const [open, setOpen] = useState(false);
  const { signOut } = useClerk();
  const { user } = useUser();
  const router = useRouter();
  let username;

  if (!user) {
    return null;
  } else {
    username = user.firstName || user.username;
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 min-w-8 rounded-full p-2 hidden sm:flex items-center"
        >
          <span>Hi {username}!</span>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {!isAdmin && (
          <DropdownMenuItem onClick={() => router.push("/orders")}>
            <PackageOpen className="mr-2 h-4 w-4" />
            <span>View Orders</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
