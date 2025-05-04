"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FolderKanban, Settings, LogOut, FileCode } from "lucide-react"
import { useAuth } from "@cms/libs/contexts/auth-context"
import { cn } from "@cms/libs/utils"
import { Button } from "./ui/button"

export default function Sidebar() {
  const pathname = usePathname()
  const { logout, user } = useAuth()

  const routes = [
    {
      href: "/",
      icon: LayoutDashboard,
      title: "Dashboard",
      exact: true,
    },
    {
      href: "/projects",
      icon: FolderKanban,
      title: "Projects",
      exact: false,
    },
    {
      href: "/api-docs",
      icon: FileCode,
      title: "API Docs",
      exact: true,
    },
    {
      href: "/settings",
      icon: Settings,
      title: "Settings",
      exact: true,
    },
  ]

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold">Resource CMS</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                {
                  "bg-accent text-accent-foreground": route.exact
                    ? pathname === route.href
                    : pathname.startsWith(route.href),
                },
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t p-4">
        {user && (
          <div className="mb-4 flex items-center gap-3 px-2">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
              <span className="text-xs font-bold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">{user.email}</span>
            </div>
          </div>
        )}
        <Button variant="outline" className="w-full justify-start" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
