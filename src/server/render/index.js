import React from 'react'
import { renderToString } from 'react-dom/server'
import Html from './Html'

/**
 * Render doctype and Html component
 * @param  {Object} options Options to pass to html
 * @return {String}         Rendered html including doctype
 */
export default options => `<!doctype html>\n${renderToString(<Html {...options} />)}`
