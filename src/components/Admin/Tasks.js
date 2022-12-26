/* This example requires Tailwind CSS v2.0+ */
import React, {useState, useEffect} from 'react'
import { CalendarIcon } from '@heroicons/react/solid'
import {BsCheckLg, BsBookmarkPlusFill} from "react-icons/bs"
import { MdSystemUpdateAlt, MdOutlineDeleteOutline } from "react-icons/md"
import { GrTasks} from "react-icons/gr"
import Message from '../Message/Message'
import {useDispatch, useSelector} from 'react-redux'
import { deleteTaskActions, getAllTasksAction, updateTaskActions } from '../Redux/Actions/TaskActions'
import AddTaskForm from './AddTaskForm'


function Tasks() {
  const dispatch = useDispatch()

  const [addTaskForm, setAddTaskForm] = useState(false)


  const store = useSelector(state => state.getAllTasks)

  const {alltasks} = store

  const setUpdateTask = (id) => {
    const copy = [...alltasks]
    const {subject, owner, task, deadline, file} = copy
    const index = copy.indexOf(alltasks.find(task => task._id === id))
    const completedTask = copy[index]
    console.log("all task that is completed",completedTask)
    completedTask.completed = true
    completedTask.subject = subject
    completedTask.owner = owner
    completedTask.task = task
    completedTask.deadline = deadline
    completedTask.file = file
    dispatch(updateTaskActions(id, completedTask.subject, completedTask.owner, completedTask.task, completedTask.deadline, completedTask.file, completedTask.completed))
  }
  
  console.log(store, "all task from client")

  useEffect(()=> {
      dispatch(getAllTasksAction())
  }, [dispatch])


  const showAddTaskForm = () => {
    console.log(addTaskForm)
    setAddTaskForm(prev => !prev)
  }

  // delete task
  const deleteTask = (id) => {
    let confirm = alert("Are you  sure you want to delete this task?")
    if(confirm){
      dispatch(deleteTaskActions(id))
    }
  }


  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mt-2 relative">
    <div className='flex justify-between pb-6'>
      <h3 className='capitalized text-lg leading-6 text-black-500 text-2xl p-2'>
          All Tasks
      </h3>
      
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => showAddTaskForm()}
      >
        <BsBookmarkPlusFill className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Add Task
      </button>
    </div>
    
      <ul className="divide-y divide-gray-200">
        {alltasks && alltasks.map((task) => (
          
            <li key={task._id} className="p-3">
            <a href='#tasks' 
              className={task.completed ? "bg-green-50 hover:bg-green-100 block" : "bg-grey-50 hover:bg-gray-50 block"}
            >
              <div className="px-4 py-4 sm:px-6">
                  <div className=" flex-shrink-0 flex">
                    <p className="p-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {task.owner}
                    </p>
                  </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{task.task}</p>
                </div>
                <div className="mt-2">
                  <div className="">
                  
                    <p className="flex items-left text-sm text-gray-500">
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

                  <div className="mt-3">

                    {task.completed && <Message title='Task Completed' icon='success' showConfirmButton={false} /> }
                    <button
                      type="button"
                      className={task.completed? "inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500": "inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
                      onClick={() => setUpdateTask(task._id)}
                    >
                      <BsCheckLg className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                      {task.completed ? "Completed" : "Mark As Complete"}
                    </button>

                    <p className="flex items-center mt-2 text-sm text-gray-500">
                      <button
                        type="button"
                        onClick={() => setUpdateTask(task._id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-xsm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-6"
                      >
                        <MdSystemUpdateAlt className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Update
                      </button>
                    
                      <button
                        type="button"
                        onClick={() => deleteTask(task._id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <MdOutlineDeleteOutline className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
                        Delete
                      </button>
                      
                
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          
        ))}
      </ul>
      
      {addTaskForm &&
        <div className='absolute h-screen w-screen bg-slate-200'>
        
          <div className='flex justify-center items-center flex-column'>
            <AddTaskForm showAddTaskForm={showAddTaskForm} />
          </div>
      
        
        </div>
      }

    </div>
  )
}


export default Tasks