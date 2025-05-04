import { cn } from "@cms/libs/utils"
import type React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "destructive"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "badge",
        {
          "badge-default": variant === "default",
          "badge-secondary": variant === "secondary",
          "badge-outline": variant === "outline",
          "badge-destructive": variant === "destructive",
        },
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
