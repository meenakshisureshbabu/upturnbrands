import React from 'react'

function Login() {

    const handleGoogleAuth = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self")
    }
  return (
    <div>
      <div>
        <button className='googlelogin' onClick={handleGoogleAuth}>Sign In With Google</button>
      </div>
    </div>
  )
}

export default Login