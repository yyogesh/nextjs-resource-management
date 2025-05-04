import { formatDistanceToNow } from "date-fns"
import { FileText, ImageIcon, Plus, Edit } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"

const activities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder-user.jpg",
      initials: "JD",
    },
    action: "added",
    resourceType: "string",
    resourceName: "welcome_message",
    project: "Website Localization",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      avatar: "/placeholder-user.jpg",
      initials: "JS",
    },
    action: "edited",
    resourceType: "image",
    resourceName: "hero_banner",
    project: "Mobile App",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      avatar: "/placeholder-user.jpg",
      initials: "MJ",
    },
    action: "added",
    resourceType: "string",
    resourceName: "error_message",
    project: "E-commerce Platform",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: 4,
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder-user.jpg",
      initials: "SW",
    },
    action: "edited",
    resourceType: "string",
    resourceName: "checkout_confirmation",
    project: "E-commerce Platform",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8),
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across all projects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              {/* <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar> */}
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  {activity.user.name}{" "}
                  <span className="text-muted-foreground">
                    {activity.action} a{" "}
                    {activity.resourceType === "string" ? (
                      <span className="inline-flex items-center">
                        <FileText className="mr-1 h-3 w-3" />
                        string
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <ImageIcon className="mr-1 h-3 w-3" />
                        image
                      </span>
                    )}{" "}
                    in {activity.project}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{activity.resourceName}</span> •{" "}
                  {formatDistanceToNow(activity.timestamp)}
                </p>
              </div>
              <div className="ml-auto">
                {activity.action === "added" ? (
                  <Plus className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Edit className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
