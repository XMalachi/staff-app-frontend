import {
    GET_STAFF_REQUEST,
    GET_STAFF_SUCCESS,
    GET_STAFF_FAILED,
    GET_STAFF_RESET,
    
    CREATE_STAFF_REQUEST,
    CREATE_STAFF_SUCCESS,
    CREATE_STAFF_FAILED,
    CREATE_STAFF_RESET,

    LOGIN_STAFF_REQUEST,
    LOGIN_STAFF_SUCCESS,
    LOGIN_STAFF_FAILED,
    LOGIN_STAFF_RESET,

    LOGOUT_STAFF
} from '../Constants/StaffConstants.js'

const getStaffReducer = (state={}, action) => {
    switch (action.type){
        case GET_STAFF_REQUEST : 
            return { loading: true }

        case GET_STAFF_SUCCESS :
            return {loading: false, success: true, staffs: action.payload}

        case GET_STAFF_FAILED :
            return {loading: false, success: false, error: action.payload}

        case GET_STAFF_RESET :
            return {}

        default :  return state

    }
}
const createStaffReducer = (state={}, action) => {
    switch (action.type){
        case CREATE_STAFF_REQUEST : 
            return { loading: true }

        case CREATE_STAFF_SUCCESS :
            return {loading: false, success: true, staffs: action.payload}

        case CREATE_STAFF_FAILED :
            return {loading: false, success: false, error: action.payload}

        case CREATE_STAFF_RESET :
            return {}

        default :  return state

    }
}

const loginInStaffReducer = (state={staff: {}}, action) => {
    switch (action.type){
        case LOGIN_STAFF_REQUEST : 
            return { loading: true }

        case LOGIN_STAFF_SUCCESS :
            return {loading: false, success: true, staff: action.payload}

        case LOGIN_STAFF_FAILED :
            return {loading: false, success: false, error: action.payload}

        case LOGIN_STAFF_RESET :
            return {}

        case LOGOUT_STAFF : 
            return {
                staff: null
            }

        default :  return state

    }
}


export {
    getStaffReducer, createStaffReducer, loginInStaffReducer
}