import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="my-auto w-full flex justify-center items-center">
      <SignIn
        fallbackRedirectUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth-callback`}
      />
    </section>
  );
}
