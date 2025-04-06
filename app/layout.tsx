import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgenciFlow - Your Vision, Our Innovation",
  description: "Turning ideas into intelligent digital experiences",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logosvg.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'