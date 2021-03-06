import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHighScores } from '../actions'
import { formatTimer } from '../utils'
import HighScoreForm from './HighScoreForm'
import HighScoresBoard from './HighScoresBoard'

export default function ScoreBoard() {
  const {
    score,
    timer,
    quizState,
    displayHighScoreForm,
    highScores,
  } = useSelector(state => state.movieQuiz)

  if (quizState === 'over') {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }
  const dispatch = useDispatch()

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
          <HighScoresBoard highScores={highScores} />
        )}
        {quizState === 'error' && (
          <section>
            <button
              className="btn btn-primary"
              onClick={handleOnClickFetchHighScores}
            >
              Fetch High Scores
            </button>
          </section>
        )}
        {quizState === 'idle' && <div>Fetching High Scores...</div>}
      </section>
    </>
  )
}
