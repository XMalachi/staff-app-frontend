import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AdminScreen from './components/screens/AdminScreen/AdminScreen'
import HomeScreen from './components/screens/HomeScreen.js/HomeScreen'
import LoginScreen from './components/screens/LoginScreen/LoginScreen'
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen'
import StaffScreen from './components/screens/StaffScreen/StaffScreen'

function Router() {
    // const staff = useSelector(state => state.loginStaff)
    
    // console.log("staff", staff)

      // let staff = localStorage.getItem('staffInfo')
      // staff =  JSON.parse(staff);
      // let thestaff = staff ? staff.username : ''
      // console.log(staff, "staff from route")


  return (
    <div>
        <Routes>
          <Route path='/' element={<Layout><HomeScreen /></Layout>} />
          <Route path='/client' element={<StaffScreen />} />
          <Route path='/admin' element={<AdminScreen />} />
          <Route path='/client/register' element={<RegisterScreen />} />
          <Route path='/client/login' element={<LoginScreen /> } />
        </Routes>
    </div>
  )
}

export default Router