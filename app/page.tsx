'use client'

import { GradientMenu } from '@/components/ui/gradient-menu'
import { Hero } from '@/components/ui/hero'
import { Services } from '@/components/ui/services'
import { Cases } from '@/components/ui/cases'
import { TechStack } from '@/components/ui/tech-stack'
import { About } from '@/components/ui/about'
import { Contact } from '@/components/ui/contact'
import { GlobalScrollVideo } from '@/components/ui/global-scroll-video'

export default function Home() {
  return (
    <main className="min-h-dvh relative bg-background">
      {/* Single canvas background — fixed, synced to page scroll */}
      <GlobalScrollVideo />

      {/* All content scrolls OVER the background canvas */}
      <div className="relative z-10">
        <GradientMenu />
        <Hero />
        <Services />
        <Cases />
        <TechStack />
        <About />
        <Contact />
        <footer
          className="py-8 text-center text-xs text-muted-foreground bg-background"
        >
          © 2025 Serhii Lysak: Telegram Bot Developer
        </footer>
      </div>
    </main>
  )
}

