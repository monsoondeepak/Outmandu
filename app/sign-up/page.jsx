"use client";

import { SignedIn, SignedOut, SignUp, UserButton } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <SignedOut>
        <SignUp />
      </SignedOut>

      <SignedIn>
        <div style={{ padding: "2rem" }}>
          <p>You are already signed in.</p>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </>
  );
}
