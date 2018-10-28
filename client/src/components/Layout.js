import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from './AppBar'
import Main from './Main'

const Layout = ({ children, location: { pathname } }) => (
  <Fragment>
    <CssBaseline />
    
    <AppBar location={pathname}/>
    
    <Main>
      {children}
    </Main>
  </Fragment>
)

export default withRouter(Layout)