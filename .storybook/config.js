import 'babel-polyfill'
import { configure } from '@kadira/storybook'

const loadStories = () => {
  const load = require.context('../src', true, /-story\.js$/)


  load.keys().forEach(key => {
    load(key)
  })
}

configure(loadStories, module)
