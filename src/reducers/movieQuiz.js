import {
  DELETE_HIGH_SCORES_ERROR,
  DELETE_HIGH_SCORES_REQUEST,
  DELETE_HIGH_SCORES_SUCCESS,
  DISPLAY_HIGH_SCORE_FORM,
  FETCH_HIGH_SCORES_ERROR,
  FETCH_HIGH_SCORES_REQUEST,
  FETCH_HIGH_SCORES_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  INCREMENT_SCORE,
  INCREMENT_TIMER,
  RESTART_QUIZ,
  SAVE_HIGH_SCORE_ERROR,
  SAVE_HIGH_SCORE_REQUEST,
  SAVE_HIGH_SCORE_SUCCESS,
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ERROR,
  SET_NAME,
  SET_QUIZ_STATE,
  SUBMIT_ANSWER,
} from '../actions/actionTypes'
const initialState = {
  questions: null,
  timer: 0,
  currentQuestion: 0,
  currentAnswer: '',
  isAnswerCorrect: '',
  error: '',
  score: 0,
  quizState: 'off',
  hasQuizRestarted: false,
  isCurrentScoreHighScore: false,
  highScores: [],
  displayHighScoreForm: false,
  name: '',
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS: {
      return {
        ...state,
        questions: action.payload.questions,
        quizState: state.hasQuizRestarted ? 'on' : 'off',
      }
    }

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
    case FETCH_HIGH_SCORES_REQUEST:
    case FETCH_QUESTIONS_REQUEST:
    case DELETE_HIGH_SCORES_REQUEST:
      return {
        ...state,
        quizState: 'idle',
      }
    case FETCH_HIGH_SCORES_SUCCESS:
      return {
        ...state,
        quizState: 'over',
        highScores: action.payload.highScores.data,
      }
    case SAVE_HIGH_SCORE_REQUEST:
      return {
        ...state,
        quizState: 'idle',
      }
    case SAVE_HIGH_SCORE_SUCCESS:
      return {
        ...state,
        isCurrentScoreHighScore: true,
        displayHighScoreForm: false,
        quizState: 'over',
      }
    case SAVE_HIGH_SCORE_ERROR:
    case FETCH_HIGH_SCORES_ERROR:
    case FETCH_QUESTIONS_ERROR:
    case DELETE_HIGH_SCORES_ERROR:
      return {
        ...state,
        quizState: 'error',
        error: action.payload.error,
      }
    case DISPLAY_HIGH_SCORE_FORM:
      return {
        ...state,
        displayHighScoreForm: true,
      }
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      }
    case DELETE_HIGH_SCORES_SUCCESS: {
      return {
        ...state,
        quizState: 'over',
        highScores: [],
      }
    }
    case RESTART_QUIZ:
      return {
        ...initialState,
        hasQuizRestarted: true,
      }
    default:
      return state
  }
}
