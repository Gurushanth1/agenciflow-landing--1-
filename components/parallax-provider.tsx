"use client"

import React, { createContext, useContext, type ReactNode } from "react"

type ParallaxContextType = {
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void
  unregisterSection: (id: string) => void
}

const ParallaxContext = createContext<ParallaxContextType | null>(null)

export const useParallax = () => {
  const context = useContext(ParallaxContext)
  if (!context) {
    throw new Error("useParallax must be used within a ParallaxProvider")
  }
  return context
}

export const ParallaxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const sections = React.useRef<Record<string, React.RefObject<HTMLElement>>>({})

  const registerSection = (id: string, ref: React.RefObject<HTMLElement>) => {
    sections.current[id] = ref
  }

  const unregisterSection = (id: string) => {
    delete sections.current[id]
  }

  return <ParallaxContext.Provider value={{ registerSection, unregisterSection }}>{children}</ParallaxContext.Provider>
}

