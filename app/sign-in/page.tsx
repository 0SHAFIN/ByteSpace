import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import SignInForm from "@/components/auth/SignInForm";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "Sign in to ByteSpace and continue learning.",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in with ease"
      intro="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SignInForm />
    </AuthShell>
  );
}
