import React from 'react'
import {
  MemoryRouter,
  NavLink
} from 'react-router-dom'
import { mount } from 'enzyme'
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '../../../components/AppBar'

describe('Component `AppBar`', () => {
  const wrapper = mount(
    <MemoryRouter>
      <AppBar />
    </MemoryRouter>
  )

  it('test#1: should have only one `MaterialAppBar`', () => {
    expect(wrapper.find(MuiAppBar)).toHaveLength(1)
  })

  it('test#2: should have only one `Toolbar`', () => {
    expect(wrapper.find(Toolbar)).toHaveLength(1)
  })

  it('test#3: should have `NavLink` inside the `div`', () => {
    const div = wrapper.find('div')
    expect(div.contains(NavLink)).toEqual(true)
  })
})