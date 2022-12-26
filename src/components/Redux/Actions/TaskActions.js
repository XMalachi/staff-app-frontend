import {
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    

    GET_TASK_REQUEST,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED,
   

    GET_ALLTASK_REQUEST,
    GET_ALLTASK_SUCCESS,
    GET_ALLTASK_FAILED,
  

    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILED,


    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILED,
 
} from '../Constants/TaskConstants'

import axios from 'axios'

const baseUrl = "http://localhost:5000"


const addTaskActions = (subject, owner, task, deadline, file, completed) => async(dispatch, getState) =>  {
    console.log("i am here too")
   
    try{
        dispatch({
            type: ADD_TASK_REQUEST
        })

        const {loginStaff: {staff}} = getState()

        const config = {
            headers:{
                "Content-Type": "Application/json",
                "authorization": `Bearer ${staff.token}` 
            }
        }
       

        const {data} = axios.post(`${baseUrl}/api/v1/tasks`,{subject, owner, task, deadline, file, completed}, config)
        // console.log(data)
        console.log("the posts",data)



        dispatch({
            type:  ADD_TASK_SUCCESS,
            payload: 
                {
                    subject:subject, 
                    owner:owner, 
                    task:task, 
                    deadline:deadline, 
                    file:file,
                    completed: completed
                }
            
        })


    }catch(err){

        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        
        // if(message === 'Invalid token, Not authorized!' || /jwt/.test(message)){
        //     //dispatch logout
        //     dispatch(logout())
        // }

        dispatch({
            type:  ADD_TASK_FAILED,
            payload: message
        })

    }
}

const getAllTasksAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: GET_ALLTASK_REQUEST
        })

        const {loginStaff: {staff}} = getState()

        const config = {
            headers:{
                "Content-Type":'Application/json',
                "authorization": `Bearer ${staff.token}`
            }
        }

        
// const {posts} = await axios.get(`http://localhost:5000/api/v1/posts/`, config) 
        const data = await axios.get(`${baseUrl}/api/v1/tasks`, config)
        console.log("get task action",data)
        const theTasks = data.data.tasks
        console.log("thePosts", theTasks)

        dispatch({
            type:  GET_ALLTASK_SUCCESS,
            payload: theTasks
        })


    }catch(err){
        dispatch({
            type:  GET_ALLTASK_FAILED,
            payload: err.message
        })

    }
}

const getTaskActions = () => async(dispatch, getState) =>  {
    console.log("i am here too")
    try{
        dispatch({
            type: GET_TASK_REQUEST
        })

        const {loginStaff: {staff}} = getState()

        const config = {
            headers:{
                "Content-Type":'Application/json',
                "authorization": `Bearer ${staff.token}`
            }
        }

        
// const {posts} = await axios.get(`http://localhost:5000/api/v1/posts/`, config) 
        const data = await axios.get(`${baseUrl}/api/v1/tasks`, config)
        console.log("get task action",data)
        const theTasks = data.data.tasks
        console.log("thePosts", theTasks)

        dispatch({
            type:  GET_TASK_SUCCESS,
            payload: theTasks
        })


    }catch(err){
        dispatch({
            type:  GET_TASK_FAILED,
            payload: err.message
        })

    }
}

const updateTaskActions = (id, subject, owner, task, deadline, file, completed) => async(dispatch, getState) =>  {
    console.log("i am here too")
    try{
        dispatch({
            type: UPDATE_TASK_REQUEST
        })

        const {loginStaff: {staff}} = getState()
        console.log("update state staffInfo",staff)
        const config = {
            headers:{
                "Content-Type": "Application/json",
                "authorization": `Bearer ${staff.token}` 
            }
        }

        const data = await axios.put(`${baseUrl}/api/v1/tasks/${id}`,{subject, owner, task, deadline, file, completed}, config)
        // console.log(data)
        const theUpdatedTask = data.data.updatedTask
        console.log("the posts",data.data.updatedTask)



        dispatch({
            type:  UPDATE_TASK_SUCCESS,
            payload: 
                {
                    theUpdatedTask
                }
            
        })


    }catch(err){
        dispatch({
            type:  UPDATE_TASK_FAILED,
            payload: err.message
        })

    }
}

const deleteTaskActions = (id) => async(dispatch, getState)=> {
    console.log("i am here too")
    try{
        dispatch({
            type: DELETE_TASK_REQUEST
        })

        const {loginStaff: {staff}} = getState()

        console.log("delete state staffInfo",staff.token)
        
        const config = {
            headers:{
                "Content-Type": "Application/json",
                "authorization": `Bearer ${staff.token}` 
            }
        }

        const data =  await axios.delete(`${baseUrl}/api/v1/tasks/${id}`, config)
        // console.log(data)
        console.log("the posts",data)


       
        dispatch({
            type:  DELETE_TASK_SUCCESS,
            payload: data.post
            
        })


    }catch(err){
        dispatch({
            type:  DELETE_TASK_FAILED,
            payload: err.message
        })

    }
}

export {getAllTasksAction, getTaskActions, addTaskActions, updateTaskActions, deleteTaskActions}