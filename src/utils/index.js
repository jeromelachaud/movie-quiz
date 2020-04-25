import { Duration } from 'luxon'
import { maxNumberOfCorrectAnswers, minNumberOfCorrectAnswers } from '../config'

export const formatTimer = timer => {
  return Duration.fromObject({ milliseconds: timer }).toFormat('mm:ss')
}

export const generateWeightedRandomNumber = () => {
  return Math.floor(
    Math.random() *
      (maxNumberOfCorrectAnswers - minNumberOfCorrectAnswers + 1) +
      minNumberOfCorrectAnswers
  )
}

export const generateRandomMarks = (length, randomNumber) => {
  return Array(length)
    .fill(true)
    .fill(false, randomNumber)
    .sort(() => Math.random() - 0.5)
}
