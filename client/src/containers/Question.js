import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { resetSelectQuestion } from '../actions/questions'
import AddButton from '../components/AddButton'
import QuizLauncher from '../components/QuizLauncher'
import TextFieldModal from './TextFieldModal'
import QuestionList from './QuestionList'

class Question extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }
    
  handleClose = () => {
    this.setState({
      open: false
    })
    this.props.resetSelectQuestion()
  }
    
  render() {
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <AddButton onClick={this.handleOpen} />
          <QuizLauncher />
        </div>
        <TextFieldModal 
          onClose={this.handleClose} 
          open={this.state.open} 
        />
        <QuestionList 
          onItemClick={this.handleOpen} 
          onOpen={this.handleOpen}
        />
      </Fragment>
    );
  }
}

export default connect(null, {
  resetSelectQuestion
})(Question);
