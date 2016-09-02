const prefix = 'ui-state/header-nav/'
export const UI_STATE_HEADER_NAV_TOGGLE = `${prefix}toggle`
export const UI_STATE_HEADER_NAV_SHOW = `${prefix}show`
export const UI_STATE_HEADER_NAV_HIDE = `${prefix}hide`

const defaultState = {
  showMore: false
}

export const toggle = () => ({
  type: UI_STATE_HEADER_NAV_TOGGLE
})

export const show = () => ({
  type: UI_STATE_HEADER_NAV_SHOW
})

export const hide = () => ({
  type: UI_STATE_HEADER_NAV_HIDE
})

export default (state = defaultState, action = {}) => {
  const { type } = action
  const { showMore } = state

  switch (type) {
    case UI_STATE_HEADER_NAV_TOGGLE: {
      return {
        showMore: !showMore
      }
    }
    case UI_STATE_HEADER_NAV_HIDE: {
      return showMore ? { showMore: false } : state
    }
    case UI_STATE_HEADER_NAV_SHOW: {
      return showMore ? state : { showMore: true }
    }
    default:
      return state
  }
}
