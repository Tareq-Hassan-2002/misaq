import type { ChangeEventHandler, InputHTMLAttributes } from 'react'
import './Input.css'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string
  value?: string | number
  onChange: ChangeEventHandler<HTMLInputElement>
  error?: string
  helperText?: string
  required?: boolean
}

const Input = ({
  label,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  required = false,
  id,
  name,
  type = 'text',
  className = '',
  placeholder,
  ...props
}: InputProps) => {
  const inputId = id ?? name ?? 'ui-input'
  const describedBy = error || helperText ? `${inputId}-hint` : undefined

  return (
    <div className={['ui-field', error ? 'ui-field--error' : '', disabled ? 'ui-field--disabled' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="ui-field__label" htmlFor={inputId}>
          {label}
          {required && <span className="ui-field__required" aria-hidden="true"> *</span>}
        </label>
      )}

      <input
        {...props}
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className="ui-input"
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
      />

      {(error || helperText) && (
        <span id={`${inputId}-hint`} className={['ui-field__message', error ? 'ui-field__message--error' : ''].filter(Boolean).join(' ')}>
          {error ?? helperText}
        </span>
      )}
    </div>
  )
}

export default Input
