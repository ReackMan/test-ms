import { useForm } from 'react-hook-form'

import { Button, ControlledCheckbox, Typography } from '@/components'
import { Question, TestCardValues } from '@/features'

type CheckboxFormProps = {
  data: Question
  onSubmit: (data: TestCardValues) => void
}

type CheckboxFormValues = {
  [k: string]: boolean
}

export const CheckboxForm = ({ data, onSubmit }: CheckboxFormProps) => {
  const { control, handleSubmit } = useForm<CheckboxFormValues>({})

  const onSubmitForm = (formData: CheckboxFormValues) => {
    const answersData = Object.values(formData)
    let submittedData = ''

    answersData.map((a, i) => {
      if (a) {
        if (submittedData === '') {
          submittedData += `${i + 1}`
        } else {
          submittedData += `,${i + 1}`
        }
      }
    })
    onSubmit({ [data.questionNumber]: submittedData })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Typography as={'h3'}>{data.question}</Typography>
      {data.answers.map((a, index) => (
        <ControlledCheckbox
          control={control}
          key={index}
          label={a.title}
          name={a.title}
          position={'left'}
        />
      ))}
      <Button type={'submit'}>Ответить</Button>
    </form>
  )
}
