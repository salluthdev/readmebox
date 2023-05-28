import { ReactNode } from "react";
import Navbar from "./navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="max-w-3xl px-4 mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
