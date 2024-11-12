import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const fnt = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reading Recorder",
  description: "自分が読んだ書籍の記録を残すためのアプリ",
};

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li className="block text-blue-300 px-2 py-2 my-1">
    <Link
      className="no-underline text-blue-300 px-2 py-2 hover:bg-gray-100 rounded"
      href={href}
    >
      {children}
    </Link>
  </li>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={fnt.className}>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">
          Reading Recorder
        </h1>
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/books">Search</LinkItem>
          <LinkItem href="/counter">Counter</LinkItem>
          <LinkItem href="/taskbox">Taskbox</LinkItem>
          <li className="block text-blue-300 px-2 py-2 my-1">
            <a
              className="no-underline text-blue-300 px-2 py-2 hover:bg-gray-100 rounded"
              href="https://wings.msn.to/"
              target="_blank"
            >
              Support
              <OpenInNewIcon fontSize="small" className="mb-1 ml-1" />
            </a>
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
