import React from 'react'
import { useSelector } from 'react-redux'

export default function Error() {
  const state = useSelector(state => state.movieQuiz)
  const { error } = state

  return (
    <aside>
      <p>
        <b>{error}</b>
      </p>
    </aside>
  )
}
