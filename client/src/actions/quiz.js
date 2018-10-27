import {
  NEXT_PAGE,
  PREVIOUS_PAGE
} from '../constants/quiz'

export const nextPage = () => ({ type: NEXT_PAGE })

export const previousPage = () => ({ type: PREVIOUS_PAGE })