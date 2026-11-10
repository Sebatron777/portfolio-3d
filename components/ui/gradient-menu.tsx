'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Home, Briefcase, Code2, User, Mail, Menu, X } from 'lucide-react'
import { useLang } from '@/context/lang'

const navItems = [
  { titleEN: 'Home',    titleRU: 'Главная',  href: '#hero',    icon: <Home size={18} /> },
  { titleEN: 'Cases',   titleRU: 'Кейсы',    href: '#cases',   icon: <Briefcase size={18} /> },
  { titleEN: 'Stack',   titleRU: 'Стек',     href: '#stack',   icon: <Code2 size={18} /> },
  { titleEN: 'About',   titleRU: 'Обо мне',  href: '#about',   icon: <User size={18} /> },
  { titleEN: 'Contact', titleRU: 'Контакт',  href: '#contact', icon: <Mail size={18} /> },
]

export function GradientMenu() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-300"
      style={{
        background: scrolled ? 'var(--color-paper)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-rule)' : 'transparent'}`,
      }}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-75 origin-left"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          background: 'var(--color-accent)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="text-sm font-mono font-medium"
          style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--color-ink)' }}
        >
          SL.dev
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.titleEN}
              href={item.href}
              className="group relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--color-muted-foreground)', fontFamily: 'var(--font-dm-sans)' }}
            >
              <span className="flex items-center gap-2 relative z-10">
                <span
                  className="text-base transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {item.icon}
                </span>
                <span
                  className="transition-colors duration-200 group-hover:text-foreground"
                >
                  {lang === 'en' ? item.titleEN : item.titleRU}
                </span>
              </span>
              {/* Hover background pill */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"
                style={{ background: 'var(--color-paper-2)' }}
              />
              {/* Underline */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-3/4 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full origin-center"
                style={{
                  background: 'var(--color-accent)',
                }}
              />
            </a>
          ))}
        </div>

        {/* Right side: Lang toggle + Mobile button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-200 hover:border-accent hover:text-foreground"
            style={{
              border: '1px solid var(--color-rule)',
              color: 'var(--color-muted-foreground)',
              background: 'var(--color-paper-2)',
            }}
          >
            {lang === 'en' ? 'RU' : 'EN'}
          </button>

          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pb-4 flex flex-col gap-2 bg-background border-b border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.titleEN}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 text-foreground bg-muted/30"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                <span style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
                <span className="text-sm font-medium">{lang === 'en' ? item.titleEN : item.titleRU}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
