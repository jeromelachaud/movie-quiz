import {
  INCREMENT_SCORE,
  INCREMENT_TIMER,
  RESTART_QUIZ,
  SAVE_TIMER,
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ERROR,
  SET_HIGHSCORES,
  SET_QUIZ_STATE,
  SUBMIT_ANSWER,
} from './actionTypes'

export const setCurrentAnswer = payload => ({
  type: SET_CURRENT_ANSWER,
  payload,
})
export const setCurrentQuestion = payload => ({
  type: SET_CURRENT_QUESTION,
  payload,
})
export const setError = payload => ({ type: SET_ERROR, payload })
export const incrementTimer = payload => ({
  type: INCREMENT_TIMER,
  payload,
})
export const saveTimer = () => ({ type: SAVE_TIMER })

export const submitAnswer = payload => ({
  type: SUBMIT_ANSWER,
  payload,
})

export const incrementScore = payload => ({
  type: INCREMENT_SCORE,
  payload,
})

export const setQuizState = payload => ({
  type: SET_QUIZ_STATE,
  payload,
})

export const validateAnswer = () => (dispatch, getState) => {
  const { movieQuiz } = getState()
  if (movieQuiz.isAnswerCorrect) {
    dispatch(incrementScore(1))
    dispatch(checkQuizState())
  } else {
    dispatch(setQuizState({ quizState: 'over' }))
    dispatch(setError({ error: 'Your answer is wrong, Game Over' }))
    dispatch(fetchHighScores())
  }
}

export const checkQuizState = () => async (dispatch, getState) => {
  const { movieQuiz } = getState()
  console.log(movieQuiz.quizState === 'on')
  if (
    movieQuiz.quizState === 'on' &&
    movieQuiz.currentQuestion + 1 < movieQuiz.questions.length
  ) {
    dispatch(
      setCurrentQuestion({ currentQuestion: movieQuiz.currentQuestion + 1 })
    )
  } else {
    dispatch(setQuizState({ quizState: 'over' }))
    dispatch(setError({ error: "You've finished the game, congrats !!" }))
  }
}

export const setHighScores = () => ({ type: SET_HIGHSCORES })
export const restartQuiz = () => ({ type: RESTART_QUIZ })
