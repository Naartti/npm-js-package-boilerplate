import 'src/util/polyfill.js'
import myModule from 'src/myModule.js'

// Do dev-testing to your module here
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 Dev mode enabled')
  window.myModule = myModule
}

// Library export
export default myModule
