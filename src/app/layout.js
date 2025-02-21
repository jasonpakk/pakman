import "./globals.scss";
import LoadingHandler from "./components/loading-handler";
import Script from "next/script";
import TitleChanger from "./components/title";
import FaviconRotator from "./components/favicon";

export const metadata = {
  title: "pakman",
  description: "Jason Pak's Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <FaviconRotator />
        <Script
          src="https://w.soundcloud.com/player/api.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <TitleChanger />
        <LoadingHandler children={children} />
      </body>
    </html>
  );
}
