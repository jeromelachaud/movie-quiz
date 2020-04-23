import React from 'react'
import { useSelector } from 'react-redux'

function Question() {
  const { currentQuestion, questions } = useSelector(state => state.movieQuiz)
  const question = questions[currentQuestion]

  return (
    <aside>
      <ul>
        <li>movie:{question.movie}</li>
        <li>actor:{question.actor}</li>
      </ul>
    </aside>
  )
}

export default Question
