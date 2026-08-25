'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'


export function Contact() {
  const { lang } = useLang()

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden" style={{ background: 'rgba(9,9,9,0.12)' }}>
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
              className="px-4 py-2 rounded-full text-xs"
              style={{
                fontFamily: 'var(--font-jetbrains)',
                background: 'rgba(175, 80, 255, 0.08)',
                border: '1px solid rgba(175, 80, 255, 0.25)',
                color: '#af50ff',
                letterSpacing: '0.07em',
              }}
            >
              ✦ {lang === 'en' ? 'Available · Response within 24h' : 'Доступен · Отвечу в течение 24ч'}
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl md:text-6xl font-normal mb-8 leading-none"
          >
            <span className="italic block text-[#e1bdff] font-light mb-1" style={{ fontFamily: 'var(--font-grandslang)' }}>
              {lang === 'en' ? 'Ready to build' : 'Готовы что-то'}
            </span>
            <span className="font-bold text-white uppercase text-4xl md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              {lang === 'en' ? 'something?' : 'построить?'}
            </span>
          </h2>

          {/* Subtext */}
          <p
            className="text-lg mb-12 max-w-2xl mx-auto font-light"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              color: '#828384',
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
              href="https://t.me/ad_min_group"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 rounded-[1584px] text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(175,80,255,0.45)]"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                background: '#af50ff',
                color: '#090909',
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {lang === 'en' ? 'Write on Telegram' : 'Написать в Telegram'}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/Sebatron777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-white block mb-16"
            style={{
              fontFamily: 'var(--font-jetbrains)',
              color: '#474747',
            }}
          >
            github.com/Sebatron777
          </a>
        </motion.div>
      </div>
    </section>
  )
}
