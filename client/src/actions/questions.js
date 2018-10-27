import {
  ADD_QUESTION,
  ADD_QUESTION_FAILURE,
  ADD_QUESTION_SUCCESS,
  DELETE_QUESTION,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_SUCCESS,
  FETCH_QUESTIONS, 
  FETCH_QUESTIONS_SUCCESS, 
  FETCH_QUESTIONS_FAILURE,
  SELECT_QUESTION,
  SELECT_QUESTION_SUCCESS,
  SELECT_QUESTION_FAILURE,
  UPDATE_QUESTION,
  UPDATE_QUESTION_FAILURE,
  UPDATE_QUESTION_SUCCESS,
  RESET_SELECT_QUESTION,
} from '../constants/question'
import api from '../constants/apiUrl'

export const fetchQuestions = () => async (dispatch) => {
  dispatch({
    type: FETCH_QUESTIONS
  })

  try {
    const response = await fetch(api)
    const data = await response.json()

    return dispatch({
      type: FETCH_QUESTIONS_SUCCESS,
      questions: data
    })
  } catch (error) {
    return dispatch({
      type: FETCH_QUESTIONS_FAILURE,
      error
    })
  }
}

export const addQuestion = value => dispatch => {
  dispatch({
    type: ADD_QUESTION
  })

  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;',
    },
    body: JSON.stringify(value)
  })
    .then(response => response.json())
    .then(
      data => dispatch({
        type: ADD_QUESTION_SUCCESS,
        question: data
      }),
      error => dispatch({
        type: ADD_QUESTION_FAILURE,
        error
      })
    )
}

export const selectQuestion = id => async (dispatch)  => {
  dispatch({
    type: SELECT_QUESTION
  })

  try {
    const response = await fetch(`${api}/${id}`)
    const data = await response.json()

    return dispatch({
      type: SELECT_QUESTION_SUCCESS,
      question: data
    })
  } catch (error) {
    return dispatch({
      type: SELECT_QUESTION_FAILURE,
      error
    })
  }
}

export const resetSelectQuestion = () => ({ type: RESET_SELECT_QUESTION })

export const updateQuestion = (id, value) => async (dispatch) => {
  dispatch({
    type: UPDATE_QUESTION
  })

  try {
    const response = await fetch(`${api}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;',
      },
      body: JSON.stringify(value)
    })
    const data = await response.json()

    return dispatch({
      type: UPDATE_QUESTION_SUCCESS,
      question: data
    })
    
  } catch (error) {
    return dispatch({
      type: UPDATE_QUESTION_FAILURE,
      error
    })
  }
}

export const deleteQuestion = id => async (dispatch) =>  {
  dispatch({
    type: DELETE_QUESTION
  })

  try {
    await fetch(`${api}/${id}`, {
      method: 'DELETE'
    })

    return dispatch({
      type: DELETE_QUESTION_SUCCESS,
      id
    })

  } catch (error) {
    return dispatch({
      type: DELETE_QUESTION_FAILURE,
      error
    })
  }
}