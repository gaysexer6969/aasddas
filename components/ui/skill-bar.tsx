"use client"
import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-[#E0E0E0]">{name}</span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => {
            const filled = Math.ceil(level / 20) > i
            return (
              <motion.div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${filled ? "bg-[#00ADB5]" : "bg-[#2C2C2C]"}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: delay + i * 0.1 }}
                viewport={{ once: true }}
              />
            )
          })}
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#2C2C2C] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00ADB5] to-[#03DAC6]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut", delay }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}
