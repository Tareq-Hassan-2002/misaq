import './ProgressBar.css'

export interface ProgressBarProps {
  value: number
  max?: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const clampValue = (value: number, max: number) => {
  if (Number.isNaN(value)) {
    return 0
  }

  if (value <= 0) {
    return 0
  }

  if (value >= max) {
    return max
  }

  return value
}

const ProgressBar = ({
  value,
  max = 100,
  showLabel = false,
  size = 'md',
  className = '',
}: ProgressBarProps) => {
  const safeMax = max > 0 ? max : 100
  const safeValue = clampValue(value, safeMax)
  const percentage = (safeValue / safeMax) * 100

  return (
    <div className={['ui-progress', `ui-progress--${size}`, className].filter(Boolean).join(' ')} aria-label="Progress bar">
      {showLabel && (
        <div className="ui-progress__meta">
          <span className="ui-progress__label">التقدم</span>
          <span className="ui-progress__value">{Math.round(percentage)}%</span>
        </div>
      )}

      <div className="ui-progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={safeMax} aria-valuenow={safeValue} aria-valuetext={`${Math.round(percentage)}%`}>
        <div className="ui-progress__fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

export default ProgressBar
