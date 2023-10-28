"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "dafexxx@maildrop.cc",
      password: "12345678",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "fahrell@maildrop.cc",
      password: "12345678",
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleSignUp}>Sign up</button>
      {/* <button onClick={handleSignIn}>Sign in</button> */}
      <Link href="/auth/login">Sign in</Link>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
