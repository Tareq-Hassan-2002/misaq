import type { ReactNode } from 'react'
import './Badge.css'

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

export interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const Badge = ({ children, variant = 'default', className = '' }: BadgeProps) => {
  return <span className={['ui-badge', `ui-badge--${variant}`, className].filter(Boolean).join(' ')}>{children}</span>
}

export default Badge
