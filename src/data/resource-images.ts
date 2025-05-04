import { ResourceImage } from "@cms/libs/types";

export const resourceImages: ResourceImage[] = [
  {
    id: "image-1",
    projectId: "project-1",
    key: "hero_banner",
    variants: {
      en: "/placeholder.svg?height=300&width=600&text=Hero%20Banner%20(EN)",
      fr: "/placeholder.svg?height=300&width=600&text=Bannière%20Héro%20(FR)",
      es: "/placeholder.svg?height=300&width=600&text=Banner%20Principal%20(ES)",
      de: "/placeholder.svg?height=300&width=600&text=Hero-Banner%20(DE)",
      ja: "/placeholder.svg?height=300&width=600&text=ヒーローバナー%20(JA)",
    },
    description: "Homepage hero banner",
    tags: ["homepage", "banner"],
    createdAt: "2023-01-20T11:30:00Z",
    updatedAt: "2023-04-15T15:45:00Z",
  },
  {
    id: "image-2",
    projectId: "project-1",
    key: "about_team",
    variants: {
      en: "/placeholder.svg?height=400&width=600&text=Our%20Team%20(EN)",
      fr: "/placeholder.svg?height=400&width=600&text=Notre%20Équipe%20(FR)",
      es: "/placeholder.svg?height=400&width=600&text=Nuestro%20Equipo%20(ES)",
      de: "/placeholder.svg?height=400&width=600&text=Unser%20Team%20(DE)",
    },
    description: "Team photo for about page",
    tags: ["about", "team"],
    createdAt: "2023-01-22T12:15:00Z",
    updatedAt: "2023-04-10T10:30:00Z",
  },
  {
    id: "image-3",
    projectId: "project-2",
    key: "app_logo",
    variants: {
      en: "/placeholder.svg?height=200&width=200&text=Logo%20(EN)",
      fr: "/placeholder.svg?height=200&width=200&text=Logo%20(FR)",
      es: "/placeholder.svg?height=200&width=200&text=Logo%20(ES)",
      zh: "/placeholder.svg?height=200&width=200&text=标志%20(ZH)",
    },
    description: "Mobile app logo",
    tags: ["logo", "branding"],
    createdAt: "2023-02-16T10:30:00Z",
    updatedAt: "2023-04-12T12:15:00Z",
  },
  {
    id: "image-4",
    projectId: "project-2",
    key: "onboarding_screen_1",
    variants: {
      en: "/placeholder.svg?height=800&width=400&text=Onboarding%201%20(EN)",
      fr: "/placeholder.svg?height=800&width=400&text=Intégration%201%20(FR)",
      es: "/placeholder.svg?height=800&width=400&text=Incorporación%201%20(ES)",
    },
    description: "First onboarding screen",
    tags: ["onboarding", "mobile"],
    createdAt: "2023-02-18T14:20:00Z",
    updatedAt: "2023-04-11T09:45:00Z",
  },
]
