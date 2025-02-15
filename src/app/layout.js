import "./globals.scss";
import LoadingHandler from "./screenhandlers/loading-handler";
import Script from "next/script";

export const metadata = {
  title: "pakman",
  description: "Jason Pak's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://w.soundcloud.com/player/api.js"
        strategy="lazyOnload"
      />
      <body>
        <LoadingHandler children={children} />
      </body>
    </html>
  );
}
