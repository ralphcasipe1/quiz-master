import React from 'react'
import { shallow } from 'enzyme'
import Button from '@material-ui/core/Button'
import CardAction from '../../../components/CardAction'

describe('Component `CardAction`', () => {
  const wrapper = shallow(<CardAction />)

  it('test#1: should have 3 `Button`', () => {
    expect(wrapper.find(Button)).toHaveLength(3)
  })
})