import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { shallow } from 'enzyme'
import Question from '../../../containers/Question'

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }

  return shallow(component, { context })
}

describe('Container `Question`', () => {
  it ('should render successfully', () => {
    const testState = {
      test: {}
    }

    const store = createMockStore(testState)
    const component = shallowWithStore(<Question />, store)
    expect(typeof component).toBe('object')
  })

  
})