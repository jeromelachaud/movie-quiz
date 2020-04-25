import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetHighScores } from '../actions'
import { formatTimer } from '../utils'

function HighScores({ highScores }) {
  const { quizState } = useSelector(state => state.movieQuiz)
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch(resetHighScores())
  }
  return (
    <>
      <section>
        <header>
          <h2>High Scores</h2>
        </header>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((highScore, index) => (
              <tr key={highScore._id}>
                <td>{index + 1}</td>
                <td>{highScore.name}</td>
                <td>{highScore.score}</td>
                <td>{formatTimer(highScore.time)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th />
              <th colSpan="2">
                <button onClick={handleOnClick}>Delete High Score</button>
                {quizState === 'idle' && <div>Deleting High Scores...</div>}
              </th>
              <th />
            </tr>
          </tfoot>
        </table>
      </section>
    </>
  )
}

export default HighScores
