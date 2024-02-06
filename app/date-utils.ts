import dayjs from 'dayjs'

export const fromNow = (date: string) => {
  return dayjs(date).fromNow() // requires relativeTime plugin
}

export const whatDay = (date: string) => {
  return dayjs(date).format('dddd')
}
