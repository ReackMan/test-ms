import { ButtonVariant, TypographyVariant } from '@/common'
import { Button, Progress, Typography } from '@/components'
import { Timer } from '@/components/ui/timer/timer'
import { TestCard, TestCardValues, useTestsOptions } from '@/features'

import s from './test.module.scss'

type TestProps = {
  id: string
}

export const Test = ({ id }: TestProps) => {
  const { dispatch, navigate, setAnswer, setIsAnswered, setQuestionQueue, test, testIsOver } =
    useTestsOptions({ id })

  if (!test) {
    return <></>
  }
  const queue = test.questionQueue
  const onClickHandler = () => {
    navigate(`/`)
  }

  const questionData = test.questions[queue]

  const onSubmit = (data: TestCardValues) => {
    dispatch(setIsAnswered({ id: test.id, questionNumber: queue }))
    dispatch(setAnswer({ answersData: data, id: test.id }))
    if (test.questions.length - 1 !== queue) {
      dispatch(setQuestionQueue({ id: test.id, queue: queue + 1 }))
    } else {
      dispatch(testIsOver({ id: test.id }))
    }
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Typography as={'h1'} variant={TypographyVariant.H1}>
          {test.name}
        </Typography>
        {test.onTime ? <Timer id={test.id} /> : <></>}
      </div>
      <div className={s.progressBars}>
        <Progress answers={test.answers} questions={test.questions} />
      </div>
      {!test.isOver ? (
        <TestCard onSubmit={onSubmit} question={questionData} />
      ) : (
        <div className={s.testOver}>
          <Typography as={'p'} variant={TypographyVariant.Body1}>
            {test.timeOver === 0 ? `Время закончилось` : `Тест завершен`}
          </Typography>
          <Typography as={'p'} variant={TypographyVariant.Body1}>
            Ответов верно:
            {test.correctAnswers} из {test.questions.length}
          </Typography>
          <Button onClick={onClickHandler} variant={ButtonVariant.Primary}>
            К выбору теста
          </Button>
        </div>
      )}
    </div>
  )
}
