import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="my-auto w-full flex justify-center items-center">
      <SignIn fallbackRedirectUrl={"http://localhost:3000/auth-callback"} />
    </section>
  );
}
