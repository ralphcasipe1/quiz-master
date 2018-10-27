import React from 'react'
import { shallow } from 'enzyme'
import SummaryModal from '../../../components/SummaryModal'

describe('Component `SummaryModal`', () => {
  it('should render successfully', () => {
    shallow(<SummaryModal />)
  })
})