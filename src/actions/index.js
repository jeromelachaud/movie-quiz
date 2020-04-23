import axios from 'axios'
import {
  DISPLAY_HIGH_SCORE_FORM,
  FETCH_HIGH_SCORES_ERROR,
  FETCH_HIGH_SCORES_REQUEST,
  FETCH_HIGH_SCORES_SUCCESS,
  INCREMENT_SCORE,
  INCREMENT_TIMER,
  RESTART_QUIZ,
  SAVE_HIGH_SCORE_ERROR,
  SAVE_HIGH_SCORE_REQUEST,
  SAVE_HIGH_SCORE_SUCCESS,
  SAVE_TIMER,
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ERROR,
  SET_NAME,
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

const fetchHighScoresRequest = () => ({
  type: FETCH_HIGH_SCORES_REQUEST,
})

const fetchHighScoresSuccess = payload => ({
  type: FETCH_HIGH_SCORES_SUCCESS,
  payload,
})
const fetchHighScoresError = payload => ({
  type: FETCH_HIGH_SCORES_ERROR,
  payload,
})

const saveHighScoreRequest = () => ({
  type: SAVE_HIGH_SCORE_REQUEST,
})

const saveHighScoreSuccess = payload => ({
  type: SAVE_HIGH_SCORE_SUCCESS,
  payload,
})
const saveHighScoreError = payload => ({
  type: SAVE_HIGH_SCORE_ERROR,
  payload,
})

export const setName = payload => ({
  type: SET_NAME,
  payload,
})

const displayHighScoreForm = () => ({
  type: DISPLAY_HIGH_SCORE_FORM,
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
  if (
    movieQuiz.quizState === 'on' &&
    movieQuiz.currentQuestion + 1 < movieQuiz.questions.length
  ) {
    dispatch(
      setCurrentQuestion({ currentQuestion: movieQuiz.currentQuestion + 1 })
    )
  } else {
    dispatch(setQuizState({ quizState: 'over' }))
    dispatch(setError({ error: "You've finished the game, congrats!!" }))
    dispatch(fetchHighScores())
  }
}

export const fetchHighScores = () => async dispatch => {
  dispatch(fetchHighScoresRequest())
  try {
    const highScores = await axios.get(
      `${process.env.REACT_APP_HOST}/highscores`,
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        },
      }
    )
    dispatch(fetchHighScoresSuccess({ highScores }))
    dispatch(checkHighScores())
  } catch (error) {
    console.log('error', error)
    dispatch(
      fetchHighScoresError({
        error: 'An error occurred while fetching the high scores, please retry',
      })
    )
  }
}

const checkHighScores = () => async (dispatch, getState) => {
  const { movieQuiz } = getState()
  const isScoreHigh = movieQuiz.highScores.filter(
    item => item.score < movieQuiz.score
  )
  if (isScoreHigh.length > 0 && movieQuiz.isCurrentScoreHighScore === false) {
    dispatch(displayHighScoreForm())
  }
}

export const saveHighScore = () => async (dispatch, getState) => {
  dispatch(saveHighScoreRequest())
  try {
    const { movieQuiz } = getState()
    const { name, score, timer } = movieQuiz
    await axios.post(
      `${process.env.REACT_APP_HOST}/highscore`,
      {
        data: {
          name,
          score,
          time: timer,
        },
      },
      {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_JWT_TOKEN}`,
        },
      }
    )
    dispatch(saveHighScoreSuccess())
    dispatch(fetchHighScores())
  } catch (error) {
    console.log('error', error)
    dispatch(
      saveHighScoreError({
        error: 'An error occurred while saving the high scores, please retry',
      })
    )
  }
}

export const restartQuiz = () => ({ type: RESTART_QUIZ })
