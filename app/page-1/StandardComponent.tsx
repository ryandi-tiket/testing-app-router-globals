import { whatDay } from '../date-utils'

/**
 * Can be used in both server and client trees (think UI component like Passport)
 */
export const StandardComponent = () => (
  <div>Standard component: 2026-01-01 - {whatDay('2026-01-01')}</div>
)
