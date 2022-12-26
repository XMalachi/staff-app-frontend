import React from 'react'
import Footer from './Footer/Footer'
import NavBar from './NavBar/NavBar'


function Layout({children}) {
  return (
    <div>
        <NavBar/>
            <div>
                {children}
            </div>
        <Footer />
    </div>
  )
}

export default Layout