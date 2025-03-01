import { auth } from "@/auth";
import { headers } from "next/headers";
import SignIn from "@/features/auth/components/sign-in";
import { redirect } from "next/navigation";

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return <SignIn />;
}

export default Page;
