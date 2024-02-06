import { ClientBoundary } from './ClientBoundary'
import { fromNow } from '../date-utils'
import { StandardComponent } from './StandardComponent'
import { setupServerGlobals } from '../setupServerGlobals'

export default async function Page1() {
  setupServerGlobals()

  return (
    <main>
      <div>Page 1: 2023 - {fromNow('2023-01-01')}</div>
      <StandardComponent />
      <ClientBoundary />
    </main>
  )
}
