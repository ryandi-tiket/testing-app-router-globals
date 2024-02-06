import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { StandardComponent } from './StandardComponent'

describe('StandardComponent', () => {
  it('should render correctly (EN)', () => {
    render(<StandardComponent />)
    expect(
      screen.getByText(/Standard Component: 2026-01-01 - Thursday/i)
    ).toBeInTheDocument()
  })

  it('should render correctly (ID)', () => {
    dayjs.locale('id')
    render(<StandardComponent />)
    expect(
      screen.getByText(/Standard Component: 2026-01-01 - Kamis/i)
    ).toBeInTheDocument()
  })
})
