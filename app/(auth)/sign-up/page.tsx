import { auth } from "@/auth";
import SignUp from "@/features/auth/components/sign-up";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return <SignUp />;
}

export default Page;
