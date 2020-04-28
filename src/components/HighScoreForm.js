import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveHighScore, setName } from '../actions'

export default function HighScoreForm() {
  const { quizState } = useSelector(state => state.movieQuiz)

  const inputRef = useRef(null)
  const dispatch = useDispatch()

  const handleOnchange = () => {
    dispatch(setName({ name: inputRef.current.value }))
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    dispatch(saveHighScore(inputRef.current.value))
    inputRef.current.value = ''
  }

  return (
    <div>
      <h2>Congrats! Enter you name</h2>
      <form onSubmit={event => handleOnSubmit(event)}>
        <label htmlFor="name">Enter your name</label>{' '}
        <input
          name="name"
          type="text"
          ref={inputRef}
          onChange={handleOnchange}
        />
        <button>Save High Score</button>
        {quizState === 'idle' && <div>Saving High Scores...</div>}
      </form>
    </div>
  )
}
