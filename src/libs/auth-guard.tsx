"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "./contexts/auth-context"

const publicPaths = ["/login", "/register", "/api"]

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip auth check for public paths
    if (publicPaths.some((path) => pathname.startsWith(path))) {
      return
    }

    // If not loading and not authenticated, redirect to login
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, pathname, router])

  // Show nothing while loading or redirecting
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>
  }

  // If on a protected route and not authenticated, don't render children
  if (!isAuthenticated && !publicPaths.some((path) => pathname.startsWith(path))) {
    return null
  }

  // Otherwise, render children
  return <>{children}</>
}
