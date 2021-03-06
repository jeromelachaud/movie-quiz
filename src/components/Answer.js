import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentAnswer, setError } from '../actions'

function Answer({ value, labelValue }) {
  const { currentAnswer, error, quizState } = useSelector(
    state => state.movieQuiz
  )
  const dispatch = useDispatch()

  const handleOnChange = e => {
    dispatch(setCurrentAnswer({ currentAnswer: e.target.id }))
    if (error) dispatch(setError({ error: '' }))
  }

  return (
    <>
      <input
        type="radio"
        id={value}
        name={value}
        disabled={quizState !== 'on'}
        checked={currentAnswer === value}
        onChange={event => handleOnChange(event)}
      />
      <label htmlFor={value}>{labelValue}</label>{' '}
    </>
  )
}

Answer.propTypes = {
  value: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
}

export default Answer
