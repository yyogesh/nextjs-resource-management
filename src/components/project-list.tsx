import Link from "next/link"
import { MoreHorizontal, FileText, ImageIcon } from "lucide-react"
import { getProjects } from "@cms/libs/data"
import { formatDistanceToNow } from "@cms/libs/utils"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export async function ProjectList({ limit }: { limit?: number }) {
  const projects = await getProjects()
  const displayProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid gap-4">
      {displayProjects.map((project) => (
        <Card key={project.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <CardTitle>
                <Link href={`/projects/${project.id}`} className="hover:underline">
                  {project.name}
                </Link>
              </CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-2">
              {project.languages.map((lang) => (
                <Badge key={lang} variant={lang === project.defaultLanguage ? "default" : "outline"}>
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <FileText className="mr-1 h-3 w-3" />
                {project.stringCount || 0} strings
              </div>
              <div className="flex items-center">
                <ImageIcon className="mr-1 h-3 w-3" />
                {project.imageCount || 0} images
              </div>
            </div>
            <div>Updated {formatDistanceToNow(new Date(project.updatedAt))}</div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
