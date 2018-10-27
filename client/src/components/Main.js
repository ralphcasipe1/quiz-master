import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'

export default ({ children }) => (
  <Fragment>
    <Paper elevation={1}>
      {children}  
    </Paper>
  </Fragment>
)