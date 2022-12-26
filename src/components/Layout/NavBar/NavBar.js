import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../../Button/Button'
import {useSelector} from 'react-redux'


function NavBar() {
    const [dropDownState, setDropDownState] = useState(false)

    const toggleDropDown = () => {
        setDropDownState((prev)=> !prev)
    }

    const staff = useSelector(state => state.loginStaff)
    let theStaff = staff.staffInfo? staff.staffInfo.username : ''
    console.log("staff fom navbar", theStaff)
    // let staff = localStorage.getItem('staffInfo') 
    // staff = JSON.parse(staff)
    // let thestaff = staff ? staff.username : 'login'
    // console.log(thestaff, "staff")

    return (
        

<div>
    <nav className="bg-white dark:bg-gray-800  shadow relative">
        <div className="max-w-7xl mx-auto px-8">

            <div className="flex items-center justify-between h-16">

                <div className="flex items-center justify-between w-full">
                    <Link className="flex-shrink-0 flex items-center" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        StaffApp

                    </Link>

                    <div className="hidden md:block flex">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link className="text-gray-500  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Home
                            </Link>
                            
                            <Link to={`/client`} className="text-gray-500 dark:text-white  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Dashboard
                            </Link>
                            <Link className="text-gray-500  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                About
                            </Link>
                            <Link className="text-gray-500  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex ">
                        <Link to='/client/register' className="mx-2" ><span ><Button color='indigo' text="Register" textcolor='white' /> </span></Link>
                        <Link to='/client/login' className="mx-2" style={{border: '2px solid rgb(79,70,229)', borderRadius: "10px", color: 'rgb(79,70,229)'}}>
                            <span><Button  text="Log In" textcolor='rgb(79,70,229)' /></span>
                        </Link>
                        
                    </div>

                </div>

                

                <div className="mr-2 flex md:hidden" onClick={toggleDropDown}>
                    <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

        </div>

        {
            dropDownState && 
            <div>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link className="text-gray-500 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Home
                    </Link>
                    <Link to={`/client`} className="text-gray-500 hover:text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Dashboard
                    </Link>
                    <Link className="text-gray-500 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        About
                    </Link>
                    <Link className="text-gray-500 hover:text-gray-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                        Contact
                    </Link>
                </div>
                <div className="block md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <Link to='/client/register' className="mx-2"><span className="mx-2"><Button className="mx-2" color='indigo' text="Register" textcolor='white' /> </span></Link>
                        <Link to='/client/login' className="mx-2" style={{border: '2px solid rgb(79,70,229)', borderRadius: "10px", color: 'rgb(79,70,229)'}} >
                            <span ><Button text="Log In" textcolor='rgb(79,70,229)' /></span>
                        </Link>
                    </div>
                    
                </div>

            </div>
        }


    </nav>
</div>


    )
}

export default NavBar