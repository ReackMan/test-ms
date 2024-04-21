import { useForm } from 'react-hook-form'

import { TestCardValues } from '@/features'

export const useTestCardForm = (defaultValues: TestCardValues) => {
  return useForm<TestCardValues>({
    defaultValues,
  })
}
