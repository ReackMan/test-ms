import { RootState } from '@/app'

export const selectTests = (state: RootState) => state.tests.tests
export const selectCurrentRoute = (state: RootState) => state.tests.currentRoute
export const selectTimeOver = (state: RootState, id: string) => {
  const test = state.tests.tests.find(t => t.id === id)

  if (!test) {
    return
  }

  return test.timeOver
}
