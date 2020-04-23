import React from 'react'
import { useSelector } from 'react-redux'
import { formatTimer } from '../utils/formatTimer'

function HighScores() {
  const { highScores } = useSelector(state => state.movieQuiz)

  return (
    <div>
      <h3>High Scores</h3>
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
          {highScores &&
            highScores.map((highScore, index) => (
              <tr key={highScore._id}>
                <td>{index + 1}</td>
                <td>{highScore.name}</td>
                <td>{highScore.score}</td>
                <td>{formatTimer(highScore.time)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default HighScores
