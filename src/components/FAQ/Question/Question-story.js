import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Question from './Question'

const question = {
  id: '54dbb245f08e85d01b3ef0ec',
  question: 'Как отбираются рецепты?',
  answer: `<p>Каждый рецепт проходит 10 стадий отбора и проверки...</p>
  <ul>
    <li>Lorem ipsum dolor sit amet, ex populo interpretaris his. </li>
    <li>Lorem ipsum dolor sit amet, ex populo interpretaris his. </li>
    <li>Lorem ipsum dolor sit amet, ex populo interpretaris his. </li>
    <li>Lorem ipsum dolor sit amet, ex populo interpretaris his. </li>
  </ul>
  `
}

storiesOf('FAQ-Question', module)
  .add('Default', () => <Question question={question} />)
