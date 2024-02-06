import { setupGlobalDayjs } from './setupGlobalDayjs'

/**
 * Warning: use sparingly.
 *
 * Call this once in the Providers to ensure globals
 * are set up in all the client components.
 */
export const setupClientGlobals = (locale: string) => {
  setupGlobalDayjs(locale)
  // ... other global setups here if required
}
