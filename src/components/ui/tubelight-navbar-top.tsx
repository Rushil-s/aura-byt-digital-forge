"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { DivideIcon as LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface TopNavBarProps {
  items: NavItem[]
  className?: string
}

export function TubelightTopNavBar({ items, className }: TopNavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Update active tab based on current route
  useEffect(() => {
    const currentItem = items.find(item => item.url === location.pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [location.pathname, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-background/80 backdrop-blur-lg",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                <img
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt Logo"
                  className="w-6 h-6 lg:w-8 lg:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl gradient-text">
                AuraByt
              </span>
              <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">
                IT Consultancy
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex">
            <div className="flex items-center gap-1 bg-background/50 border border-border/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-medium px-6 py-3 rounded-full transition-all duration-300",
                      "text-muted-foreground hover:text-foreground",
                      isActive && "text-primary",
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="topLamp"
                        className="absolute inset-0 w-full bg-primary/10 rounded-full border border-primary/20"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                          <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                          <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                          <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center gap-1 bg-background/50 border border-border/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
              {items.slice(0, 4).map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name

                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative cursor-pointer p-2 rounded-full transition-all duration-300",
                      "text-muted-foreground hover:text-foreground",
                      isActive && "text-primary",
                    )}
                  >
                    <Icon size={18} strokeWidth={2.5} className="relative z-10" />
                    {isActive && (
                      <motion.div
                        layoutId="topLampMobile"
                        className="absolute inset-0 w-full bg-primary/10 rounded-full border border-primary/20"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-t-full">
                          <div className="absolute w-8 h-4 bg-primary/20 rounded-full blur-sm -top-1 -left-1" />
                          <div className="absolute w-6 h-4 bg-primary/20 rounded-full blur-sm -top-0.5" />
                        </div>
                      </motion.div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}