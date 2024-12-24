import ReduxProvider from "../store/redux-provider";


export default function RootLayout({ children }) {
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