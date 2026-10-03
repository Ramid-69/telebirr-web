import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tele Birr Clone",
  description: "Tele Birr inspired wallet dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
