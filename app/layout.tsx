import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Portfolio",
  description:
    "A clean, responsive portfolio template for a university Software Engineering student applying for internships.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
