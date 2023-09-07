"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();

  // console.log(session);
  return (
    <div>
      <button onClick={() => signIn("google")}>SignIn with Google</button>
    </div>
  );
}
