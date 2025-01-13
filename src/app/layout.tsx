import React from "react";
import ReduxProvider from "../store/redux-provider";

export const metadata = {
  title: 'MFS - Mitrais Financial System',
  description: 'Mitrais Financial System',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>
          <div id="root">{children}</div>
        </body>
      </html>
    </ReduxProvider>
  )
}