import React from 'react'
import RegisterForm from '../../Form/RegisterForm/RegisterForm'
import Loader from '../../Loader/Loader'
import { useSelector } from 'react-redux'

function RegisterScreen() {
  const store = useSelector((state)=> state.createStaff)
  const {loading} = store;
  return (

    <>
      {loading && <Loader />}
      <div className='bg-gray-100 px-40 py-10'>
    
        <RegisterForm />
    </div>
    </>
  )
}

export default RegisterScreen