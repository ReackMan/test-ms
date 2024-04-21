import * as Progress from '@radix-ui/react-progress'

import s from './progressBar.module.scss'

type ProgressDemoProps = {
  isAnswered: boolean
  isCorrect: boolean
}

export const ProgressDemo = ({ isAnswered, isCorrect }: ProgressDemoProps) => {
  // const [progress, setProgress] = React.useState(0)
  //
  // useEffect(() => {
  //   setProgress(100)
  // }, [isAnswered])
  const progress = isAnswered ? 100 : 0

  // debugger

  return (
    <Progress.Root className={s.ProgressRoot} value={progress}>
      <Progress.Indicator
        className={s.ProgressIndicator}
        style={{
          backgroundColor: isCorrect ? '#00ff48' : '#ff0000',
          transform: `translateX(-${100 - progress}%)`,
        }}
      />
    </Progress.Root>
  )
}
