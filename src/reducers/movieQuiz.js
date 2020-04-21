import { INCREMENT_TIMER } from '../actions/actionTypes'

const initialState = {
  timer: 1,
  currentQuestion: 0,
  currentAnswer: '',
  showResults: false,
}

export default function todo(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_TIMER:
      return {
        ...state,
        timer: state.timer + action.payload,
      }
    default:
      return state
  }
}
