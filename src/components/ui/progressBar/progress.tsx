import { ProgressDemo } from '@/components'
import { Question } from '@/features'

type ProgressProps = {
  answers: string[]
  questions: Question[]
}

export const Progress = ({ answers, questions }: ProgressProps) => {
  return (
    <>
      {questions.map((q, index) => {
        return (
          <ProgressDemo
            isAnswered={q.isAnswered}
            isCorrect={q.correctAnswer === answers[index]}
            key={index}
          />
        )
      })}
    </>
  )
}
