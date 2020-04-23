import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentAnswer,
  setError,
  submitAnswer,
  validateAnswer,
} from '../actions'
import Answers from './Answers'
import Error from './Error'
import Question from './Question'
import Score from './Score'
import ScoreBoard from './ScoreBoard'
import Timer from './Timer'
function App() {
  const dispatch = useDispatch()
  const { currentAnswer, error, quizState } = useSelector(
    state => state.movieQuiz
  )

  const nextQuestion = () => {
    if (!currentAnswer) {
      dispatch(setError({ error: 'Please select an option' }))
      return
    }
    dispatch(submitAnswer({ answer: currentAnswer }))
    dispatch(setCurrentAnswer({ currentAnswer: '' }))
    dispatch(validateAnswer())
  }

  return (
    <>
      <section>
        <header>
          <h1>Movie Quiz</h1>
          <Timer delay={1000} />
          <Score />
        </header>
        <Question />
        <Answers />
      </section>
      <section>
        <header>
          <button
            className="btn btn-primary"
            onClick={nextQuestion}
            disabled={quizState === 'over'}
          >
            Confirm and Continue
          </button>
        </header>
        <section>{error && <Error />}</section>
        {quizState !== 'on' && <ScoreBoard />}
      </section>
    </>
  )
}
export default App
