import { Home, User, Briefcase, FileText, Phone } from 'lucide-react'
import { LightweightNavBar } from "@/components/ui/lightweight-navbar"

export function TubelightTopNavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Portfolio', url: '/portfolio', icon: FileText },
    { name: 'Contact', url: '/contact', icon: Phone }
  ]

  return <LightweightNavBar items={navItems} />
}