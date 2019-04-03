import './util/polyfill.js'
import logScope, { init } from './logScope.js'

// const log = logScope('scopeName')
// log.success('We have a new scope!')

// window.init = init
// window.log = log

// Library export
export { logScope, init }

export default logScope
