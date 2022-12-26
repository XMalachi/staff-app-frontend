import React from 'react'
import Banner from './Banner/Banner'
import Features from './Features/Features'
// import { useDispatch } from 'react-redux'
// import { LOGOUT_STAFF } from '../Redux/Constants/StaffConstants'

function Home() {

  // const dispatch  =  useDispatch()

  

  return (
    <div>
        <Banner />
        <Features />
    </div>
  )
}

export default Home