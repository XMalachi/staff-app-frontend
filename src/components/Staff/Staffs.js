import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getStaffAction } from '../Redux/Actions/StaffAction'
import {BsFillPersonPlusFill} from "react-icons/bs"

export default function Staffs() {
  
  const dispatch = useDispatch()

  const store = useSelector(state => state.getStaffs)
  const {staffs} = store
  console.log("all staffs from staffsjs",store)

  useEffect(()=> {
      console.log("the useEffect from staffs", store)
      dispatch(getStaffAction())
  }, [dispatch, store])

  return (
    <>
      <div className="flex justify-between Capitalized text-black-500 text-2xl">
        <h2>Staffs</h2>

        <Link to='/client/register'>
            <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <BsFillPersonPlusFill className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Add Staff
            </button>
        </Link>
        
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-4">
        {staffs && staffs.map((staff) => (
          <li
            key={staff._id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8 Capitalized">
                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt={staff.username} />
                <h3 className="mt-6 text-gray-900 text-sm font-medium">{staff.name}</h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Position</dt>
                    <dd className="text-gray-500 text-sm">{staff.position}</dd>
                    <dt className="sr-only">Username</dt>
                    <dd className="text-gray-500 text-sm">Username: {staff.username}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                        <span className={staff.role === 'client' ? "px-2 py-1 text-red-800 text-xs font-medium bg-red-100 rounded-full" : "px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full"}>
                            {staff.role}
                        </span>
                    </dd>
                </dl>
            </div>
            
          </li>
        ))}
      </ul>
    </>
    
  )
}
