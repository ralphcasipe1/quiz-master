import React from 'react'
import { shallow } from 'enzyme'
import QuizCard from '../../../components/QuizCard'

describe('Component `QuizCard`', () => {
  it('should render successfully', () => {
    shallow(<QuizCard />)
  })
})