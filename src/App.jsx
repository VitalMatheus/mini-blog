import React, { useState } from 'react';
import SignUp from '../src/signUp/index.jsx'
import Blog from '../src/blog/index.jsx'

function App() {
  const [userName, setUserName] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <>
      {
        isSignedUp ? (
          <Blog />
        ) : (
          <SignUp userName={userName} setUserName={setUserName} setIsSignedUp={setIsSignedUp} />
        )
      }
    </>
  )
}

export default App
