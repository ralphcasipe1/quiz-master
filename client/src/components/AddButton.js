import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default ({ onClick }) => (
  <Button 
    aria-label="Edit"  
    color="secondary"
    onClick={onClick}
    variant="fab"
  >
    <AddIcon />
  </Button>
)