import Nav from "@/components/nav";
import { NavProvider } from "@/contexts/navcontext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="root">
      <div className="container-fluid d-flex flex-row vh-100 p-3">
        <NavProvider>
          <Nav />
          <div className="p-3 content" style={{ width: "100%" }}>
            {children}
          </div>
        </NavProvider>
      </div>
    </div>
  );
}
