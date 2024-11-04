import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignOutBtn from "./signOut";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { DialogButton, DialogLink } from "./dialogButton";

export function DialogDemo({
  isAdmin,
  username,
}: {
  isAdmin?: boolean;
  username?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger className="block sm:hidden" asChild>
        <Button className="border-2 border-green-500" variant="outline">
          Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[70vw] sm:max-w-[425px] rounded-md">
        <DialogTitle className="mb-2 text-center">
          Cobra<span className="text-green-500">Covers</span>
        </DialogTitle>
        <DialogDescription>
          {username ? (
            <div className="flex flex-col items-center gap-3 ">
              <section className="text-xl font-semibold my-2">
                Hi {username}! 👋
              </section>
              {isAdmin ? (
                <DialogLink
                  href="/dashboard"
                  content="Dashboard 💼"
                  className="bg-green-500 text-white rounded-md"
                />
              ) : (
                <DialogLink
                  href="/orders"
                  content="Orders"
                  className="bg-green-500 text-white rounded-md"
                />
              )}
              <DialogLink
                href="/configure/upload"
                content="Create a case now!"
                className="bg-green-500 text-white rounded-md"
              />
              <DialogButton />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5 ">
              <DialogLink
                href="/sign-up"
                content="Sign Up"
                className=" border border-black rounded-md"
              />
              <DialogLink
                href="/sign-in"
                content="Sign In"
                className=" border border-black rounded-md"
              />
              <DialogLink
                href="/configure/upload"
                content="Create a case now!"
                className="bg-green-500 text-white rounded-md"
              />
            </div>
          )}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
