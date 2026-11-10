'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'
import { TgChatDemo } from './tg-chat-demo'


export function Hero() {
  const { lang } = useLang()

  return (
    <section id="hero" className="relative w-full min-h-dvh flex flex-col justify-end pt-28 pb-16 overflow-hidden">
      {/* Background Linear Gradient Backplate: dark on the left for text contrast, transparent on the right for graphics */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          background: 'linear-gradient(to right, rgba(5, 5, 6, 0.90) 0%, rgba(5, 5, 6, 0.70) 45%, rgba(5, 5, 6, 0.10) 80%, transparent 100%)' 
        }} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

          {/* LEFT — text */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 inline-flex"
            >
              <span
                className="px-4 py-2 rounded-full text-sm inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  background: 'var(--color-paper-2)',
                  border: '1px solid var(--color-rule)',
                  backdropFilter: 'blur(12px)',
                  color: 'var(--color-ink-2)',
                  fontSize: '0.8rem',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: 'var(--color-signal)' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: 'var(--color-signal)' }}
                  />
                </span>
                {lang === 'en'
                  ? 'Open to projects: Reply within 24h'
                  : 'Открыт к проектам: Ответ за 24ч'}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="leading-tight" style={{ fontFamily: 'var(--font-syne)', lineHeight: lang === 'ru' ? 1.20 : 1.10 }}>
                <span className="block text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-2">
                  {lang === 'en' ? 'I Build' : 'Разработка'}
                </span>
                <span 
                  className="block text-4xl md:text-6xl lg:text-7xl font-black text-foreground"
                  style={{ letterSpacing: lang === 'ru' ? '-0.02em' : 'normal' }}
                >
                  {lang === 'en' ? 'Telegram Bots' : 'TELEGRAM BOTS'}
                </span>
                <span
                  className="block text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 text-muted-foreground"
                >
                  {lang === 'en' ? 'That Actually Work.' : 'Профессиональные решения.'}
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-10 max-w-xl text-base md:text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-ink-2)', 
                fontFamily: 'var(--font-dm-sans)', 
                fontWeight: 500,
                background: 'var(--color-paper-2)',
                padding: '12px 20px',
                borderRadius: '12px',
                borderLeft: '2px solid var(--color-accent)',
                marginLeft: '-20px',
              }}
            >
              {lang === 'en'
                ? 'Multi-account automation systems, AI-powered bots, Telegram Mini Apps: Python, FastAPI and Pyrogram. 24/7 on VPS.'
                : 'Системы автоматизации, AI-боты, Telegram Mini Apps: Python, FastAPI и Pyrogram. Деплой 24/7 на VPS.'}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#cases"
                className="group px-8 py-4 rounded-full text-base font-semibold transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  border: '1px solid var(--color-rule-2)',
                  color: 'var(--color-ink)',
                  background: 'var(--color-paper-2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="inline-flex items-center gap-2">
                  {lang === 'en' ? 'View Cases' : 'Смотреть кейсы'}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-y-1">↓</span>
                </span>
              </a>
              <a
                href="https://t.me/AIbert_Einsteln"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-full text-base font-bold transition-colors duration-200 overflow-hidden"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  background: 'var(--color-signal)',
                  color: 'var(--color-signal-ink)',
                }}
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {lang === 'en' ? 'Hire Me' : 'Написать'}
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Telegram chat widget */}
          <div className="flex-shrink-0 flex items-end justify-center lg:justify-end pb-4">
            <TgChatDemo />
          </div>

        </div>
      </div>
    </section>
  )
}
