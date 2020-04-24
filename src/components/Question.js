import React from 'react'
import { useSelector } from 'react-redux'

function Question() {
  const { currentQuestion, questions } = useSelector(state => state.movieQuiz)
  const { movie, actor, picture } = questions[currentQuestion]

  return (
    <aside>
      <ul>
        <li>
          <b>movie</b>: {movie}
        </li>
        <li>
          <b>actor</b>: {actor}
        </li>
        <li>
          <figure>
            {picture !== null && (
              <img
                src={`${
                  process.env.REACT_APP_TMDB_API_IMAGES_BASE_URL
                }${picture}`}
                alt={actor}
              />
            )}
            <figcaption>{actor}</figcaption>
          </figure>
        </li>
      </ul>
    </aside>
  )
}

export default Question
