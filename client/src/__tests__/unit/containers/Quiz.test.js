import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { shallow } from 'enzyme'
import Quiz from '../../../containers/Quiz'

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }

  return shallow(component, { context })
}

describe('Container `Quiz`', () => {
  it ('should render successfully', () => {
    const testState = {
      test: {}
    }

    const store = createMockStore(testState)
    const component = shallowWithStore(<Quiz />, store)
    expect(typeof component).toBe('object')
  })
})