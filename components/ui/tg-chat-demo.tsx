'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '@/context/lang'
import { Bot } from 'lucide-react'

interface Message {
  id: number
  from: 'user' | 'bot'
  textEN: string
  textRU: string
  delay: number
}

const MESSAGES: Message[] = [
  { id: 1, from: 'user', textEN: 'Hey! Need a sales bot',              textRU: 'Привет! Нужен бот для продаж',     delay: 600  },
  { id: 2, from: 'bot',  textEN: 'On it: aiogram 3.x + Supabase',       textRU: 'Уже делаю: aiogram 3.x + Supabase', delay: 1800 },
  { id: 3, from: 'bot',  textEN: 'Payments, auto-delivery, admin',      textRU: 'Оплата, авто-выдача, admin',       delay: 2800 },
  { id: 4, from: 'user', textEN: 'Can you add AI?',                     textRU: 'А с AI можно?',                    delay: 4200 },
  { id: 5, from: 'bot',  textEN: 'GPT-4o inside, no problem',          textRU: 'GPT-4o внутри, без проблем',       delay: 5400 },
  { id: 6, from: 'bot',  textEN: "Deploy 24/7 on VPS. Ready?",          textRU: 'Деплой 24/7 на VPS. Погнали?',     delay: 6400 },
]

const LOOP_DELAY = 9000

export function TgChatDemo() {
  const { lang } = useLang()
  const [visible, setVisible] = useState<number[]>([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = []

    const runLoop = () => {
      setVisible([])
      setTyping(false)

      MESSAGES.forEach(msg => {
        if (msg.from === 'bot') {
          const tTyping = setTimeout(() => setTyping(true), msg.delay - 600)
          timers.push(tTyping)
        }
        const tShow = setTimeout(() => {
          setTyping(false)
          setVisible(prev => [...prev, msg.id])
        }, msg.delay)
        timers.push(tShow)
      })

      const tRestart = setTimeout(runLoop, LOOP_DELAY)
      timers.push(tRestart)
    }

    runLoop()
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="w-64 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: 'var(--color-paper-2)',
        border: '1px solid var(--color-rule)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 px-3 py-2.5"
        style={{ borderBottom: '1px solid var(--color-rule)', background: 'var(--color-paper-3)' }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0"
          style={{ background: 'var(--color-accent)', color: 'var(--color-accent-ink)' }}
        >
          <Bot className="w-4 h-4" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-foreground" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            SalesBot Pro
          </div>
          <div className="text-[10px] flex items-center gap-1" style={{ color: 'var(--color-signal)' }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: 'var(--color-signal)' }} />
            online
          </div>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.25 }} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.93.45l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.52.26l.18-2.62 4.74-4.28c.21-.18-.04-.28-.32-.1L7.9 14.6l-2.54-.8c-.55-.17-.56-.55.12-.82l9.93-3.83c.46-.17.86.11.23.65z" fill="currentColor"/>
        </svg>
      </div>

      {/* Messages — fixed height, messages stack from bottom */}
      <div className="flex flex-col justify-end gap-2 px-2.5 py-2.5 overflow-hidden" style={{ height: '260px' }}>
        <AnimatePresence>
          {MESSAGES.filter(m => visible.includes(m.id)).map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <span
                className="text-xs px-2.5 py-1.5 rounded-2xl max-w-[88%] leading-relaxed"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  ...(msg.from === 'user'
                    ? {
                        background: 'var(--color-accent)',
                        color: 'var(--color-accent-ink)',
                        borderBottomRightRadius: '4px',
                      }
                    : {
                        background: 'var(--color-paper-3)',
                        color: 'var(--color-ink)',
                        border: '1px solid var(--color-rule)',
                        borderBottomLeftRadius: '4px',
                      }),
                }}
              >
                {lang === 'en' ? msg.textEN : msg.textRU}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex justify-start"
            >
              <span
                className="px-3 py-2 rounded-2xl rounded-bl-sm flex items-center gap-1"
                style={{ background: 'var(--color-paper-3)', border: '1px solid var(--color-rule)' }}
              >
                {[0, 1, 2].map(i => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--color-muted)' }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div
        className="flex items-center gap-2 px-2.5 py-2 mx-2 mb-2 rounded-xl"
        style={{ background: 'var(--color-paper-3)', border: '1px solid var(--color-rule)' }}
      >
        <span className="text-xs flex-1" style={{ color: 'var(--color-muted-foreground)', fontFamily: 'var(--font-dm-sans)' }}>
          {lang === 'en' ? 'Message...' : 'Сообщение...'}
        </span>
        <span style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </span>
      </div>
    </motion.div>
  )
}
