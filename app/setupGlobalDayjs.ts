import dayjs from 'dayjs'
import 'dayjs/locale/id'
import relativeTime from 'dayjs/plugin/relativeTime'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(relativeTime)
dayjs.extend(localeData)

// ... add your other imports and extends as required

/**
 * Layout runs in different process than the page, so some things
 * need to be registered in both layout and page
 */
export const setupGlobalDayjs = (locale: string) => {
  dayjs.locale(locale)
}
