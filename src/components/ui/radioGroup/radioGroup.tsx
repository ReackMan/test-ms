import { ComponentPropsWithoutRef } from 'react'

import * as Radio from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

import { RadioItem, RadioItemProps } from './radioItem'

export type RadioGroupProps = { options: RadioItemProps[] } & ComponentPropsWithoutRef<
  typeof Radio.Root
>
export const RadioGroup = ({ className, options, ...restProps }: RadioGroupProps) => {
  return (
    <Radio.Root
      className={`${s.root} ${className}`}
      {...restProps}
      defaultValue={restProps.defaultValue}
    >
      {options.map(item => (
        <RadioItem key={item.value} {...item} />
      ))}
    </Radio.Root>
  )
}
