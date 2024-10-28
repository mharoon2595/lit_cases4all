import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="my-5 w-full flex justify-center items-center">
      <SignUp fallbackRedirectUrl={"http://localhost:3000/auth-callback"} />
    </section>
  );
}
