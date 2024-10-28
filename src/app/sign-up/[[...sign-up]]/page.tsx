import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="my-5 w-full flex justify-center items-center">
      <SignUp
        fallbackRedirectUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/auth-callback`}
      />
    </section>
  );
}
