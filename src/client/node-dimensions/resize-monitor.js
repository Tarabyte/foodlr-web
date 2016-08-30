import ResizeDetector from 'element-resize-detector'

let instance = null

export default () => {
  if (instance) {
    return instance;
  }

  instance = new ResizeDetector({
    strategy: 'scroll'
  })

  return instance
}
