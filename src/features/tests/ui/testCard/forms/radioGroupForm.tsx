import { useForm } from 'react-hook-form'

import { Button, ControlledRadioGroup, Typography } from '@/components'
import { Question, TestCardValues } from '@/features'

import s from './testForms.module.scss'

type RadioGroupFormProps = {
  data: Question
  onSubmit: (data: TestCardValues) => void
}

type RadioGroupFormValues = {
  [k: string]: string
}

export const RadioGroupForm = ({ data, onSubmit }: RadioGroupFormProps) => {
  const { control, handleSubmit } = useForm<RadioGroupFormValues>({
    defaultValues: {
      [data.questionNumber]: '1',
    },
  })
  const onSubmitForm = (formData: RadioGroupFormValues) => {
    onSubmit(formData)
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmitForm)}>
      <Typography as={'h3'}>{data.question}</Typography>
      <ControlledRadioGroup
        control={control}
        // defaultValue={[]}
        name={data.questionNumber}
        options={data.answers}
      />
      <Button type={'submit'}>Ответить</Button>
    </form>
  )
}
