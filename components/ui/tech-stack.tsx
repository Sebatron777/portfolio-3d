'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'
import { StackBadge } from './stack-badge'
import { GlowCard } from './spotlight-card'

import { Server, Database, Cloud, Brain, Monitor, Wrench } from 'lucide-react'
import { type ReactNode } from 'react'

const categories: { titleEN: string; titleRU: string; icon: ReactNode; tags: string[]; glow: 'cyan' | 'blue' | 'orange' | 'purple' | 'green' | 'red'; color: string }[] = [
  {
    titleEN: 'Backend',
    titleRU: 'Бэкенд',
    icon: <Server size={20} />,
    tags: ['Python 3.11+', 'FastAPI', 'aiogram 3.x', 'Pyrogram', 'Telethon'],
    glow: 'cyan',
    color: 'var(--color-accent)',
  },
  {
    titleEN: 'Database',
    titleRU: 'Базы данных',
    icon: <Database size={20} />,
    tags: ['Supabase', 'SQLite WAL', 'Redis'],
    glow: 'blue',
    color: 'var(--color-tag-infra)',
  },
  {
    titleEN: 'Infrastructure',
    titleRU: 'Инфраструктура',
    icon: <Cloud size={20} />,
    tags: ['Systemd', 'VPS', 'Vercel', 'Docker'],
    glow: 'orange',
    color: 'var(--color-tag-automation)',
  },
  {
    titleEN: 'AI',
    titleRU: 'AI',
    icon: <Brain size={20} />,
    tags: ['OpenAI GPT-4o', 'Claude API', 'fal.ai', 'HeyGen'],
    glow: 'purple',
    color: 'var(--color-tag-ai)',
  },
  {
    titleEN: 'Frontend',
    titleRU: 'Фронтенд',
    icon: <Monitor size={20} />,
    tags: ['React Native', 'Expo v52', 'TMA', 'Next.js', 'TypeScript'],
    glow: 'green',
    color: 'var(--color-signal)',
  },
  {
    titleEN: 'Tools',
    titleRU: 'Инструменты',
    icon: <Wrench size={20} />,
    tags: ['Claude Code', 'Cursor', 'Git'],
    glow: 'red',
    color: 'var(--color-error)',
  },
]

export function TechStack() {
  const { lang } = useLang()

  return (
    <section id="stack" className="relative py-24 px-6 overflow-hidden" style={{ background: 'color-mix(in oklab, var(--color-paper) 80%, transparent)' }}>
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            {lang === 'en' ? 'Tech Stack' : 'Технологии'}
          </h2>
          <p style={{ color: 'var(--color-ink-2)', fontFamily: 'var(--font-dm-sans)' }}>
            {lang === 'en' ? 'Tools I use to build production systems' : 'Инструменты для продакшен-систем'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.titleEN}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full flex flex-col items-stretch group"
            >
              <GlowCard customSize glowColor={cat.glow} className="w-full h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: `color-mix(in oklab, ${cat.color} 14%, transparent)`,
                      border: `1px solid color-mix(in oklab, ${cat.color} 35%, transparent)`,
                      color: cat.color,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {lang === 'en' ? cat.titleEN : cat.titleRU}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <StackBadge key={tag}>
                      {tag}
                    </StackBadge>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
