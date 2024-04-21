import { useNavigate } from 'react-router-dom'

import { TypographyVariant, useAppDispatch, useAppSelector } from '@/common'
import { Button, Typography } from '@/components'
import { selectTests, testsActions } from '@/features'

import s from './testsDesk.module.scss'

type TestsDeskProps = {}

export const TestsDesk = ({}: TestsDeskProps) => {
  const dispatch = useAppDispatch()
  const { setCurrentRoute } = testsActions
  const tests = useAppSelector(selectTests)
  const navigate = useNavigate()
  const onClickHandler = (id: string) => {
    navigate(`/${id}`)
    dispatch(setCurrentRoute({ route: id }))
  }

  return (
    <div className={s.root}>
      <Typography as={'h2'} variant={TypographyVariant.H2}>
        Выбери тест
      </Typography>
      <div className={s.tests}>
        {tests.map((t, i) => (
          <Button key={i} onClick={() => onClickHandler(t.id)}>
            {t.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
