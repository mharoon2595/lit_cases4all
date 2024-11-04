"use client";

import { Button } from "./ui/button";
import { useClerk } from "@clerk/nextjs";

const SignOutBtn = () => {
  const { signOut } = useClerk();
  return (
    <Button
      variant="default"
      className="bg-red-500 p-2 text-center"
      onClick={() => signOut()}
    >
      Log out
    </Button>
  );
};

export default SignOutBtn;
