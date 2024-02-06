'use server'

import { cookies } from 'next/headers'

export async function changeLanguage(locale: string, formData: FormData) {
  const cookieStore = cookies()
  cookieStore.set('testing_locale', locale)
}
