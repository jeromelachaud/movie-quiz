import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementTimer } from '../actions'
import { useInterval } from '../hooks/useInterval'
import { formatTimer } from '../utils'

export default function Timer({ delay }) {
  const { timer, quizState } = useSelector(state => state.movieQuiz)
  const dispatch = useDispatch()
  useInterval(
    () => {
      dispatch(incrementTimer(delay))
    },
    quizState === 'on' ? delay : null
  )

  return (
    <p>
      <b>Timer: {formatTimer(timer)}</b>
    </p>
  )
}
