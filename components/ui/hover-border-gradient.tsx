"use client"
import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type HoverBorderGradientProps = {
  children: React.ReactNode
  containerClassName?: string
  className?: string
  as?: React.ElementType
  duration?: number
  from?: string
  to?: string
  [key: string]: any
}

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 500,
  from = "#00ADB5",
  to = "#03DAC6",
  ...props
}: HoverBorderGradientProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={ref}
      className={cn("relative p-[1px] group overflow-hidden rounded-md", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 rounded-md"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${from}, ${to})`,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: duration / 1000 }}
      />
      <Component className={cn("relative z-10", className)} {...props}>
        {children}
      </Component>
    </div>
  )
}
