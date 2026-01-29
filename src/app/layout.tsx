import React from "react";
import ReduxProvider from "../store/redux-provider";
import "./globals.css";
import Nav from '../components/nav';
import { auth } from "../lib/auth"

export const metadata = {
  title: 'MFS - Mitrais Financial System',
  description: 'Mitrais Financial System',
};

export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth();
  return (

    <ReduxProvider>
      <html lang="en">
        <body>
          <div id="root">
            <div className="container mx-auto flex flex-row h-screen p-4">
              <Nav isAuth={session != null}></Nav>
              <div className="w-2/3 p-4 content">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ReduxProvider>
  )
}