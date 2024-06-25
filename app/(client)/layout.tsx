import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-cms-blog-ce.vercel.app/"),
  title: {
    default: "fcoBlog",
    template: '%s | fcoBlog'
  },
  description: "fcoBlog",
  openGraph: {
    title: "fcoBlog",
    description: "fcoBlog",
    type: "website",
    locale: "en_US",
    url: "https://next-cms-blog-ce.vercel.app/",
    siteName: "fcoBlog"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-off-white text-indigo-950 dark:bg-slate-950 dark:black dark:selection:bg-off-white`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}