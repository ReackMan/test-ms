import { Route, Routes } from 'react-router-dom'

import { useAppSelector } from '@/common'
import { Test, TestsDesk, selectCurrentRoute } from '@/features'

export function App() {
  const currentRoute = useAppSelector(selectCurrentRoute)

  return (
    <Routes>
      <Route element={<TestsDesk />} path={'/'} />
      <Route element={<Test id={currentRoute} />} path={`/${currentRoute}`} />
    </Routes>
  )
}
