import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

import "@/assets/styles/globals.css"
import { Toaster } from "@/components/ui/sonner"

import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants"

const I = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | E-commerce",
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
  openGraph: {
    title: "VIPTech Store | Full-Stack E-commerce Project",
    description:
      "Full-stack e-commerce built with Next.js, Tailwind CSS, Stripe, Prisma, and PostgreSQL.",
    url: "https://viptech.store",
    siteName: "VIPTech Store",
    images: [
      {
        url: "https://viptech.store/images/doc1.png",
        width: 1200,
        height: 630,
        alt: "VIPTech Store - Full-Stack E-commerce Project",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${I.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
