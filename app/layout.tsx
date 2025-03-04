import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/assets/styles/globals.css";

const fontRaleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontRaleway.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
