"use client"; // This makes the component a Client Component
import "./globals.css";
import { Provider } from "react-redux";
import store from "../store/store"; // Adjust the path to your store file



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
