import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from './AppBar'
import Footer from './Footer'
import Main from './Main'

export default ({ children }) =>  (
  <Fragment>
    <CssBaseline />
    <AppBar />
    
    <Main>
      {children}
    </Main>

    <Footer />  
  </Fragment>
)