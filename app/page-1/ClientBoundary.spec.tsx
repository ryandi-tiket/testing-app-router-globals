import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { ClientBoundary } from './ClientBoundary'

describe('ClientBoundary', () => {
  it('should render correctly (EN)', () => {
    dayjs.locale('en')
    render(<ClientBoundary />)
    expect(
      screen.getByText(
        /Weekdays - Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday/i
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Standard Component: 2026-01-01 - Thursday/i)
    ).toBeInTheDocument()
  })

  it('should render correctly (ID)', () => {
    dayjs.locale('id')
    render(<ClientBoundary />)
    expect(
      screen.getByText(/Weekdays - Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Standard Component: 2026-01-01 - Kamis/i)
    ).toBeInTheDocument()
  })
})
