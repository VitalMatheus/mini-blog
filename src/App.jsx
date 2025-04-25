import React, { useState } from 'react';
import SignUp from './components/signUp/index.jsx';
import Blog from './components/blog/index.jsx';

function App() {
  const [userName, setUserName] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <>
      {
        isSignedUp ? (
          <Blog userName={userName} />
        ) : (
          <SignUp userName={userName} setUserName={setUserName} setIsSignedUp={setIsSignedUp} />
        )
      }
    </>
  )
}

export default App;
