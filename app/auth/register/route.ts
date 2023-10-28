import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY);
  const supabase = createRouteHandlerClient<Database>(
    {
      cookies,
    },
    { supabaseKey: process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY }
  );
  console.log(supabase);

  await supabase.auth.admin.createUser({
    email: "fahrell@maildrop.cc",
    password: "12345678",
    email_confirm: true,
    user_metadata: {
      nama: "Fahrel Gibran",
      nim: "24060120130106",
    },
  });

  return NextResponse.json({ message: "ok" });
}
