import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
  fromOrder,
}: {
  className?: string;
  children: ReactNode;
  fromOrder?: boolean;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        fromOrder ? "h-1/2" : "h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
