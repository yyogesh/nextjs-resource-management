import { PlusCircle } from "lucide-react"
import Link from "next/link"
import { DashboardStats } from "@cms/components/dashboard-stats"
import { Button } from "@cms/components/ui/button"
import { ProjectList } from "@cms/components/project-list"
import { RecentActivity } from "@cms/components/recent-activity"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Link href="/projects/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Projects</h2>
            <Link href="/projects" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
          <ProjectList limit={5} />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
