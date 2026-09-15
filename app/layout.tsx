import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Portfolio",
  description: "",
  icons: {
    icon: "/icons/brand/favicon.png",
    shortcut: "/icons/brand/favicon.png",
    apple: "/icons/brand/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
