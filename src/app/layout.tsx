import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "Resource CMS",
  description: "Manage multilingual resources across projects",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <ClientLayout>{children}</ClientLayout>
}
