import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import ProfileBtn from "./ui/userButton";
import { DialogDemo } from "./Dialog";

const Navbar = async () => {
  const user = await currentUser();
  const username = user?.firstName || user?.username;

  const isAdmin =
    user?.emailAddresses[0].emailAddress === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Cobra<span className="text-green-600">Covers</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {username ? (
              <>
                <ProfileBtn isAdmin={isAdmin} />
                <DialogDemo isAdmin={isAdmin} username={username} />
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden sm:flex items-center gap-1",
                    })}
                  >
                    Dashboard 💼
                  </Link>
                ) : null}

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <DialogDemo />
                <div className="space-x-2 hidden sm:block">
                  <Link
                    href="/sign-up"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Sign up
                  </Link>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Sign in
                  </Link>
                </div>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
