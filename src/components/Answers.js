import React from 'react'
import { useSelector } from 'react-redux'
import Answer from './Answer'

function Answers() {
  const { currentAnswer } = useSelector(state => state.movieQuiz)

  return (
    <div>
      <Answer value={'true'} selected={currentAnswer === 'true'} />
      <Answer value={'false'} selected={currentAnswer === 'false'} />
    </div>
  )
}

export default Answers
