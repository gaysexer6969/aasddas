"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useEffect, useRef, useState } from "react"

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "#121212",
  gradientBackgroundEnd = "#121212",
  firstColor = "#00ADB5",
  secondColor = "#03DAC6",
  thirdColor = "#121212",
  fourthColor = "#2C2C2C",
  fifthColor = "#121212",
  pointerColor = "#00ADB5",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
  containerClassName?: string
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null)

  const [curX, setCurX] = useState(0)
  const [curY, setCurY] = useState(0)
  const [tgX, setTgX] = useState(0)
  const [tgY, setTgY] = useState(0)
  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart)
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
    document.body.style.setProperty("--first-color", firstColor)
    document.body.style.setProperty("--second-color", secondColor)
    document.body.style.setProperty("--third-color", thirdColor)
    document.body.style.setProperty("--fourth-color", fourthColor)
    document.body.style.setProperty("--fifth-color", fifthColor)
    document.body.style.setProperty("--pointer-color", pointerColor)
    document.body.style.setProperty("--size", size)
    document.body.style.setProperty("--blending-value", blendingValue)
  }, [])

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return
      }
      setCurX(curX + (tgX - curX) / 20)
      setCurY(curY + (tgY - curY) / 20)
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
    }

    const interval = setInterval(move, 1)

    return () => {
      clearInterval(interval)
    }
  }, [tgX, tgY, curX, curY])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect()
      setTgX(event.clientX - rect.left)
      setTgY(event.clientY - rect.top)
    }
  }

  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  return (
    <div className={cn("h-screen w-screen relative overflow-hidden top-0 left-0", containerClassName)}>
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)]",
          className,
        )}
        onMouseMove={handleMouseMove}
      >
        <div
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_transparent_70%)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            interactive && "opacity-0",
          )}
        ></div>

        <div
          ref={interactiveRef}
          className={cn(
            "absolute [background:radial-gradient(circle_at_center,_var(--pointer-color)_0,_transparent_70%)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
            !interactive && "opacity-0",
          )}
        ></div>

        <div className="absolute [background:radial-gradient(circle_at_center,_var(--second-color)_0,_transparent_70%)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] mix-blend-[var(--blending-value)] animate-[moveVertical_10s_ease_infinite]"></div>
        <div className="absolute [background:radial-gradient(circle_at_center,_var(--third-color)_0,_transparent_70%)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] mix-blend-[var(--blending-value)] animate-[moveInCircle_10s_reverse_ease_infinite]"></div>
        <div className="absolute [background:radial-gradient(circle_at_center,_var(--fourth-color)_0,_transparent_70%)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] mix-blend-[var(--blending-value)] animate-[moveInCircle_5s_ease_infinite]"></div>
        <div className="absolute [background:radial-gradient(circle_at_center,_var(--fifth-color)_0,_transparent_70%)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] mix-blend-[var(--blending-value)] animate-[moveHorizontal_10s_ease_infinite]"></div>
      </div>

      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,var(--gradient-background-end)_80%)]"></div>
      {children}
    </div>
  )
}
