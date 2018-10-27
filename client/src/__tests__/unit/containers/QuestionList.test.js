import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { shallow } from 'enzyme'
import QuestionList from '../../../containers/QuestionList'

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }

  return shallow(component, { context })
}

describe('Container `QuestionList`', () => {
  it ('should render successfully', () => {
    const testState = {
      test: {}
    }

    const store = createMockStore(testState)
    const component = shallowWithStore(<QuestionList />, store)
    expect(typeof component).toBe('object')
  })
})