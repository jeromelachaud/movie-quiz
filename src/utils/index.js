import { Duration } from 'luxon'

export const formatTimer = timer => {
  return Duration.fromObject({ milliseconds: timer }).toFormat('mm:ss')
}

export const generateWeightedRandomNumber = () => {
  return Math.floor(
    Math.random() *
      (+process.env.REACT_APP_MAX_CORRECT_ANSWERS -
        +process.env.REACT_APP_MIN_CORRECT_ANSWERS +
        1) +
      +process.env.REACT_APP_MIN_CORRECT_ANSWERS
  )
}

export const generateRandomMarks = (length, randomNumber) => {
  return Array(length)
    .fill(true)
    .fill(false, randomNumber)
    .sort(() => Math.random() - 0.5)
}
