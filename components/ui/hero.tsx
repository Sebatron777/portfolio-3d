'use client'

import { motion } from 'motion/react'
import { useLang } from '@/context/lang'
import { TgChatDemo } from './tg-chat-demo'


export function Hero() {
  const { lang } = useLang()

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-end pt-28 pb-16 overflow-hidden">
      {/* Background Linear Gradient Backplate: dark on the left for text contrast, transparent on the right for graphics */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ 
          background: 'linear-gradient(to right, rgba(9, 9, 9, 0.95) 0%, rgba(9, 9, 9, 0.75) 45%, rgba(9, 9, 9, 0.08) 80%, transparent 100%)' 
        }} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

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
                className="px-4 py-2 rounded-full text-xs inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  background: 'rgba(247,249,250,0.08)',
                  border: '1px solid rgba(247,249,250,0.15)',
                  backdropFilter: 'blur(12px)',
                  color: '#f7f9fa',
                  letterSpacing: '0.07em',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: '#af50ff' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: '#af50ff' }}
                  />
                </span>
                {lang === 'en'
                  ? 'Open to projects · Reply within 24h'
                  : 'Открыт к проектам · Ответ за 24ч'}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="leading-none" style={{ lineHeight: 0.95 }}>
                <span 
                  className="block text-5xl md:text-7xl lg:text-[7.5rem] font-light text-[#e1bdff] italic mb-1"
                  style={{ fontFamily: 'var(--font-grandslang)', letterSpacing: '-0.03em' }}
                >
                  {lang === 'en' ? 'I Build' : 'Я строю'}
                </span>
                <span 
                  className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {lang === 'en' ? 'Telegram Bots' : 'TELEGRAM BOTS'}
                </span>
                <span
                  className="block text-3xl md:text-5xl lg:text-[3.5rem] font-light text-[#e1bdff] italic mt-2"
                  style={{ fontFamily: 'var(--font-grandslang)', letterSpacing: '-0.03em' }}
                >
                  {lang === 'en' ? 'with Auto Uptime.' : 'с вечным аптаймом.'}
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
                color: '#828384', 
                fontFamily: 'var(--font-dm-sans)', 
                fontWeight: 400,
                background: 'rgba(175, 80, 255, 0.03)',
                padding: '12px 20px',
                borderRadius: '12px',
                borderLeft: '2px solid #af50ff',
                marginLeft: '-20px',
              }}
            >
              {lang === 'en'
                ? 'Multi-account automation systems, AI-powered bots, Telegram Mini Apps — Python, FastAPI & Pyrogram. 24/7 on VPS.'
                : 'Системы автоматизации, AI-боты, Telegram Mini Apps — Python, FastAPI и Pyrogram. Деплой 24/7 на VPS.'}
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
                className="group px-8 py-4 rounded-[1584px] text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  background: 'rgba(247, 249, 250, 0.06)',
                  color: '#f7f9fa',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="inline-flex items-center gap-2">
                  {lang === 'en' ? 'View Cases' : 'Смотреть кейсы'}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
                </span>
              </a>
              <a
                href="https://t.me/ad_min_group"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-[1584px] text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(175,80,255,0.45)]"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  background: '#af50ff',
                  color: '#090909',
                }}
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {lang === 'en' ? 'Hire Me' : 'Написать'}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Telegram chat demo inside Boarding Pass Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:flex lg:flex-col lg:items-center p-8 rounded-[19.2px] border"
            style={{
              background: 'rgba(237, 195, 196, 0.025)',
              borderColor: 'rgba(247, 249, 250, 0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Boarding Pass header */}
            <div className="w-full flex items-center justify-between mb-4 border-b pb-3" style={{ borderColor: 'rgba(247, 249, 250, 0.07)' }}>
              <span className="text-[10px] tracking-[0.2em] font-mono text-[#828384] uppercase">BOARDING PASS</span>
              <span className="text-[10px] tracking-[0.1em] font-mono text-[#828384] uppercase">FLIGHT: SL-2026</span>
            </div>
            
            {/* Origin/Destination */}
            <div className="w-full flex justify-between items-center mb-6 px-1">
              <div className="text-left">
                <span className="text-[9px] text-[#828384] block font-mono">ORIGIN</span>
                <span className="italic text-2xl text-[#f7f9fa] font-light" style={{ fontFamily: 'var(--font-grandslang)' }}>Legacy</span>
              </div>
              <div className="text-[#828384] font-mono text-lg">→</div>
              <div className="text-right">
                <span className="text-[9px] text-[#828384] block font-mono">DESTINATION</span>
                <span className="italic text-2xl text-[#f7f9fa] font-light" style={{ fontFamily: 'var(--font-grandslang)' }}>DS</span>
              </div>
            </div>
            
            <TgChatDemo />
            
            {/* Decorative vertical barcode */}
            <div className="w-full flex items-center justify-between mt-6 pt-4 border-t" style={{ borderColor: 'rgba(247, 249, 250, 0.07)' }}>
              <div className="flex gap-[2px] items-stretch h-6 opacity-35">
                <div className="w-[1.5px] bg-[#f7f9fa]"></div>
                <div className="w-[3px] bg-[#f7f9fa]"></div>
                <div className="w-[1px] bg-[#f7f9fa]"></div>
                <div className="w-[2px] bg-[#f7f9fa]"></div>
                <div className="w-[4px] bg-[#f7f9fa]"></div>
                <div className="w-[1px] bg-[#f7f9fa]"></div>
                <div className="w-[2.5px] bg-[#f7f9fa]"></div>
                <div className="w-[1px] bg-[#f7f9fa]"></div>
                <div className="w-[3.5px] bg-[#f7f9fa]"></div>
                <div className="w-[1px] bg-[#f7f9fa]"></div>
                <div className="w-[2px] bg-[#f7f9fa]"></div>
                <div className="w-[1px] bg-[#f7f9fa]"></div>
              </div>
              <span className="text-[9px] tracking-[0.1em] font-mono text-[#828384] uppercase">CLASS: FIRST</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
