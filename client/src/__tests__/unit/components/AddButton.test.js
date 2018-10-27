import React from 'react'
import { shallow } from 'enzyme'
import AddButton from '../../../components/AddButton'
import AddIcon from '@material-ui/icons/Add';

describe('Component `AddButton`', () => {
  const wrapper = shallow(<AddButton />)
  
  it('test#1: should contain `<AddIcon />`', () => {
    expect(wrapper.contains(<AddIcon />)).toEqual(true)
  })
})