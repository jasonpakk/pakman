import "./globals.scss";
import LoadingHandler from "./screenhandlers/loading-handler";
import Script from "next/script";
import TitleChanger from "./components/title";

export const metadata = {
  title: "pakman",
  description: "Jason Pak's Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://w.soundcloud.com/player/api.js"
        strategy="lazyOnload"
      />
      <body>
        <TitleChanger />
        <LoadingHandler children={children} />
      </body>
    </html>
  );
}
