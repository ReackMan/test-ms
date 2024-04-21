import { CheckboxForm, InputForm, Question, RadioGroupForm } from '@/features'

type TestCardProps = {
  onSubmit: (data: TestCardValues) => void
  question: Question
}

export type TestCardValues = {
  [k: string]: string
}

export const TestCard = ({ onSubmit, question }: TestCardProps) => {
  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {question.isMultiple ? (
        <CheckboxForm data={question} onSubmit={onSubmit} />
      ) : question.isDetailed ? (
        <InputForm data={question} onSubmit={onSubmit} />
      ) : (
        <RadioGroupForm data={question} onSubmit={onSubmit} />
      )}
    </>
  )
}
