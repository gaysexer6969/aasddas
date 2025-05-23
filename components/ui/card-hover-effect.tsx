"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={idx}
          className="relative group block p-2 h-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-[#1E1E1E] border border-[#2C2C2C] shadow-md"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          ></motion.div>

          <motion.div
            className={cn(
              "absolute inset-0 rounded-xl bg-gradient-to-r from-[#00ADB5] to-[#03DAC6] opacity-0",
              hoveredIndex === idx ? "opacity-10" : "opacity-0",
            )}
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === idx ? 0.1 : 0,
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          <div className="relative z-10 p-5">
            <div className="p-4">
              <h3 className="font-medium text-xl mb-2 text-[#E0E0E0]">{item.title}</h3>
              <p className="text-[#B0B0B0] text-sm mb-4">{item.description}</p>

              <div className="flex items-center text-[#00ADB5] text-sm font-medium">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
