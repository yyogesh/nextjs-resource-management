import type { Project, ResourceString, ResourceImage } from "./types.ts"
import { projects } from "@cms/data/projects"
import { resourceStrings } from "@cms/data/resource-strings"
import { resourceImages } from "@cms/data/resource-images"

export async function getProjects(): Promise<Project[]> {
  // In a real app, this would fetch from an API or database
  return projects
}

export async function getProject(id: string): Promise<Project | undefined> {
  // In a real app, this would fetch from an API or database
  return projects.find((p) => p.id === id)
}

export async function getResourceStrings(projectId: string): Promise<ResourceString[]> {
  // In a real app, this would fetch from an API or database
  return resourceStrings.filter((s) => s.projectId === projectId)
}

export async function getResourceString(id: string): Promise<ResourceString | undefined> {
  // In a real app, this would fetch from an API or database
  return resourceStrings.find((s) => s.id === id)
}

export async function getResourceImages(projectId: string): Promise<ResourceImage[]> {
  // In a real app, this would fetch from an API or database
  return resourceImages.filter((i) => i.projectId === projectId)
}

export async function getResourceImage(id: string): Promise<ResourceImage | undefined> {
  // In a real app, this would fetch from an API or database
  return resourceImages.find((i) => i.id === id)
}
