import { fromNow } from '../date-utils'
import { setupServerGlobals } from '../setupServerGlobals'

export default function Page1() {
  setupServerGlobals()

  return (
    <main>
      <div>Page 2: 2030 - {fromNow('2030-01-01')}</div>
    </main>
  )
}
