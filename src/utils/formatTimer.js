import { Duration } from 'luxon'

export const formatTimer = timer => {
  return Duration.fromObject({ milliseconds: timer }).toFormat('mm:ss')
}
