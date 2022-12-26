import {
    GET_STAFF_REQUEST,
    GET_STAFF_SUCCESS,
    GET_STAFF_FAILED,

    CREATE_STAFF_REQUEST,
    CREATE_STAFF_SUCCESS,
    CREATE_STAFF_FAILED,

    LOGIN_STAFF_REQUEST,
    LOGIN_STAFF_SUCCESS,
    LOGIN_STAFF_FAILED,

    LOGOUT_STAFF
} from '../Constants/StaffConstants.js'

import axios from 'axios'

const baseUrl = 'https://staff-app-api.onrender.com/'

const logout = (dispatch) => {
    localStorage.removeItem('staffInfo');
    dispatch({type: LOGOUT_STAFF})
}

const getStaffAction = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: GET_STAFF_REQUEST
        })

        const {loginStaff: {staff}} = getState()
        console.log("update state staffInfo",staff)
         const config = {
            headers:{
                "Content-Type":'Application/json',
                "authorization": `Bearer ${staff.token}`
            }
         }

        // console.log("staff created")
        const {data} = await axios.get(`${baseUrl}/api/v1/staffs`, config)
        
        console.log("staff created",data.staffs)
        dispatch({
            type: GET_STAFF_SUCCESS,
            payload:data.staffs
        })
    }catch(err){ 
        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type: GET_STAFF_FAILED,
            payload:message
        })
    }
}

const createStaffAction = (name, username, email, position, role, password, image) => async(dispatch) => {

    try{
        dispatch({
            type:CREATE_STAFF_REQUEST
         })

         const config = {
            headers:{
                "Content-Type":'Application/json'
            }
         }
    
         const {data} = await axios.post(`${baseUrl}/api/v1/staffs/register`, {name, username, email, position, role, password, image}, config)
          
         console.log("staff created",data)
         dispatch({
            type:CREATE_STAFF_SUCCESS,
            payload:data.staff
         })
    }catch(err){ 
        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type:CREATE_STAFF_FAILED,
            payload:message
        })
    }
     
}

const loginStaffAction = (username, password) => async(dispatch) => {
    try{
        dispatch({
            type:LOGIN_STAFF_REQUEST
         })

         const config = {
            headers:{
                "Content-Type":'Application/json'
            }
         }

         const {data} = await axios.post(`${baseUrl}/api/v1/staffs/login`, {username,password}, config)
          
         console.log('staff logged in',data)
         localStorage.setItem('staffInfo', JSON.stringify(data.staff))
         dispatch({
            type:LOGIN_STAFF_SUCCESS,
            payload:data.staff
         })

         
         
    }catch(err){ 

        let message = err.response && err.response.data.message ? err.response.data.message : err.message
        dispatch({
            type:LOGIN_STAFF_FAILED,
            payload:message
        })
    }
     
}

export {
    getStaffAction,
    createStaffAction,
    loginStaffAction,
    logout
}