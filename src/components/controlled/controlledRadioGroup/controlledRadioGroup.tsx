import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

type ControlledRadioGroupProps<T extends FieldValues> = Omit<
  RadioGroupProps,
  'value | onValueChange'
> &
  UseControllerProps<T>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  ...restProps
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
  })

  return (
    <RadioGroup
      {...restProps}
      defaultValue={'1'}
      name={name}
      onValueChange={onChange}
      value={value}
    />
  )
}
