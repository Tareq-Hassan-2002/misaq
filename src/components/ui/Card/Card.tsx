import type { ReactNode } from 'react'
import './Card.css'

export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  padding?: CardPadding
}

const Card = ({
  children,
  className = '',
  hoverable = false,
  padding = 'md',
}: CardProps) => {
  return (
    <article
      className={[
        'ui-card',
        `ui-card--padding-${padding}`,
        hoverable ? 'ui-card--hoverable' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </article>
  )
}

export default Card
