import getAll, { getNodeDimension } from './get-node-dimensions'

describe('Node Dimensions', () => {
  it('should return a function', () => {
    getAll.should.be.a('function')
  })

  it('should call getBoundingClientRect', () => {
    const getBoundingClientRect = sinon.spy()
    const mock = {
      getBoundingClientRect
    }

    getAll(mock)

    // eslint-disable-next-line no-unused-expressions
    getBoundingClientRect.calledOnce.should.be.true
  })

  describe('getNodeDimension', () => {
    it('should be a function', () => {
      getNodeDimension.should.be.a('function')
    })

    it('should return a function', () => {
      getNodeDimension('width').should.be.a('function')
    })

    it('should return specific dimension', () => {
      const node = {
        getBoundingClientRect: () => ({
          width: 666
        })
      }

      const getWidth = getNodeDimension('width')

      getWidth(node).should.be.equal(666)
    })
  })
})
