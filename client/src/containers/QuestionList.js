import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import { 
  deleteQuestion,
  fetchQuestions,
  selectQuestion
} from '../actions/questions'
import QuestionListItem from '../components/QuestionListItem'

class QuestionList extends Component {

  componentDidMount() {
    this.props.fetchQuestions()
  }

  handleDeleteClick = id => {
    this.props.deleteQuestion(id)
  }

  handleEditClick = id => {
    this.props.selectQuestion(id)
    
    this.props.onOpen(id)
  }

  render() {
    if (!this.props.questions) {
      return <h1>Loading</h1> 
    }

    return (
      <List>
        {this.props.questions.map(question => (
          <QuestionListItem 
            key={question.id}
            question={question}
            onEditClick={this.handleEditClick}
            onDeleteClick={this.handleDeleteClick}
          />
        ))}
      </List>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions
})

QuestionList = connect(
  mapStateToProps,
  {
    deleteQuestion,
    fetchQuestions,
    selectQuestion
  }
)(QuestionList)

export default QuestionList