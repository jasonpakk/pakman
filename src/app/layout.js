import "./globals.scss";
import LoadingHandler from "./loading-handler";
import Head from "next/head";

export const metadata = {
  title: "Pakman",
  description: "Jason Pak's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingHandler children={children} />
      </body>
    </html>
  );
}
