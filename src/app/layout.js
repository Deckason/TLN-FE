import { Inter } from "next/font/google";
import "../css/globals.css";
import Providers from "../ReactQuery/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TLN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
