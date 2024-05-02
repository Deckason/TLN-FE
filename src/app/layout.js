import { Inter } from "next/font/google";
import "@/css/globals.css";
import Providers from "@/ReactQuery/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TLN",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
