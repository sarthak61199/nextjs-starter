import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen grid place-items-center">{children}</div>;
}

export default Layout;
