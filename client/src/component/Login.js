import React, { useState } from 'react'
import "./login.css"
import { auth } from './firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


function Login() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await signInWithEmailAndPassword(auth,email, password);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }

    setEmail("")
    setPassword("")
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(auth,email, password);
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }

    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <div className="login">

        {!login ? <div className="container">
          <h1>Sign-in</h1>
          <form className='form'>

            <label htmlFor="email">Username :
              <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Username / Email ID' />
            </label>

            <label htmlFor="password">Password :
              <input type="password" className="pass" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter your password' />
            </label>

            <button type='submit' className='login_btn' onClick={handleLogin}> Sign-in</button>
          </form>

          <p> By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

          <button type='submit' className='login_btn' onClick={() => setLogin(!login)}> Sign-up</button>
        </div>
          : <div className="container">

            <h1>Sign-up</h1>
            <form className='form'>

              <label htmlFor="name">Full Name :
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Full Name' />
              </label>

              <label htmlFor="email">Email :
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email ID' />
              </label>

              <label htmlFor="password">Password :
                <input type="password" className="pass" value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter your password' />
              </label>

              <button type='submit' className='login_btn' onClick={handleRegister}> Create Account </button>
            </form>

            <button type='submit' className='login_btn' onClick={() => setLogin(!login)}> Sign-in</button>

          </div>
        }

      </div>
    </>
  )
}

export default Login