"use client"

import React from "react"
import { cn } from "@cms/libs/utils"
import { Check } from "lucide-react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false)

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked)
      }
    }, [checked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked
      setIsChecked(newChecked)
      onCheckedChange?.(newChecked)
    }

    return (
      <div className="relative flex items-center">
        <input
          type="checkbox"
          ref={ref}
          checked={isChecked}
          onChange={handleChange}
          className="absolute h-4 w-4 opacity-0"
          {...props}
        />
        <div
          className={cn(
            "flex h-4 w-4 items-center justify-center rounded border border-primary",
            isChecked ? "bg-primary text-primary-foreground" : "bg-background",
            className,
          )}
        >
          {isChecked && <Check className="h-3 w-3 text-current" />}
        </div>
      </div>
    )
  },
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
