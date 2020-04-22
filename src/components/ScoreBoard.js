import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { restartQuiz } from '../actions'
import { formatTimer } from '../utils/formatTimer'

export default function ScoreBoard() {
  const state = useSelector(state => state.movieQuiz)
  const dispatch = useDispatch()
  const { score, timer } = state

  const handleOnClick = () => {
    dispatch(restartQuiz())
  }

  return (
    <div>
      <ul>
        <li>
          <b>Your score: {score}</b>
        </li>
        <li>
          <b>Time spent: {formatTimer(timer)}</b>
        </li>
      </ul>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Restart Quiz
      </button>
    </div>
  )
}
