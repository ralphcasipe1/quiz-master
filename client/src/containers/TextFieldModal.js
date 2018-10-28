import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import RichTextEditor from 'react-rte'

import { 
  addQuestion, 
  updateQuestion,
  resetSelectQuestion
} from '../actions/questions'
import { styles } from '../helpers/styles'

class TextFieldModal extends Component {
  state = {
    content: RichTextEditor.createEmptyValue(),
    answer: ''
  }
  
  onChange = content => {    
    this.setState({content});
    if (this.props.onChange) {

      this.props.onChange(
        content.toString('html')
      );
    }
  };

  handleChange = event => 
    this.setState({ [event.target.name]: event.target.value })

  handleSubmit = event => {
    event.preventDefault()

    const { 
      addQuestion,
      onClose,
      updateQuestion, 
      question
    } = this.props

    const {
      content,
      answer
    } = this.state

    if (question) {
      updateQuestion(
        question.id, 
        {
          content: content.toString('html'),
          answer
        }
      )
    } else {
      addQuestion({
        content: content.toString('html'),
        answer
      })
    }
    
    this.setState({content: RichTextEditor.createEmptyValue()})
    
    onClose()
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
        content: RichTextEditor.createEmptyValue(),
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
          
          <RichTextEditor
            value={this.state.content}
            onChange={this.onChange}
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