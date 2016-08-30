import monitor from './resize-monitor'

describe('ResizeMonitor', () => {
  it('should be a function', () => {
    monitor.should.be.a('function')
  })

  it('should return monitor instance', () => {
    monitor().should.contain.keys(['listenTo', 'removeAllListeners'])
  })

  it('should return the same instance', () => {
    monitor().should.be.equal(monitor())
  })
})
