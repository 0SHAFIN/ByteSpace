import type { Metadata } from "next";
import AuthShell from "@/components/auth/AuthShell";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot Password — ByteSpace",
  description: "Reset your ByteSpace password.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Get back to learning"
      intro="Forgot your password? No worries. We'll help you reset it in a few quick steps so you can pick up right where you left off."
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
