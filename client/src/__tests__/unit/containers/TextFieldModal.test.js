import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { shallow } from 'enzyme'
import TextFieldModal from '../../../containers/TextFieldModal'

const shallowWithStore = (component, store) => {
  const context = {
    store,
  }

  return shallow(component, { context })
}

describe('Container `TextFieldModal`', () => {
  it ('should render successfully', () => {
    const testState = {
      test: {}
    }

    const store = createMockStore(testState)
    const component = shallowWithStore(<TextFieldModal />, store)
    expect(typeof component).toBe('object')
  })
})