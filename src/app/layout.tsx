import type { Metadata } from "next";
import "./globals.scss";
import Gnb from "./gnb";

export const metadata: Metadata = {
  title: "컴포넌트 연구소",
  description: "Vanilla / React Components",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <main>{children}</main>
      </body>
    </html>
  );
}
