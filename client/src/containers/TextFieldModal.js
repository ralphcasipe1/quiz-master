import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { 
  addQuestion, 
  updateQuestion,
  resetSelectQuestion
} from '../actions/questions'
import { styles } from '../helpers/styles'

class TextFieldModal extends React.Component {
  state = {
    content: '',
    answer: ''
  }

  handleChange = event => 
    this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()
    
    if (this.props.question) {
      this.props.updateQuestion(
        this.props.question.id, 
        this.state
      )
    } else {
      console.log(this.state)
      this.props.addQuestion(this.state)
    }
    
    this.setState({content: ''})
    
    this.props.onClose()
  }

  componentDidUpdate(prevProps) {
    const { question } = this.props
    
    if (!prevProps.question && this.props.question) {
      this.setState({
        content: question.content,
        answer: question.answer
      })
    }

    if (prevProps.question && !this.props.question) {
      this.setState({
        content: '',
        answer: ''
      })
    }
  }

  render() {
    const { 
      classes,
      onClose,
      open,
    } = this.props;
    
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={onClose}
      >
        <form 
          onSubmit={this.handleSubmit}
          className={classes.paper}
        >
          <Typography variant="h6">
            The Question
          </Typography>
          
          <TextField
            autoFocus
            fullWidth
            multiline
            name="content"
            rows="5"
            rowsMax="6"
            value={this.state.content}
            placeholder="How many countries in the world?"
            onChange={this.handleChange}
            className={classes.textField}
            margin="normal"
            helperText="Please enter the question you want to ask"
            variant="outlined"
          />

          <Typography variant="h6">
            The Answer
          </Typography>

          <TextField
            fullWidth 
            margin="normal"
            name="answer"
            onChange={this.handleChange}
            value={this.state.answer}
            placeholder="195"
            variant="outlined"
          />

          <Button
            type="submit"
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </Modal>
    );
  }
}

const TextFieldModalWrapped = withStyles(styles)(TextFieldModal);

const mapStateToProps = state => ({
  question: state.question
})

export default connect(

  mapStateToProps, 
  {
    addQuestion,
    updateQuestion,
    resetSelectQuestion
  }
)(TextFieldModalWrapped)