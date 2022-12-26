import React from 'react'
import LoginForm from '../../Form/LoginForm/LoginForm'
import Loader from '../../Loader/Loader'
import { useSelector } from 'react-redux'
import Message from '../../Message/Message'

function LoginScreen() {
  const store = useSelector((state)=> state.loginStaff)
  const {loading, success, error} = store;
  return (
    <>
      {loading && <Loader />}
      {success && <Message icon='success' title='success' />}
      {error && <Message icon='error' title='Login Failed. Please Check Username and Password and try Again' />}
      <div>
          <LoginForm />
      </div>
    </>
  )
}

export default LoginScreen