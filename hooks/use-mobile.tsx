"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Initial check
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount
    checkIfMobile()

    // Add resize listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [breakpoint])

  return isMobile
}
