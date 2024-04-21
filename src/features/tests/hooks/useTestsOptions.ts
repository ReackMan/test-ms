import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/common'
import { selectTests, testsActions } from '@/features'

type Props = {
  id: string
}

export const useTestsOptions = ({ id }: Props) => {
  const test = useAppSelector(selectTests).find(t => t.id === id)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { setAnswer, setIsAnswered, setQuestionQueue, testIsOver } = testsActions

  return {
    dispatch,
    navigate,
    setAnswer,
    setIsAnswered,
    setQuestionQueue,
    test,
    testIsOver,
  }
}
