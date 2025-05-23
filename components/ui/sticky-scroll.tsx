"use client"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const containerRect = ref.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const viewportHeight = window.innerHeight

      // Calculate the scroll position relative to the container
      const scrollPosition = -containerTop
      const scrollRatio = scrollPosition / (containerHeight - viewportHeight)
      const cardIndex = Math.min(Math.floor(scrollRatio * content.length), content.length - 1)

      setActiveCard(Math.max(0, cardIndex))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [content.length])

  return (
    <motion.div ref={ref} className="relative h-[30rem] md:h-[40rem] overflow-hidden flex justify-center">
      <div className="relative w-full max-w-5xl">
        <div className="sticky top-10 flex h-fit flex-col items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
            <div className="h-[30rem] flex flex-col justify-start">
              {content.map((item, index) => (
                <motion.div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={cn("w-full h-fit p-6 rounded-lg", activeCard === index ? "opacity-100" : "opacity-40")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.4,
                    y: activeCard === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-2 text-[#E0E0E0]">{item.title}</h2>
                  <p className="text-[#B0B0B0]">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="h-[30rem] flex items-center justify-center p-4">
              <motion.div
                className="w-full h-full bg-[#1E1E1E] rounded-lg border border-[#2C2C2C] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center p-6">
                  <h3 className="text-xl font-medium mb-2">{content[activeCard].title}</h3>
                  <p className="text-[#B0B0B0]">{content[activeCard].description}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
