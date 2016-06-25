import React, { PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import serialize from 'javascript-serialize';
import Helmet from 'react-helmet';

const Html = props => {
  const { assets, component, config, store } = props
  const head = Helmet.rewind()

  const innerHtml = component ? renderToString(component) : ''
  const saveStateGlobally =
    `window.${config.state} = ${store ? serialize(store.getState()) : '{}'}`

  return (
    <html lang={config.lang}>
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        <link rel="shortcut icon" href={`/${config.favicon}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
      <body>
        <div id={config.contentId} dangerouslySetInnerHTML={{ __html: innerHtml }}></div>
        <script id="initial-state" dangerouslySetInnerHTML={{ __html: saveStateGlobally }}></script>
        <script src={assets.javascript.vendor}></script>
        <script src={assets.javascript.main}></script>
      </body>
    </html>
  )
}

const { object, node } = PropTypes

Html.propTypes = {
  config: object.isRequired,
  assets: object.isRequired,
  component: node,
  store: object
}

export default Html
