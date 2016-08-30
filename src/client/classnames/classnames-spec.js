import classnames from './'

describe('classnames helper', () => {
  it('should be a function', () => {
    classnames.should.be.a('function')
  })

  it('should filter truthy names', () => {
    classnames({ ok: true, fail: false }).should.be.equal('ok')
  })

  it('should join multiple truthy names', () => {
    classnames({ ok1: true, ok2: 1 }).should.be.equal('ok1 ok2')
  })

  it('should remove undefined', () => {
    classnames({ ok: '1', undefined: true }).should.be.equal('ok')
  })
})
