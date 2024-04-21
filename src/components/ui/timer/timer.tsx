import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/common'
import { selectTests, testsActions } from '@/features'

import s from './timer.module.scss'

type TimerProps = {
  id: string
}

export const Timer = ({ id }: TimerProps) => {
  const dispatch = useAppDispatch()
  const { startTimer, timeIsOver } = testsActions

  const test = useAppSelector(selectTests).find(t => t.id === id)

  useEffect(() => {
    if (!test) {
      return
    }

    const timer = setInterval(() => {
      if (test.isOver) {
        clearInterval(timer)
      } else if (test.timeOver === 0) {
        dispatch(timeIsOver({ id: test.id }))
      } else {
        dispatch(startTimer({ id: test.id }))
      }
    }, 1000)

    debugger

    return () => clearInterval(timer)
  }, [test])

  if (!test) {
    return <></>
  }
  const minutes = Math.floor(test.timeOver / 60)
  const seconds = test.timeOver % 60

  return (
    <div className={s.root}>
      <div>{minutes}</div>:<div>{seconds}</div>
    </div>
  )
}
