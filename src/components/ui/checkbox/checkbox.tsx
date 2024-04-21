import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckIcon } from '@/assets'
import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type PositionType = 'default' | 'left'

export type CheckboxProps = {
  checked: boolean
  id?: string
  index?: number
  label?: string
  onCheckedChange: (checked: boolean, index?: number) => void
  position?: PositionType
} & Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'asChild'>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (
    {
      checked,
      className,
      disabled,
      id,
      index,
      label,
      name,
      onCheckedChange,
      position = 'default',
      ...restProps
    },
    ref
  ): JSX.Element => {
    return (
      <Typography
        as={'label'}
        className={`${s.label} ${disabled && s.disabled} ${className}`}
        style={{ alignItems: 'center', display: 'flex' }}
        variant={TypographyVariant.Body2}
      >
        <div className={`${s.checkboxWrapper} ${disabled && s.disabled} ${s[position]}`}>
          <RadixCheckbox.Root
            checked={checked}
            className={s.root}
            disabled={disabled}
            id={id}
            name={name}
            onCheckedChange={index ? () => onCheckedChange(checked, index) : onCheckedChange}
            ref={ref}
            required={restProps.required}
          >
            {checked && (
              <RadixCheckbox.Indicator className={s.indicator} forceMount>
                <CheckIcon size={1.1} />
              </RadixCheckbox.Indicator>
            )}
          </RadixCheckbox.Root>
        </div>
        {label}
      </Typography>
    )
  }
)
