import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Categories from './Categories'

const categories = [
  {
    caption: 'Супы',
    description: 'Борщи и минеты',
    id: '54be5af4dba1793c36bdba87'
  },
  {
    caption: 'Салаты',
    description: 'Салатики, ням-ням.',
    id: '54be5b31dba1793c36bdba8b'
  },
  {
    caption: 'Вторые блюда',
    description: 'Основные блюда из мяса, рыбы, овощей.',
    id: '54be5afadba1793c36bdba88'
  },
  {
    caption: 'Десерты',
    description: 'Няшные сладости',
    id: '54be5affdba1793c36bdba89'
  }
]

storiesOf('Header-Categories', module)
  .add('Default', () => <Categories categories={categories} />)
