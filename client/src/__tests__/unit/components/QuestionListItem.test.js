import React from 'react'
import { mount } from 'enzyme'
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import QuestionListItem from '../../../components/QuestionListItem'

describe('Component `Main`', () => {
  const wrapper = mount(<QuestionListItem question={[]}/>)
  
  it('test#1: `ListItem', () => {
    expect(wrapper.contains(ListItem)).toEqual(true)
    expect(wrapper.find(ListItem)).toHaveLength(1)
  })

  it('test#2: `ListItemText`', () => {  
    expect(wrapper.contains(ListItemText)).toEqual(true)
    expect(wrapper.find(ListItemText)).toHaveLength(1)
  })

  it('test#3: `Typography`', () => {  
    expect(wrapper.contains(Typography)).toEqual(true)
    // expect(wrapper.find(Typography)).toHaveLength(3)
  })

  it('test#4: `ListItemSecondaryAction`', () => {  
    expect(wrapper.contains(ListItemSecondaryAction)).toEqual(true)
  })

  it('test#5: `IconButton`', () => {
    expect(wrapper.contains(IconButton)).toEqual(true)
    expect(wrapper.find(IconButton)).toHaveLength(2)
  })

  it('test#6: `EditIcon`', () => {
    expect(wrapper.contains(EditIcon)).toEqual(true)
    expect(wrapper.find(EditIcon)).toHaveLength(1)
  })

  it('test#7: `DeleteIcon`', () => {
    expect(wrapper.contains(DeleteIcon)).toEqual(true)
    expect(wrapper.find(DeleteIcon)).toHaveLength(1)
  })
})

