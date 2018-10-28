import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <Fragment>
    <Link 
      to="/quizes" 
      style={{ textDecoration: 'none' }}
    >
      <span 
        role="img" 
        aria-label="launcher"
        aria-labelledby="launcher-quiz-master"
      >
        <h2>🚀 Start Quiz</h2>
      </span>
    </Link>
  </Fragment>
)