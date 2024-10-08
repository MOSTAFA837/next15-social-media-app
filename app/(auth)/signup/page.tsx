import SignUpForm from "@/components/forms/signup-form";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

function SignupPage() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to handbook</h1>
            <p className="text-muted-foreground">
              A place where <span className="italic">you</span> can find a
              friend.
            </p>
          </div>

          <div className="space-y-5">
            <SignUpForm />

            <Link href="/login" className="block text-center hover:underline">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
