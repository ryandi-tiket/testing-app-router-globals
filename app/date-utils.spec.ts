import dayjs from 'dayjs'
import { fromNow, whatDay } from './date-utils'

const init = () => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2025-01-01'))
}

const cleanup = () => {
  jest.useRealTimers()
}

describe('fromNow', () => {
  beforeAll(() => init())
  afterAll(() => cleanup())

  it('should return a human-readable date (EN)', () => {
    dayjs.locale('en')
    const result = fromNow('2021-01-01')
    expect(result).toBe('4 years ago')
  })

  it('should return a human-readable date (ID)', () => {
    dayjs.locale('id')
    const result = fromNow('2021-01-01')
    expect(result).toBe('4 tahun yang lalu')
  })
})

describe('whatDay', () => {
  it('should return the correct day (EN)', () => {
    dayjs.locale('en')
    const result = whatDay('2024-02-06')
    expect(result).toBe('Tuesday')
  })

  it('should return the correct day (ID)', () => {
    dayjs.locale('id')
    const result = whatDay('2024-02-06')
    expect(result).toBe('Selasa')
  })
})
