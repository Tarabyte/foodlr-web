import { default as fetch } from './fetch'

export const json = (...args) => fetch(...args).then(x => x.json())
