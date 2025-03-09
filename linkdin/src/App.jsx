import React from 'react'
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Connection from './components/Connection'
import Signin from './components/Signin'
import SignUp from './components/SignUp'
import store from './utils/store'
import Profile from './components/Profile'
import Home from './components/Home'
import HomeBody from './components/HomeBody'
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeBody />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
