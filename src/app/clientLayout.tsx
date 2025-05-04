"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import { ToastProvider } from "@cms/components/ui/toast"
import { AuthProvider } from "@cms/libs/contexts/auth-context"
import { ThemeProvider } from "next-themes"
import { AuthGuard } from "@cms/libs/auth-guard"
import Sidebar from "@cms/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/register"

  return (
    <div className="flex h-screen overflow-hidden">
      {isAuthPage ? (
        <main className="flex-1 overflow-y-auto">{children}</main>
      ) : (
        <>
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </>
      )}
    </div>
  )
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ToastProvider>
            <AuthProvider>
              <AuthGuard>
                <AppLayout>{children}</AppLayout>
              </AuthGuard>
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
