import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Categories from './Categories'

const categories = [
  {
    caption: 'Овощи',
    description: 'Помидорки,  огурки',
    id: '54d10daf910388b01d09c0cf'
  },
  {
    caption: 'Фрукты',
    description: null,
    id: '54d10db3910388b01d09c0d0'
  },
  {
    caption: 'Мясо',
    description: 'Хуясо!',
    id: '54d10daa910388b01d09c0ce'
  },
  {
    caption: 'Алкоголь',
    description: 'Бухло тащемто например.',
    id: '54d11079910388b01d09c0d1'
  },
  {
    caption: 'Грибы',
    description: null,
    id: '54da25ab6c08a2a026b1e71c'
  },
  {
    caption: 'Масло',
    description: null,
    id: '54da25db6c08a2a026b1e71d'
  }
]

storiesOf('Products-Categories', module)
  .add('Empty', () => <Categories categories={[]} />)
  .add('With categories', () => <Categories categories={categories} />)
