import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import SummaryModal from '../components/SummaryModal'
import QuizCard from '../components/QuizCard'
import api from '../constants/apiUrl'
import paginate from '../helpers/paginate'
import { styles } from '../helpers/styles'

class Quiz extends Component {
  state ={
    page: 1,
    questions: [],
    values: [],
    open: false
  }

  async componentDidMount() {
    const response = await fetch(api)
    const data = await response.json()

    this.setState({
      questions: data
    })
  }

  handleActionClick = purpose => {
    this.setState({
      page: purpose === 'next' 
        ? this.state.page + 1
        : this.state.page - 1
      })
  }
  
  handleChange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      questions: this.state.questions.map(question => ({
        ...question,
        userAnswer: this.state.values[question.id]
      })),
      open: true
    })
  }
  
  handleClose = () => 
    this.setState({
      open: false
    })

  render() {
    const { open, questions } = this.state
    
    return (
      <Fragment>
        <SummaryModal
          onClose={this.handleClose}
          open={open}
          questions={questions}
        />

        {paginate(this.state.questions, 1, this.state.page)
          .map((question, index) => (
            <QuizCard
              dataLength={this.state.questions.length}
              index={index}
              key={question.id}
              onChange={this.handleChange}
              onClick={this.handleActionClick}
              onSubmit={this.handleSubmit}
              pageNumber={this.state.page}
              question={question}
              values={this.state.values[question.id]}
            />
          )
        )}
      </Fragment>
    )
  }
}

export default withStyles(styles)(Quiz)