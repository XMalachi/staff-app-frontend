/* This example requires Tailwind CSS v2.0+ */
import React, {useEffect} from 'react'
import { CalendarIcon } from '@heroicons/react/solid'
// import { HiAnnotation } from "react-icons/hi"
// import { MdSystemUpdateAlt, MdOutlineDeleteOutline } from "react-icons/md"
import { GrTasks} from "react-icons/gr"
import Message from '../Message/Message'
import {useDispatch, useSelector} from 'react-redux'
import { getTaskActions, updateTaskActions } from '../Redux/Actions/TaskActions'


function Tasks() {
  const dispatch = useDispatch()

  const store = useSelector(state => state.getTask)

  const {  thetasks} = store

  

  const setTaskComplete = (id) => {
    const copy = [...thetasks]
    const index = copy.indexOf(thetasks.find(task => task._id === id))
    const completedTask = copy[index]
    console.log("the task that is completed",completedTask)
    completedTask.completed = true
 
      dispatch(updateTaskActions(id, completedTask.subject, completedTask.owner, completedTask.task, completedTask.deadline, completedTask.file, completedTask.completed))
  }
  
  console.log(store, "the task from client")

  useEffect(()=> {
      dispatch(getTaskActions())
  }, [dispatch])


  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mt-10">
    <h3 className='capitalized text-lg leading-6 font-medium text-gray-900'>
        Tasks
    </h3>
      <ul className="divide-y divide-gray-200">
        {thetasks && thetasks.map((task) => (
          
            <li key={task._id}>
            <a href='#tasks' 
              className={task.completed ? "bg-green-50 hover:bg-green-100 block" : "bg-grey-50 hover:bg-gray-50 block"}
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{task.task}</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {task.owner}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                  
                    <p className="flex items-center text-sm text-gray-500">
                      <GrTasks className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {task.subject}
                    </p>

                  </div>
                    
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <p>
                      Closing on <time dateTime={task.deadline}>{task.deadline}</time>
                    </p>
                  </div>

                  <div className="sm:flex">
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <span className="flex bg-slate-100  hover:bg-slate-300 p-2 rounded-xl hover:text-white text-green-400">
                         
                        <button className={task.completed? "text-green-400": "text-black"} onClick={() => setTaskComplete(task._id)}>{task.completed ? "Completed" : "Mark As Complete"}</button>
                        {task.completed && <Message title='Task Completed' icon='success' showConfirmButton={false} /> }
                      </span>
                      {/* <span className="mr-2 flex">
                        <MdSystemUpdateAlt className="flex-shrink-0 mr-1 h-5 w-5 text-blue-400" aria-hidden="true" /> Update
                      </span>
                      
                      <span className="mr-2 flex">
                        <MdOutlineDeleteOutline className="flex-shrink-0 mr-1 h-5 w-5 text-red-400" aria-hidden="true" /> Delete
                      </span> */}

                      
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          
        ))}
      </ul>
    </div>
  )
}


export default Tasks