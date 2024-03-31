/* eslint-disable jsx-a11y/heading-has-content */
import React from "react"
import { cn } from "../../utils/cn"


const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex items-center justify-center w-full h-full rounded-lg shadow-sm ",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

const CardAnimation = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flip-card h-[400px] rounded-lg bg-[#0a0921] shadow-sm w-full", className)}
        {...props}
    />
))
CardAnimation.displayName = "CardAnimation"

const CardTerm = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flip-card-front bg-[#2e3856] w-full h-full text-center rounded-lg text-2xl leading-none tracking-wide flex items-center justify-center",
            className
        )}
        {...props}
    />
))
CardTerm.displayName = "CardTerm"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flip-card-back w-full h-full bg-[#2e3856] text-center rounded-lg text-2xl font-thin leading-tight tracking-wide flex items-center justify-center", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"


export { Card, CardTerm, CardDescription, CardAnimation }
