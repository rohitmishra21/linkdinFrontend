import React from 'react'
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Connection from './components/Connection'
import Signin from './components/Signin'
import SignUp from './components/SignUp'
import store from './utils/store'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Body />} >
            <Route path='/connection' element={<Connection />} />
          </Route>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
