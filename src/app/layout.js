import "./globals.css";
import Prvider from "@/Redux/Provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zag",
  description: "Task 1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Prvider>{children}</Prvider>
      </body>
    </html>
  );
}
