import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function Layout({ children }: { children: ReactNode }) {
  const { user } = await validateRequest();

  if (user) redirect("/");

  return <>{children}</>;
}

export default Layout;
