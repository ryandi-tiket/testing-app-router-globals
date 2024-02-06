import { setupGlobalDayjs } from './setupGlobalDayjs'
import { getLocale } from './getLocale'

/**
 * Warning: use sparingly.
 *
 * Layout runs in different process than the page, so global things
 * need to be setup in both layout and page. Call this function
 * in layout and all pages to ensure consistent setup.
 */
export const setupServerGlobals = () => {
  const locale = getLocale()
  setupGlobalDayjs(locale)
  // ... other setups here if required
}
