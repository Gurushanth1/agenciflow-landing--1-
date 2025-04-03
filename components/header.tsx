"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Update scroll position for next comparison
      setLastScrollY(currentScrollY)
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="AgenciFlow Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-md">AgenciFlow</span>
          </div>

          <div className="flex items-center">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:text-primary"
              >
                Our Services
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact Us
              </Link>
              <Link
                href="#contact"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
} 