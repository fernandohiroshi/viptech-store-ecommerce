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
