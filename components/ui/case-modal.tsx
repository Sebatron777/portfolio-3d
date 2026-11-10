'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Bot, Cog, Brain, X } from 'lucide-react'
import { useLang } from '@/context/lang'
import { StackBadge } from './stack-badge'

export interface CaseDetail {
  title: string
  category: 'telegram-bot' | 'automation' | 'ai-tool'
  stack: string[]
  descriptionEN: string
  descriptionRU: string
  highlights: string[]
  featuresEN?: string[]
  featuresRU?: string[]
  challengeEN?: string
  challengeRU?: string
  resultEN?: string
  resultRU?: string
  link?: string
}

const categoryColors: Record<string, string> = {
  'telegram-bot': 'var(--color-accent)',
  'automation':   'var(--color-tag-automation)',
  'ai-tool':      'var(--color-tag-ai)',
}

const categoryLabels: Record<string, { en: string; ru: string }> = {
  'telegram-bot': { en: 'Telegram Bot', ru: 'Telegram Бот' },
  'automation':   { en: 'Automation',   ru: 'Автоматизация' },
  'ai-tool':      { en: 'AI Tool',      ru: 'AI инструмент' },
}

const categoryIcon: Record<string, React.ReactNode> = {
  'telegram-bot': <Bot size={20} />,
  'automation':   <Cog size={20} />,
  'ai-tool':      <Brain size={20} />,
}

interface CaseModalProps {
  item: CaseDetail | null
  onClose: () => void
}

export function CaseModal({ item, onClose }: CaseModalProps) {
  const { lang } = useLang()

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  const color = item ? categoryColors[item.category] : 'var(--color-accent)'

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 cursor-pointer"
            style={{ background: 'color-mix(in oklab, var(--color-paper) 80%, black)', backdropFilter: 'blur(8px)' }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto rounded-2xl"
              style={{
                background: 'var(--color-paper-2)',
                border: '1px solid var(--color-rule)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Header */}
              <div
                className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4"
                style={{
                  background: 'var(--color-paper-2)',
                  borderBottom: '1px solid var(--color-rule)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `color-mix(in oklab, ${color} 15%, transparent)`,
                      border: `1px solid color-mix(in oklab, ${color} 30%, transparent)`,
                      color,
                    }}
                  >
                    {categoryIcon[item.category]}
                  </div>
                  <div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full mb-1 inline-block"
                      style={{
                        fontFamily: 'var(--font-jetbrains)',
                        background: `color-mix(in oklab, ${color} 15%, transparent)`,
                        border: `1px solid color-mix(in oklab, ${color} 35%, transparent)`,
                        color,
                      }}
                    >
                      {categoryLabels[item.category][lang]}
                    </span>
                    <h2
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-ink)' }}
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-150 hover:bg-[var(--color-paper-3)]"
                  style={{ color: 'var(--color-muted-foreground)' }}
                  aria-label="Close dialog"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 300,
                    color: 'var(--color-ink-2)',
                  }}
                >
                  {lang === 'en' ? item.descriptionEN : item.descriptionRU}
                </p>

                {/* Link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      background: `color-mix(in oklab, ${color} 15%, transparent)`,
                      border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`,
                      color: color,
                    }}
                  >
                    {lang === 'en' ? 'Open Bot' : 'Открыть бота'}
                  </a>
                )}


                {/* Features */}
                {((lang === 'en' && item.featuresEN) || (lang === 'ru' && item.featuresRU)) && (
                  <div>
                    <h3
                      className="text-sm font-semibold mb-3"
                      style={{ fontFamily: 'var(--font-jetbrains)', color: color }}
                    >
                      {lang === 'en' ? 'Key Features' : 'Ключевые функции'}
                    </h3>
                    <ul className="space-y-2">
                      {(lang === 'en' ? item.featuresEN! : item.featuresRU!).map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm"
                          style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-ink-2)' }}
                        >
                          <span style={{ color: color, marginTop: '2px' }} aria-hidden="true">•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenge */}
                {(item.challengeEN || item.challengeRU) && (
                  <div
                    className="rounded-xl p-4"
                    style={{ background: 'var(--color-paper-3)', border: '1px solid var(--color-rule)' }}
                  >
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--color-muted)' }}
                    >
                      {lang === 'en' ? 'Challenge' : 'Задача'}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-ink-2)' }}
                    >
                      {lang === 'en' ? item.challengeEN : item.challengeRU}
                    </p>
                  </div>
                )}

                {/* Result */}
                {(item.resultEN || item.resultRU) && (
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: `color-mix(in oklab, ${color} 8%, transparent)`,
                      border: `1px solid color-mix(in oklab, ${color} 25%, transparent)`,
                    }}
                  >
                    <h3
                      className="text-sm font-semibold mb-2"
                      style={{ fontFamily: 'var(--font-jetbrains)', color: color }}
                    >
                      {lang === 'en' ? 'Result' : 'Результат'}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--color-ink-2)' }}
                    >
                      {lang === 'en' ? item.resultEN : item.resultRU}
                    </p>
                  </div>
                )}

                {/* Highlights */}
                <div>
                  <h3
                    className="text-sm font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--color-muted-foreground)' }}
                  >
                    {lang === 'en' ? 'Highlights' : 'Особенности'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map(h => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                          background: 'var(--color-paper-3)',
                          border: '1px solid var(--color-rule)',
                          color: 'var(--color-muted-foreground)',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div>
                  <h3
                    className="text-sm font-semibold mb-3"
                    style={{ fontFamily: 'var(--font-jetbrains)', color: 'var(--color-muted-foreground)' }}
                  >
                    {lang === 'en' ? 'Tech Stack' : 'Стек'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map(s => (
                      <StackBadge key={s}>{s}</StackBadge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div
                className="sticky bottom-0 p-4"
                style={{
                  background: 'var(--color-paper-2)',
                  borderTop: '1px solid var(--color-rule)',
                }}
              >
                <a
                  href="https://t.me/AIbert_Einsteln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    background: 'var(--color-accent)',
                    color: 'var(--color-accent-ink)',
                  }}
                >
                  {lang === 'en' ? 'Discuss a similar project' : 'Обсудить похожий проект'}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
