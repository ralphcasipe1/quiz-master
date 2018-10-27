import {
  ADD_QUESTION,
  ADD_QUESTION_FAILURE,
  ADD_QUESTION_SUCCESS,
  DELETE_QUESTION,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_SUCCESS,
  FETCH_QUESTIONS,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS,
  SELECT_QUESTION_FAILURE,
  SELECT_QUESTION,
  SELECT_QUESTION_SUCCESS,
  UPDATE_QUESTION,
  UPDATE_QUESTION_FAILURE,
  UPDATE_QUESTION_SUCCESS,
  RESET_SELECT_QUESTION
} from '../constants/question'

const initialState = {
  error: null,
  loading: false,
  question: null,
  questions: []
} 

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
    case DELETE_QUESTION:
    case FETCH_QUESTIONS:
    case SELECT_QUESTION:
    case UPDATE_QUESTION:
      return {
        ...state,
        loading: true
      }
    
    case ADD_QUESTION_FAILURE:
    case DELETE_QUESTION_FAILURE:
    case FETCH_QUESTIONS_FAILURE:
    case SELECT_QUESTION_FAILURE:
    case UPDATE_QUESTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: [action.question, ...state.questions]
      }

    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: action.questions
      }
    
    case SELECT_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        question: action.question
      }
    
    case UPDATE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: state.questions
          .map(question => {
            if (question.id !== action.question.id) {
              return question
            }

            return {
              ...question,
              content: action.question.content
            }
          })
      }
    
    case DELETE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: state.questions
          .filter(question =>
            question.id !== action.id  
          )
      }
    
    case RESET_SELECT_QUESTION:
      return {
        ...state,
        loading: false,
        error: null,
        question: null
      }

    default:
      return state
  }
}