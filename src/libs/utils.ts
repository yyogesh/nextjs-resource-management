import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistance } from "date-fns"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
    return format(date, "PPP")
  }
  
  export function formatDistanceToNow(date: Date): string {
    return formatDistance(date, new Date(), { addSuffix: true })
  }
  