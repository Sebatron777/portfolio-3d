'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'


export function Contact() {
  const { lang } = useLang()

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-background">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability badge */}
          <div className="inline-flex mb-8">
            <span
              className="px-4 py-2 rounded-full text-sm font-mono"
              style={{
                fontFamily: 'var(--font-jetbrains)',
                background: 'color-mix(in oklab, var(--color-signal) 12%, transparent)',
                border: '1px solid color-mix(in oklab, var(--color-signal) 30%, transparent)',
                color: 'var(--color-signal)',
                fontSize: '0.8rem',
              }}
            >
              ✦ {lang === 'en' ? 'Available: Response within 24h' : 'Доступен: Отвечу в течение 24ч'}
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: 'var(--font-syne)', color: 'var(--color-ink)' }}
          >
            {lang === 'en' ? 'Ready to build something?' : 'Готовы что-то построить?'}
          </h2>

          {/* Subtext */}
          <p
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 300,
              color: 'var(--color-muted-foreground)',
              lineHeight: 1.7,
            }}
          >
            {lang === 'en'
              ? 'Open to freelance projects, long-term contracts, and interesting automation challenges.'
              : 'Открыт к фриланс-проектам, долгосрочным контрактам и интересным задачам по автоматизации.'}
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center mb-12">
            <a
              href="https://t.me/AIbert_Einsteln"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-4 rounded-full text-base font-bold transition-colors duration-200 overflow-hidden"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                background: 'var(--color-signal)',
                color: 'var(--color-signal-ink)',
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {lang === 'en' ? 'Write on Telegram' : 'Написать в Telegram'}
              </span>
            </a>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/Sebatron777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            style={{ fontFamily: 'var(--font-jetbrains)' }}
          >
            <span>github.com/Sebatron777</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
