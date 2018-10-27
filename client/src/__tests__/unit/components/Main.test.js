import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../../components/Main'

describe('Component `Main`', () => {
  it('test#1: should render children', () => {
    const content = 'This is the content'
    const wrapper = shallow(<Main>{content}</Main>)
    
    expect(wrapper.contains(content)).toEqual(true)
  })
})