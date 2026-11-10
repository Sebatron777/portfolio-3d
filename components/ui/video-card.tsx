'use client'

import React from 'react'
import { GlowCard } from './spotlight-card'

interface VideoCardProps {
  src: string
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'cyan'
  className?: string
}

export function VideoCard({ src, glowColor = 'cyan', className = '' }: VideoCardProps) {
  return (
    <GlowCard glowColor={glowColor} className={`overflow-hidden ${className}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
        className="w-full h-full object-cover"
        style={{ borderRadius: 'inherit' }}
      />
    </GlowCard>
  )
}
