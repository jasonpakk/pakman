import "./globals.scss";
import LoadingHandler from "./screenhandlers/loading-handler";

export const metadata = {
  title: "pakman",
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
