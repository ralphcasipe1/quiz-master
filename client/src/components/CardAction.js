import React, { Fragment} from 'react'
import Button from '@material-ui/core/Button'

export default ({ 
  dataLength,
  onClick,
  pageNumber,
}) => (
  <Fragment>
    <Button 
      disabled={pageNumber === 1}
      onClick={() => onClick('previous')}
    >
      Prev
    </Button>
    <Button 
      disabled={pageNumber === dataLength}
      onClick={() => onClick('next')}
    >
      Next
    </Button>
    <Button 
      disabled={pageNumber !== dataLength}
      type="submit"
    >
      Submit
    </Button>
  </Fragment>
)