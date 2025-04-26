import React from 'react'
import { useSelector } from 'react-redux'
import SignUp from './components/signUp/index.jsx'
import Blog from './components/blog/index.jsx'

function App() {
  const isSignedUp = useSelector(state => state.signup.isSignedUp)

  return (
    <>
      {isSignedUp
        ? <Blog />
        : <SignUp />}
    </>
  )
}

export default App;
