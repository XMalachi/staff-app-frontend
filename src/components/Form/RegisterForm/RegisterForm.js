import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { createStaffAction } from '../../Redux/Actions/StaffAction'
// import Message from '../../Message/Message'
import Swal from 'sweetalert2'
import { CREATE_STAFF_RESET } from '../../Redux/Constants/StaffConstants'

        

function RegisterForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const [state, setState] = useState({ 
        fullname:'',
        email:'',
        username: '',
        password: '',
        fileUpload: '',
        position: '',
        role: ''

    })

    const store = useSelector((state)=> state.createStaff)
    const { success, staff} = store;


    useEffect(()=> {
      if(success=== true){
        console.log('It is successfull')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registration Succesfull. You can now Log in to Your account!',
          showConfirmButton: false,
          timer: 2000
        })
        navigate('/')
        dispatch({
          type: CREATE_STAFF_RESET
        })
      }
    }, [success, navigate, dispatch])


    console.log("staff",staff)
    //subscribe to store
    // const {loading, success, error, user}= useSelector((state)=> console.log(state.createUser))

    const changeHandler = (e) => {
        const {name, value} = e.target
        setState({
            ...state,
            [name]:value
        })
       
    }
    console.log('state', state)

    const submitHandler = (e)=>{
        console.log('hit')
            e.preventDefault();

            if(!state.email || ! state.password || !state.fullname || !state.username || !state.position){
                alert('Email, Password, Fullname, Username And Position are required.')
                return
            }

            dispatch(createStaffAction(state.fullname, state.username,state.email, state.position, state.role, state.password, state.fileUpload  ))

            setState({
                fullname:'',
                email:'',
                username: '',
                password: '',
                fileUpload: '',
                position: '',
                role: ''
            })
            
    }

    
  return (
    <>
      {/* {success && <Message title='success' icon='success' showConfirmButton={false} />} */}
      <form className="space-y-8 divide-y divide-gray-200 p-20 bg-white rounded-xl" onSubmit={submitHandler}>
      
        <div className=''>
                <Link to='/' className='flex items-center hover:text-indigo-800'>
                    Go Home
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
            <div className='text-center'>
                
                <h3 className="text-3xl leading-6 font-medium text-gray-900">Register Staff</h3>
                <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                </p>
            </div>
        </div>
            
    
        <div className="pt-8">
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Fullname
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="fullname"
                        // id="full-name"
                        // autoComplete="given-name"
                        onChange={changeHandler}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                

                <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={changeHandler}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                </div>


                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="password"
                        onChange={changeHandler}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Position
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="position"
                        id="position"
                        autoComplete="position"
                        onChange={changeHandler}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            
            </div>
        </div>


      <div className="space-y-8 divide-y divide-gray-200">
        <div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  workcation.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  onChange={changeHandler}
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            
            {/* image */}

            <div className="sm:col-span-6">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="fileUpload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image ends */}


      </div>

        <div className="pt-5">
            <div className="flex justify-end">
                <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Save
                </button>
            </div>
        </div>
    </form>
    </>
  )
}


export default RegisterForm