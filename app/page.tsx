"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { SparklesCore } from "@/components/ui/sparkles"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import { SkillBar } from "@/components/ui/skill-bar"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const isMobile = useMobile()

  const handleViewProjects = () => {
    if (isMobile) {
      // On mobile, scroll directly to projects
      if (projectsRef.current) {
        projectsRef.current.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // On desktop, scroll to about section (which shows both about and projects)
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const projects = [
    {
      title: "Papers, Please",
      description: "Improved archive for MIT Manipal past papers.",
      link: "https://papers.000196.xyz/",
    },
    {
      title: "English-to-Bhojpuri Translator",
      description: "mBART model trained on a custom-built dataset.",
      link: "https://github.com/NilayShenai/English-to-Bhojpuri-Translator",
    },
    {
      title: "Tarkus",
      description: "OSDEV Project.",
      link: "https://github.com/NilayShenai/Tarkus",
    },
    {
      title: "FARTCHAN",
      description: "Flask-Accelerated Replicated Transaction Chain and Hashing Algorithm Network.",
      link: "https://github.com/NilayShenai/fartchan",
    },
    {
      title: "MehuLinux",
      description: "Lightweight Linux-From-Scratch system with a minimal setup.",
      link: "https://github.com/NilayShenai/MehuLinux",
    },
    {
      title: "BiGaSS",
      description: "Bidirectional Gapping Swap Sort algorithm.",
      link: "https://github.com/NilayShenai/BiGaSS",
    },
  ]

  const skills = [
    // Frontend
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 78, category: "Frontend" },

    // Backend
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "Python", level: 88, category: "Backend" },
    { name: "Rust", level: 65, category: "Backend" },

    // Database
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "SQL", level: 80, category: "Database" },

    // DevOps/Tools
    { name: "Docker", level: 72, category: "DevOps" },
    { name: "AWS", level: 68, category: "DevOps" },

    // Data Science/AI
    { name: "TensorFlow", level: 60, category: "Data Science" },
    { name: "Pandas", level: 85, category: "Data Science" },
    { name: "GraphQL", level: 63, category: "API" },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-[#E0E0E0] relative overflow-hidden">
      <BackgroundGradientAnimation
        containerClassName="fixed inset-0 -z-10 opacity-20"
        className="h-full w-full"
        gradientBackgroundStart="#121212"
        gradientBackgroundEnd="#121212"
        firstColor="#00ADB5"
        secondColor="#03DAC6"
        thirdColor="#121212"
        fourthColor="#2C2C2C"
        size="30%"
        blendingValue="hard-light"
      />

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
          <div className="absolute inset-0 w-full h-full">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={50}
              className="w-full h-full"
              particleColor="#00ADB5"
              speed={0.5}
            />
          </div>

          <div className="z-10 text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nilay D<span className="text-[#00ADB5]">.</span> Shenai
            </motion.h1>

            <motion.p
              className="text-xl text-[#B0B0B0] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A normal CS aficionado.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HoverBorderGradient
                as="button"
                onClick={handleViewProjects}
                className="group relative rounded-md px-6 py-3 text-[#E0E0E0] font-medium"
                containerClassName="bg-[#1E1E1E]"
                from="#00ADB5"
                to="#03DAC6"
                duration={500}
              >
                <span className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </HoverBorderGradient>

              <div className="flex gap-6 items-center">
                <Link href="https://github.com/NilayShenai" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-[#B0B0B0] transition-colors hover:text-[#03DAC6]" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/nilay-shenai-7b5211183/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-[#B0B0B0] transition-colors hover:text-[#03DAC6]" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:nilayshenai@gmail.com">
                  <Mail className="h-5 w-5 text-[#B0B0B0] transition-colors hover:text-[#03DAC6]" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-24 px-6 container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-12 inline-flex items-center">
              <span className="mr-3 h-px w-8 bg-[#00ADB5]"></span>
              About
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[#B0B0B0] leading-relaxed mb-6">
                  I'm a computer science student at MIT Manipal with interests in machine learning, Python, Rust,
                  DevOps, systems programming, and some electrical engineering. I focus on building practical tools and
                  working with production-grade systems, often combining low-level problem-solving with hands-on
                  tinkering and messing with weird shit.
                </p>
                <p className="text-[#B0B0B0] leading-relaxed">
                  I also explore music theory and modular Eurorack synthesis. I'm into unconventional projects and
                  experiments that sometimes lead to useful or unexpected insights.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#1E1E1E] rounded-lg border border-[#2C2C2C]">
                  <h3 className="text-lg font-medium mb-2">Education</h3>
                  <p className="text-sm text-[#B0B0B0]">B.Tech CSE, MIT Manipal</p>
                </div>
                <div className="p-6 bg-[#1E1E1E] rounded-lg border border-[#2C2C2C]">
                  <h3 className="text-lg font-medium mb-2">Experience</h3>
                  <p className="text-sm text-[#B0B0B0]">2+ years in software development</p>
                </div>
                <div className="p-6 bg-[#1E1E1E] rounded-lg border border-[#2C2C2C]">
                  <h3 className="text-lg font-medium mb-2">Location</h3>
                  <p className="text-sm text-[#B0B0B0]">Dombivli, India</p>
                </div>
                <div className="p-6 bg-[#1E1E1E] rounded-lg border border-[#2C2C2C]">
                  <h3 className="text-lg font-medium mb-2">Interests</h3>
                  <p className="text-sm text-[#B0B0B0]">ML, Game Dev, Sound Designing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-24 px-6 container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-12 inline-flex items-center">
              <span className="mr-3 h-px w-8 bg-[#00ADB5]"></span>
              Notable Projects
            </h2>

            <CardHoverEffect items={projects} className="py-0" />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-24 px-6 container mx-auto max-w-5xl bg-[#121212]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-12 inline-flex items-center">
              <span className="mr-3 h-px w-8 bg-[#00ADB5]"></span>
              Skills
            </h2>

            <div className="p-8 bg-[#1E1E1E] rounded-lg border border-[#2C2C2C]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Frontend", "Backend", "Database", "DevOps", "Data Science"].map((category) => (
                  <div key={category} className={category === "Data Science" ? "md:col-span-2" : ""}>
                    <h3 className="text-xl font-medium mb-6 text-[#00ADB5]">{category}</h3>
                    <div className="space-y-6">
                      {skills
                        .filter(
                          (skill) =>
                            skill.category === category || (category === "Data Science" && skill.category === "API"),
                        )
                        .map((skill, index) => (
                          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 0.1} />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
