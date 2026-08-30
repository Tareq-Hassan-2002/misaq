import type { ChangeEventHandler, SelectHTMLAttributes } from 'react'
import './Select.css'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string
  options: SelectOption[]
  value: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  placeholder?: string
  error?: string
  helperText?: string
  required?: boolean
}

const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  id,
  name,
  className = '',
  ...props
}: SelectProps) => {
  const selectId = id ?? name ?? 'ui-select'
  const describedBy = error || helperText ? `${selectId}-hint` : undefined

  return (
    <div className={['ui-select-field', error ? 'ui-select-field--error' : '', disabled ? 'ui-select-field--disabled' : '', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="ui-select-field__label" htmlFor={selectId}>
          {label}
          {required && <span className="ui-select-field__required" aria-hidden="true"> *</span>}
        </label>
      )}

      <select
        {...props}
        id={selectId}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="ui-select"
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>

      {(error || helperText) && (
        <span id={`${selectId}-hint`} className={['ui-select-field__message', error ? 'ui-select-field__message--error' : ''].filter(Boolean).join(' ')}>
          {error ?? helperText}
        </span>
      )}
    </div>
  )
}

export default Select
