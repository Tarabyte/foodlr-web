import React from 'react'
import { storiesOf } from '@kadira/storybook'
import List from './List'

const questions = [
  {
    question: 'sdfsdf',
    answer: '<p>sdfsddsffd</p>',
    id: '54dbb245f08e85d01b3ef0ec'
  },
  {
    question: 'fds',
    answer: '<p>sdfsdfsdffsfdsd</p>',
    id: '54dbaf16f08e85d01b3ef0eb'
  },
  {
    question: 'sdfsd',
    answer: '<p>sdfsdfsd</p>',
    id: '54dbb45715240be82738d98e'
  },
  {
    question: 'sdfsdf',
    answer: '<p>sdfsdfsdf</p>',
    id: '54dbb2f6f08e85d01b3ef0ed'
  }
]

storiesOf('FAQ-List', module)
  .add('Empty', () => <List questions={[]} />)
  .add('With questions', () => <List questions={questions} />)
