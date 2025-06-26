import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-full h-48 bg-[#212121] border-4 border-[#222] rounded-lg flex flex-col justify-center gap-2.5 p-4 overflow-hidden transition-all duration-300 ease-in-out group card-modern-shadow hover:card-modern-shadow-hover hover:border-[#b671d6]",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "m-0 text-lg font-semibold text-white cursor-default font-sans",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "m-0 text-sm font-semibold text-white overflow-hidden cursor-default font-sans line-clamp-3",
      className
    )}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute right-5 bottom-1 flex items-center gap-1 text-sm font-normal text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer animate-card-text",
      className
    )}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
