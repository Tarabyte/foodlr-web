import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { getNodeDimension } from '../../../client/node-dimensions/get-node-dimensions'
import resizeDetector from '../../../client/node-dimensions/resize-monitor'
import classnames from '../../../client/classnames'
import hamburger from 'react-icons/fa/bars'
import cross from 'react-icons/fa/close'
import { connect } from 'react-redux'
import { toggle } from '../../../redux/ducks/ui-state/header-nav'

const width = getNodeDimension('width')

/**
 * Split items by running total width
 */
const split = (items, total, widthes) => {
  if (!total) {
    return [items, []]
  }

  const left = []
  const right = []
  let runningWidth = total

  if (widthes.length !== items.length) {
    throw new Error(`Unexpected number of width for items provided.
      Items ${items.length}, width ${widthes.length}`)
  }

  widthes.forEach((item, i) => {
    runningWidth -= item
    const arr = runningWidth >= 0 ? left : right

    arr.push(items[i])
  })


  return [left, right]
}

class Navigation extends Component {
  static propTypes = {
    intl: intlShape,
    showMore: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      linksWidth: null,
      childrenWidth: [],
      initialRendering: true
    }

    this.setLinksContainer = this.setLinksContainer.bind(this)
    this.updateLinksWidth = this.updateLinksWidth.bind(this)
    this.toggleShowMore = this.toggleShowMore.bind(this)
    this.closeIfOpened = this.closeIfOpened.bind(this)
  }

  componentDidMount() {
    this.updateLinksWidth()

    resizeDetector().listenTo(this.linksContainer, this.updateLinksWidth)
  }

  componentWillUnmount() {
    resizeDetector().removeAllListeners(this.linksContainer)
    window.removeEventListener('click', this.closeIfOpened)
  }

  setLinksContainer(container) {
    this.linksContainer = container ? findDOMNode(container) : null
    this.linksContainerItems = container
      ? [].slice.call(this.linksContainer.querySelectorAll('li'))
      : []
  }

  closeIfOpened() {
    if (this.props.showMore) {
      this.toggleShowMore()
    }
  }

  toggleShowMore() {
    this.props.toggle()
    setTimeout(() => {
      const method = `${this.props.showMore ? 'add' : 'remove'}EventListener`

      window[method]('click', this.closeIfOpened)
    }, 0)
  }

  updateLinksWidth() {
    const {
      linksContainer,
      linksContainerItems
    } = this

    const { initialRendering, childrenWidth } = this.state
    const { showMore } = this.props
    const containerWidth = width(linksContainer)

    if (initialRendering) {
      this.setState({
        initialRendering: false,
        linksWidth: containerWidth,
        childrenWidth: linksContainerItems.map(width)
      })
    } else {
      this.setState({
        linksWidth: containerWidth
      })

      // was showing more and now container is large enough to fit all children
      if (showMore && containerWidth > childrenWidth.reduce((sum, x) => sum + x, 0)) {
        this.toggleShowMore()
      }
    }
  }

  render() {
    const styles = require('./Nav.css') // eslint-disable-line global-require

    // eslint-disable-next-line global-require
    const messages = require('./Nav.messages').default

    const links = [
      { to: '/', message: messages.home },
      { to: '/rubric/world', message: messages.worldCuisines },
      { to: '/recipes', message: messages.recipes },
      { to: '/products', message: messages.products },
      { to: '/rubric/school', message: messages.school },
      { to: '/rubric/travelers', message: messages.travelers }
    ]

    const {
      linksWidth,
      childrenWidth,
      initialRendering
    } = this.state

    const {
      intl: { formatMessage },
      showMore
    } = this.props

    const visibleStyle = {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'inline-block',
      fontSize: 18
    }

    const visibleItemStyle = {
      display: 'inline-block',
      padding: '0 0 0 1em'
    }


    const renderLink = (itemClass, linkClass, style) => ({ to, message }) => (
      <li className={itemClass} key={message.id} style={style}>
        <Link to={to} className={linkClass}>
          <FormattedMessage {...message} />
        </Link>
      </li>
    )

    const [visibleLinks, moreLinks] = split(links, linksWidth, childrenWidth)

    const renderMore = () => {
      if (showMore) {
        return (<ul className={styles.linksMore}>
          {
            moreLinks
              .map(renderLink(`${styles.linksItem} ${styles.linksItemMore}`, styles.linksItemLink))
          }
        </ul>)
      }

      return null
    }

    const renderShowMore = () => {
      if (moreLinks.length) {
        const Icon = showMore ? cross : hamburger
        return (
          <li
            className={classnames({
              [styles.shown]: showMore,
              [styles.showMore]: true,
              [styles.linksItem]: true
            })}
            onClick={this.toggleShowMore}
            title={formatMessage(messages.showMore)}
          >
            <Icon />
            {renderMore()}
          </li>)
      }

      return null
    }

    return (
      <nav className={styles.container}>
        <div className={styles.links} ref={this.setLinksContainer}>
          <ul className={styles.linksVisible} style={visibleStyle}>
            {
              /* Render all links on initial rendering to make measurements */
              (initialRendering ? links : visibleLinks)
                .map(renderLink(styles.linksItem, styles.linksItemLink, visibleItemStyle))
            }
            {renderShowMore()}
          </ul>
        </div>
        <span className={styles.random}>
          <Link to="/recipes/random" className={styles.randomText}>
            <FormattedMessage {...messages.random} />
          </Link>
        </span>
      </nav>
    )
  }
}

export const Nav = injectIntl(Navigation)

const mapStateToProps = state => ({
  showMore: state.ui.headerNav.showMore
})

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
