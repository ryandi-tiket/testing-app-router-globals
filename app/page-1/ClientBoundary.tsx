'use client'

import dayjs from 'dayjs'
import { StandardComponent } from './StandardComponent'

export const ClientBoundary = () => {
  return (
    <div style={{ padding: 20, backgroundColor: 'lightblue' }}>
      <div>Client Boundary</div>

      <br />

      <div>Weekdays - {dayjs.weekdays().toString()}</div>

      <br />

      <div>
        <small>StandardComponent inside Client Boundary:</small>
        <StandardComponent />
      </div>
    </div>
  )
}
