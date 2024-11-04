import React from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";
import SignOutBtn from "./signOut";
import { cn } from "@/lib/utils";

export const DialogButton = () => {
  return (
    <DialogClose asChild>
      <SignOutBtn />
    </DialogClose>
  );
};

export const DialogLink = ({
  href,
  content,
  className,
}: {
  href: string;
  content: string;
  className: string;
}) => {
  return (
    <DialogClose asChild>
      <Link href={href} className={cn("p-2 text-center", className)}>
        {content}
      </Link>
    </DialogClose>
  );
};
