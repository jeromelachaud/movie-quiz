import {
  INCREMENT_SCORE,
  INCREMENT_TIMER,
  RESTART_QUIZ,
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ERROR,
  SET_QUIZ_STATE,
  SUBMIT_ANSWER,
} from '../actions/actionTypes'
import { questions } from '../data/questions.json'
const initialState = {
  questions,
  timer: 0,
  currentQuestion: 0,
  currentAnswer: '',
  isAnswerCorrect: '',
  error: '',
  score: 0,
  quizState: 'on',
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_TIMER:
      return {
        ...state,
        timer: state.timer + action.payload,
      }
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      }
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload.currentQuestion,
      }
    case SUBMIT_ANSWER:
      return {
        ...state,
        isAnswerCorrect:
          action.payload.answer ===
          state.questions[state.currentQuestion].answer,
      }
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.payload.currentAnswer,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      }
    case SET_QUIZ_STATE:
      return {
        ...state,
        quizState: action.payload.quizState,
      }
    case RESTART_QUIZ:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
