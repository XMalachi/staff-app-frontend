
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, Transition } from '@headlessui/react'
import Swal from 'sweetalert2'
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline'
import Stats from './Stats'
import Tasks from './Tasks'
import NewsFeeds from './NewsFeeds'
import Calender from './Calender'
// import { LOGOUT_STAFF } from '../Redux/Constants/StaffConstants'
import { logout } from '../Redux/Actions/StaffAction'

const navigation = [
  { name: 'Dashboard', href: '#stats', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Tasks', href: '#tasks', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#calender', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#newsfeeds', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes) { 
    
  return classes.filter(Boolean).join(' ')
}

function Client() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const store = useSelector(state => state.loginStaff)
    const taskstore = useSelector(state => state.getTask)

    const {  thetasks} = taskstore
    const {staff} = store
    console.log('no user', staff)
   
    // let theStaff = ""
    
    useEffect(()=> {
        console.log(store, 'the usestate client')
        if(!staff){
            navigate('/client/login')
        }
        
    }, [staff, navigate, store])
    

    const logOutUser = () => {

        console.log("entter the useeffect")
        Swal.fire({
            title: 'Are you sure you want to log out?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(logout)
                navigate('/')
            } 
          })
          return 
    }
    
    const taskToBeDone = thetasks && thetasks.filter(task => task.completed === false)
    console.log(taskToBeDone, "task to be done")
  return (
    <>
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >

                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >

                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                    type="button"
                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                    >
                                    <span className="sr-only">Close sidebar</span>
                                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>

                            </Transition.Child>

                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto relative">
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                    alt="Workflow"
                                    />
                                </div>
                                

                                <nav className="mt-5 px-2 space-y-1 ">
                                    
                                    {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                        )}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                            'mr-4 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                    ))}

                                    <Link onClick={logOutUser} className='text-gray-300 flex hover:bg-gray-700 hover:text-white p-2 space-y-1 text-sm font-medium rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        <span className='ml-3'>Log Out</span>
                                    </Link>
                                    {thetasks && <span className={thetasks? 'absolute left-24 bg-red-700 rounded-2xl w-5 h-5 flex items-center justify-center text-white': ''} style={{top:'24vh'}}>{taskToBeDone.length}</span>}        
                                </nav>
                            </div>

                            <div className="flex-shrink-0 flex bg-gray-700 p-4">
                                <a href="/" className="flex-shrink-0 group block">
                                    <div className="flex items-center">
                                    <div>
                                        <img
                                        className="inline-block h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base font-medium text-white">Tom Cook</p>
                                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">View profile</p>
                                    </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </Transition.Child>

                    <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4 text-white">
                            <Link className="flex-shrink-0 flex items-center" href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10  mx-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg> StaffApp
                            </Link>
                        </div>
                        <nav className="mt-5 flex-1 px-2 space-y-1">
                            {thetasks && <span className={thetasks? 'absolute left-24 bg-red-700 rounded-2xl w-5 h-5 flex items-center justify-center text-white': ''} style={{top:'26vh'}}>{taskToBeDone.length}</span>}    
                            
                            {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <item.icon
                                className={classNames(
                                    item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                                />
                                {item.name}
                            </Link>
                            ))}
                            <Link onClick={logOutUser} className='text-gray-300 flex hover:bg-gray-700 hover:text-white p-2 space-y-1 text-sm font-medium rounded-md'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span className='ml-3'>Log Out</span>
                            </Link>
                        </nav>
                    </div>

                    <div className="flex-shrink-0 flex bg-gray-700 p-4">
                        <a href="/" className="flex-shrink-0 w-full group block">
                            <div className="flex items-center">
                                <div>
                                    <img
                                    className="inline-block h-9 w-9 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">Tom Cook</p>
                                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button
                        type="button"
                        className="relative -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                    <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {thetasks && <span className={thetasks? 'absolute top-3 left-8 bg-red-700 rounded-2xl w-5 h-5 flex items-center justify-center text-white': ''}>{taskToBeDone.length}</span>}    
                </div>

                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
                            <h1 className="text-2xl font-semibold text-gray-900">Welcome</h1>
                            <Link to='/' className='flex items-center hover:text-indigo-800'>
                                Go Home
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </Link>
                        </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        {/* Replace with your content */}
                        <div className="py-4">
                            <div id='stats'>
                                <Stats />
                            </div>
                            <div id='tasks'>
                                <Tasks />
                            </div>
                            <div id='newsfeeds'>
                                <NewsFeeds />
                            </div>
                            <div id='calender'>
                                <Calender />
                            </div>
                        </div>
                        {/* /End replace */}
                        </div>
                    </div>
                </main>

            </div>
        </div>
    </>
  )
}

export default Client