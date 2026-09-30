import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import SignUpForm from "@/components/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description: "Join ByteSpace to learn from creators or publish your own courses.",
};

export default function JoinPage() {
  return (
    <AuthShell
      title="Sign up and come in"
      intro="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <SignUpForm />
    </AuthShell>
  );
}
