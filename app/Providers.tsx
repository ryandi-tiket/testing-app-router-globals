'use client'

import { setupGlobalDayjs } from './setupGlobalDayjs'

export const Providers = ({
  children,
  locale,
}: {
  children?: React.ReactNode
  locale: string
}) => {
  setupGlobalDayjs(locale)

  // other providers here
  return <div>{children}</div>
}
