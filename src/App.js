import React from 'react'
import Counter from './Counter'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DisplayCounter from './DisplayCounter'
import { applyMiddleware, createStore }  from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import counterReducer from './reducer'

import Ola from './Ola'


Enzyme.configure({ adapter: new Adapter() })

let store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <DisplayCounter />
        <Ola />
      </div>
    </Provider>
  )
}

export default App
