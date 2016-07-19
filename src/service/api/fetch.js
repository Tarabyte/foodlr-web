import fetch from 'isomorphic-fetch'
import { localAPIPath, absoluteAPIPath } from './config'

const prefix = __SERVER__ ? absoluteAPIPath : localAPIPath

const fix = url => `${prefix}/${url}`

export default (url, options) => fetch(fix(url), options)
