"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function BackgroundBeams({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!beamsRef.current) return
      const rect = beamsRef.current.getBoundingClientRect()
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={beamsRef}
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      {...props}
    >
      <div
        className="absolute inset-0 z-10 bg-[#121212]"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              transparent 0%,
              #00ADB5 20%,
              transparent 30%
            )
          `,
          backgroundBlendMode: "lighten",
        }}
      />
    </div>
  )
}
