"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function TextGenerateEffect({
  words,
  className,
}: {
  words: string
  className?: string
}) {
  const [complete, setComplete] = useState(false)
  const characters = words.split("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-tight">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.02,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}
