import "./globals.css";

export const metadata = {
  title: "MFS - Mitrais Financial System",
  description: "Mitrais Financial System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="container-fluid d-flex flex-row">
            <div className="p-3 content" style={{ width: "100%" }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
