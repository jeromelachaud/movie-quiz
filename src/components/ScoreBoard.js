import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHighScores, restartQuiz } from '../actions'
import { formatTimer } from '../utils/formatTimer'
import HighScoreForm from './HighScoreForm'
import HighScores from './HighScores'

export default function ScoreBoard() {
  const { score, timer, quizState, displayHighScoreForm } = useSelector(
    state => state.movieQuiz
  )
  const dispatch = useDispatch()

  const handleOnClickRestart = () => {
    dispatch(restartQuiz())
  }

  const handleOnClickFetchHighScores = () => {
    dispatch(fetchHighScores())
  }

  return (
    <>
      <section>
        <header>
          <h2>Your score: {score}</h2>
          <h3>Time spent: {formatTimer(timer)}</h3>
        </header>
      </section>
      <section>
        {displayHighScoreForm && <HighScoreForm />}
        {quizState === 'over' && highScores.length > 0 && (
          <HighScores highScores={highScores} />
        )}
        {quizState === 'idle' && <div>Fetching High Scores...</div>}
      </section>
    </>
  )
}
