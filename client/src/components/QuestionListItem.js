import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography'

export default ({ 
  question, 
  onDeleteClick, 
  onEditClick 
}) => (
  <ListItem>
    <ListItemText>
      <Typography variant="title" color="primary">
        Q: {question.content}
      </Typography>
      <Typography variant="title">
        A: {question.answer}
      </Typography>
      <Typography 
        variant="subtitle1" 
        color="textSecondary"
      >
        {question.created_at}
      </Typography>
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton 
        aria-label="edit" 
        onClick={() => onEditClick(question.id)}
      >
        <EditIcon />
      </IconButton>
      <IconButton 
        aria-label="delete" 
        onClick={() => onDeleteClick(question.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)