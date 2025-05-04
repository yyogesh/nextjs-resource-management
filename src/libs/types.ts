export interface Project {
    id: string
    name: string
    description?: string
    languages: string[]
    defaultLanguage: string
    stringCount?: number
    imageCount?: number
    createdAt: string
    updatedAt: string
  }
  
  export interface ResourceString {
    id: string
    projectId: string
    key: string
    translations: Record<string, string>
    description?: string
    tags?: string[]
    createdAt: string
    updatedAt: string
  }
  
  export interface ResourceImage {
    id: string
    projectId: string
    key: string
    variants: Record<string, string>
    description?: string
    tags?: string[]
    createdAt: string
    updatedAt: string
  }
  
  export interface Activity {
    id: string
    userId: string
    action: "created" | "updated" | "deleted"
    resourceType: "project" | "string" | "image"
    resourceId: string
    projectId: string
    timestamp: string
  }
  