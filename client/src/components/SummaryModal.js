import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText'
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import DangerousHTML from './DangerousHTML'
import checkAnswer from '../helpers/checkAnswer'
import { styles } from '../helpers/styles'

const SummaryModal = ({
  classes,
  onClose,
  open,
  questions,
}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={open}
    onClose={onClose}
  >
    <div className={classes.paper}>
      <Typography variant="headline">Quiz Summary</Typography>
      <List>
        {questions.map(question => {
          return (
            <ListItem key={question.id} color="primary">
              <ListItemText>
                <DangerousHTML content={question.content} />
                
                <Typography variant="h6">
                  Your Answer: {question.userAnswer}
                </Typography>
                {question.answer !== question.userAnswer
                  ? <Typography variant="subtitle1" color="error">
                      Correct Answer: {question.answer}
                    </Typography>
                  : null
                }
                
              </ListItemText>
              <ListItemSecondaryAction>
                {!!checkAnswer(question.answer, question.userAnswer)//question.answer === question.userAnswer
                  ? <DoneIcon color="primary" fontSize="large" />
                  : <ClearIcon color="error" fontSize="large" />
                }                      
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  </Modal>
)

export default withStyles(styles)(SummaryModal)
