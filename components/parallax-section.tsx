"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { useParallax } from "./parallax-provider"
import { v4 as uuidv4 } from "uuid"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, className = "", speed = 0.5 }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [offset, setOffset] = useState(0)
  const id = useRef(uuidv4())
  const { registerSection, unregisterSection } = useParallax()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(section)

    const handleScroll = () => {
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const scrollPosition = (windowHeight - rect.top) / (windowHeight + rect.height)
        setOffset(scrollPosition * speed * 100)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div
      ref={sectionRef}
      className={`${className} relative transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: `translateY(${isVisible ? 0 : 20}px)`,
        transition: "transform 0.7s ease-out, opacity 0.7s ease-out",
      }}
    >
      {children}
    </div>
  )
}

