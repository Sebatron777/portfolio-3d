'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'
import { StackBadge } from './stack-badge'
import { GlowCard } from './spotlight-card'
import type { ReactNode } from 'react'

interface CaseCardProps {
  title: string
  category: 'telegram-bot' | 'automation' | 'ai-tool'
  stack: string[]
  descriptionEN: string
  descriptionRU: string
  highlights: string[]
  icon?: ReactNode
  onClick?: () => void
}

const categoryColors: Record<string, string> = {
  'telegram-bot': 'var(--color-accent)',
  'automation':   'var(--color-tag-automation)',
  'ai-tool':      'var(--color-tag-ai)',
}

const categoryGlow: Record<string, 'cyan' | 'orange' | 'purple'> = {
  'telegram-bot': 'cyan',
  'automation':   'orange',
  'ai-tool':      'purple',
}

const categoryLabels: Record<string, { en: string; ru: string }> = {
  'telegram-bot': { en: 'Telegram Bot', ru: 'Telegram Бот' },
  'automation':   { en: 'Automation',   ru: 'Автоматизация' },
  'ai-tool':      { en: 'AI Tool',      ru: 'AI инструмент' },
}

export function CaseCard({ title, category, stack, descriptionEN, descriptionRU, highlights, icon, onClick }: CaseCardProps) {
  const { lang } = useLang()
  const color = categoryColors[category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="cursor-pointer group h-full flex flex-col items-stretch"
    >
      <GlowCard
        customSize
        glowColor={categoryGlow[category]}
        className="w-full h-full flex flex-col"
      >
        {/* Compact Visual Header Area */}
        <div
          className="w-full h-16 relative flex-shrink-0 flex items-center justify-between px-4 border-b border-[var(--color-rule)]"
          style={{ background: 'var(--color-paper-3)' }}
        >
          {/* Category badge */}
          <span
            className="text-[0.7rem] px-2.5 py-1 rounded-full font-medium"
            style={{
              fontFamily: 'var(--font-jetbrains)',
              background: `color-mix(in oklab, ${color} 15%, transparent)`,
              border: `1px solid color-mix(in oklab, ${color} 35%, transparent)`,
              color,
            }}
          >
            {categoryLabels[category][lang]}
          </span>

          {/* Compact Corner Icon Box */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
            style={{
              background: `color-mix(in oklab, ${color} 15%, transparent)`,
              border: `1px solid color-mix(in oklab, ${color} 35%, transparent)`,
              color,
            }}
          >
            <div className="scale-[0.62] flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3
              className="text-lg font-bold leading-snug"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {title}
            </h3>
          </div>

          <p
            className="text-sm leading-relaxed mb-6 flex-1"
            style={{ color: 'var(--color-ink-2)', fontFamily: 'var(--font-dm-sans)' }}
          >
            {lang === 'en' ? descriptionEN : descriptionRU}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-5 mt-2">
            {highlights.map(h => (
              <span
                key={h}
                className="text-[0.7rem] px-2 py-0.5 rounded"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  background: 'var(--color-paper-2)',
                  color: 'var(--color-muted-foreground)',
                  border: '1px solid var(--color-rule)',
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-[var(--color-rule)]">
            {stack.map(s => (
              <StackBadge key={s}>
                {s}
              </StackBadge>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  )
}
