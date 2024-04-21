import { useForm } from 'react-hook-form'

import { Button, ControlledInput, Typography } from '@/components'
import { Question, TestCardValues } from '@/features'

import s from './testForms.module.scss'

type InputFormProps = {
  data: Question
  onSubmit: (data: TestCardValues) => void
}

type InputFormValues = {
  [k: string]: string
}

export const InputForm = ({ data, onSubmit }: InputFormProps) => {
  const { control, handleSubmit } = useForm<InputFormValues>({
    defaultValues: {
      [data.questionNumber]: '',
    },
  })

  const onSubmitForm = (formData: InputFormValues) => {
    onSubmit(formData)
  }

  return (
    <form className={s.root} onSubmit={handleSubmit(onSubmitForm)}>
      <Typography as={'h3'}>{data.question}</Typography>
      <ControlledInput control={control} name={data.questionNumber} />
      <Button type={'submit'}>Ответить</Button>
    </form>
  )
}
