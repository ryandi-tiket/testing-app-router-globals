import { cache } from 'react'
import { cookies } from 'next/headers'

export const getLocale = cache(() => {
  return cookies().get('testing_locale')?.value ?? 'id'
})
