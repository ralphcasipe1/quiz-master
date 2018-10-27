import React, { Fragment } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../../../components/AppBar'
import Main from '../../../components/Main'
import Layout from '../../../components/Layout'

describe('Component `Layout`', () => {
  const content = 'This is a content'
  const wrapper = mount(
    <MemoryRouter>
      <Layout>{content}</Layout>
    </MemoryRouter>
  )

  it('test#1: should have `CssBaseline`', () => {
    expect(wrapper.contains(CssBaseline)).toEqual(true)
  })
  
  it('test#2: should render children', () => {
    expect(wrapper.contains(content)).toEqual(true)
  })
})