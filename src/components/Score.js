import React from 'react'
import { useSelector } from 'react-redux'

export default function Error() {
  const state = useSelector(state => state.movieQuiz)
  const { score } = state

  return (
    <div>
      <p>
        <b>Score: {score}</b>
      </p>
    </div>
  )
}
