import { ReactNode } from 'react'

interface StackBadgeProps {
  children: ReactNode
  className?: string
}

export function StackBadge({ children, className = '' }: StackBadgeProps) {
  const baseClasses = "inline-flex items-center px-2.5 py-1 text-xs rounded-md font-mono tracking-normal transition-colors duration-200"
  const defaultClasses = "bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-muted-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
  
  return (
    <span
      className={`${baseClasses} ${className || defaultClasses}`}
      style={{
        fontFamily: 'var(--font-jetbrains)',
      }}
    >
      {children}
    </span>
  )
}
