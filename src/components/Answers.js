import React from 'react'
import { useSelector } from 'react-redux'
import Answer from './Answer'

function Answers() {
  const { currentAnswer } = useSelector(state => state.movieQuiz)

  return (
    <>
      <Answer
        value={'true'}
        labelValue="Yes"
        selected={currentAnswer === 'true'}
      />
      <Answer
        value={'false'}
        labelValue="No"
        selected={currentAnswer === 'false'}
      />
    </>
  )
}

export default Answers
