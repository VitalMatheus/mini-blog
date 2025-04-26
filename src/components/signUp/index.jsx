import { useSelector, useDispatch } from 'react-redux'
import { setUserName, setIsSignedUp } from '../../redux/signupSlice'
import './style.css'

const SignUp = () => {
  const username = useSelector(state => state.signup.username)

  const dispatch = useDispatch()

  return (
    <div className='signup-container'>
      <form className="sign-up-form">
        <h1>Welcome to CodeLeap network!</h1>
        <div>
          <label>
            <p>Please enter your username</p>
            <input onChange={(e) => dispatch(setUserName(e.target.value))} type="text" value={username} name="username" placeholder="John Doe" />
          </label>
          <button onClick={() => dispatch(setIsSignedUp(true))} className={`button ${username !== '' && 'enabled'}`} disabled={username === ''}>Enter</button>
        </div>
      </form >
    </div >
  );
}

export default SignUp;