'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'
import { Bot, Sliders, Brain, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Bot,
    titleEN: 'Telegram Bots',
    titleRU: 'Telegram-боты',
    tagsEN: ['aiogram 3.x', 'FSM flows', 'Admin panels'],
    tagsRU: ['aiogram 3.x', 'FSM диалоги', 'Admin-панели'],
    color: 'var(--color-accent)',
  },
  {
    icon: Sliders,
    titleEN: 'Automation',
    titleRU: 'Автоматизация',
    tagsEN: ['Multi-account', 'Anti-ban', '24/7 VPS'],
    tagsRU: ['Мультиаккаунт', 'Anti-ban', '24/7 VPS'],
    color: 'var(--color-ink-2)',
  },
  {
    icon: Brain,
    titleEN: 'AI Integration',
    titleRU: 'AI интеграция',
    tagsEN: ['GPT-4o', 'Claude API', 'fal.ai'],
    tagsRU: ['GPT-4o', 'Claude API', 'fal.ai'],
    color: 'var(--color-accent)',
  },
  {
    icon: Smartphone,
    titleEN: 'Mini Apps',
    titleRU: 'Mini Apps',
    tagsEN: ['TMA', 'FastAPI', 'Full-stack'],
    tagsRU: ['TMA', 'FastAPI', 'Full-stack'],
    color: 'var(--color-signal)',
  },
]

export function SocialProof() {
  const { lang } = useLang()

  return (
    <section
      className="py-0 overflow-hidden bg-background"
      style={{
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.titleEN}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group px-6 py-8 flex flex-col gap-3 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                {/* Icon + title row */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
                    style={{
                      background: 'var(--color-paper-2)',
                      border: '1px solid var(--color-rule)',
                      color: s.color,
                    }}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span
                    className="font-semibold text-sm text-foreground"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {lang === 'en' ? s.titleEN : s.titleRU}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-col gap-1.5">
                  {(lang === 'en' ? s.tagsEN : s.tagsRU).map(tag => (
                    <span
                      key={tag}
                      className="text-xs flex items-center gap-1.5"
                      style={{
                        fontFamily: 'var(--font-jetbrains)',
                        color: 'var(--color-muted-foreground)',
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: s.color }}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
