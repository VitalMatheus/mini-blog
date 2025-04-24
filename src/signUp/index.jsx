import './style.css'

const SignUp = ({ userName, setUserName, setIsSignedUp }) => {
  return (
    <div className='signup-container'>
      <form className="sign-up-form">
        <h1>Welcome to CodeLeap network!</h1>
        <div>
          <label>
            <p>Please enter your username</p>
            <input onChange={(e) => setUserName(e.target.value)} type="text" value={userName} name="username" placeholder="John Doe" />
          </label>
          <button onClick={() => setIsSignedUp(true)} className={`button ${userName != '' && 'enabled'}`} disabled={userName === ''}>Enter</button>
        </div>
      </form >
    </div >
  );
}

export default SignUp;