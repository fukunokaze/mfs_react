import React from "react";
import ReduxProvider from "../store/redux-provider";
import "./globals.css";
import Nav from '../components/nav';

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
          <div id="root">
            <div className="container mx-auto flex flex-row h-screen p-4">
              <Nav></Nav>
              <div className="w-2/3 p-4">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </ReduxProvider>
  )
}