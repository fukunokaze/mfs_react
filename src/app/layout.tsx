import ReduxProvider from "../store/redux-provider";
import "./globals.css";
import Nav from "../components/nav";
import { auth } from "../lib/auth";

export const metadata = {
  title: "MFS - Mitrais Financial System",
  description: "Mitrais Financial System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <div id="root">
            <div className="container-fluid d-flex flex-row vh-100 p-3">
              <Nav isAuth={session != null} />
              <div className="p-3 content" style={{ width: "100%" }}>
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
