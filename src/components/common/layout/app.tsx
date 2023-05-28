import Navbar from "./navbar";

export default function AppLayout({ children }: any) {
  return (
    <div className="max-w-3xl px-4 mx-auto">
      <Navbar />
      {children}
    </div>
  );
}
