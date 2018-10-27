import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../helpers/styles'
import CardAction from './CardAction'

export const QuizCard = ({ 
  classes,
  dataLength,
  index,
  onChange,
  onClick,
  onSubmit,
  pageNumber, 
  question,
  values,
}) => (
  <Card className={classes.card} key={question.id}>
    <CardHeader
      title={`Question #${index + 1}`}
    />
    <form onSubmit={onSubmit}>
      <center>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {question.content}
          </Typography>

          <TextField
            onChange={onChange}
            name={`${question.id}`}
            value={values}
            placeholder="Your answer"
          />
        </CardContent>
        
        <CardAction 
          onClick={onClick}
          pageNumber={pageNumber}
          dataLength={dataLength}
        />
      </center>
    </form>
  </Card>
)

export default withStyles(styles)(QuizCard)
