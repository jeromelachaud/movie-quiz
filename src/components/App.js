import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchQuestions,
  restartQuiz,
  setCurrentAnswer,
  setError,
  setQuizState,
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
  useEffect(() => {
    fetchQuestions()(dispatch)
  }, [dispatch])

  const { currentAnswer, error, quizState, questions } = useSelector(
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

  const startQuiz = () => {
    dispatch(setQuizState({ quizState: 'on' }))
  }
  const handleOnClickRestart = () => {
    dispatch(restartQuiz())
  }

  const MainButton = () => {
    if (quizState === 'off') {
      return (
        <button className="btn btn-primary" onClick={startQuiz}>
          Start Movie Quiz!{' '}
          <span role="img" aria-label="Movie Quiz">
            🍿
          </span>
        </button>
      )
    } else if (quizState === 'over') {
      return (
        <button className="btn btn-primary" onClick={handleOnClickRestart}>
          Restart Movie Quiz{' '}
          <span role="img" aria-label="Movie Quiz">
            🔄
          </span>
        </button>
      )
    } else {
      return (
        <button
          className="btn btn-primary"
          onClick={nextQuestion}
          disabled={quizState !== 'on' || currentAnswer === ''}
        >
          Confirm and Continue{' '}
          <span role="img" aria-label="Movie Quiz">
            ➡️
          </span>
        </button>
      )
    }
  }

  return (
    <>
      <section>
        <header>
          <h1>
            Movie Quiz{' '}
            <span role="img" aria-label="Movie Quiz">
              🍿
            </span>
          </h1>
          <Timer delay={1000} />
          <Score />
        </header>
      </section>
      <section>{questions && <Question />}</section>
      <section>
        <Answers />
      </section>
      <section>
        <MainButton />
      </section>
      <section>{error && <Error />}</section>
      {quizState === 'over' && <ScoreBoard />}
    </>
  )
}
export default App
