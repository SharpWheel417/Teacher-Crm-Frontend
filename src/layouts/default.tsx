import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
  signIn = false,
  // navbar = true,
  noneContainer = true,
}: {
  children: React.ReactNode;
  // navbar?: boolean;
  noneContainer?: boolean;
  signIn?: boolean;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar signIn={signIn} />
      {noneContainer ? (
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          {children}
        </main>
      ) : (
        <main>{children}</main>
      )}
    </div>
  );
}
