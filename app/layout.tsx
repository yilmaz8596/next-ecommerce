import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "TechTribe",
  description: "An ecommerce platform for tech enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
