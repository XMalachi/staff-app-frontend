import {
    ADD_TASK_REQUEST,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILED,
    ADD_TASK_RESET,

    GET_TASK_REQUEST,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED,
    GET_TASK_RESET,

    GET_ALLTASK_REQUEST,
    GET_ALLTASK_SUCCESS,
    GET_ALLTASK_FAILED,
    GET_ALLTASK_RESET,

    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILED,
    UPDATE_TASK_RESET,

    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILED,
    DELETE_TASK_RESET,
} from '../Constants/TaskConstants'

const addTaskReducer = (state={}, action)=> {
    switch(action.type){
        case ADD_TASK_REQUEST: 
            return {loading: true}
        
        case  ADD_TASK_SUCCESS: 
            return {loading: false, success: true, tasks: action.payload}

        case ADD_TASK_FAILED: 
            return {loading: false, success: false, error: action.payload}

        case ADD_TASK_RESET :
            return {}
        
        default : return state
    }
}

const getTaskReducer = (state={}, action)=> {
    switch(action.type){
        case GET_TASK_REQUEST: 
            return {loading: true}
        
        case  GET_TASK_SUCCESS: 
            return {loading: false, success: true, thetasks: action.payload}

        case GET_TASK_FAILED: 
            return {loading: false, success: false, error: action.payload}

        case GET_TASK_RESET :
            return {}
        
        default : return state
    }
}

const getAllTaskReducer = (state={}, action)=> {
    switch(action.type){
        case GET_ALLTASK_REQUEST: 
            return {loading: true}
        
        case  GET_ALLTASK_SUCCESS: 
            return {loading: false, success: true, alltasks: action.payload}

        case GET_ALLTASK_FAILED: 
            return {loading: false, success: false, error: action.payload}

        case GET_ALLTASK_RESET :
            return {}
        
        default : return state
    }
}


const updateTaskReducer = (state={}, action)=> {
    switch(action.type){
        case UPDATE_TASK_REQUEST: 
            return {loading: true}
        
        case  UPDATE_TASK_SUCCESS: 
            return {loading: false, success: true, updatedtask: action.payload}

        case UPDATE_TASK_FAILED: 
            return {loading: false, success: false, error: action.payload}

        case UPDATE_TASK_RESET :
            return {}
        
        default : return state
    }
}

const deleteTaskReducer = (state={}, action)=> {
    switch(action.type){
        case DELETE_TASK_REQUEST: 
            return {loading: true}
        
        case  DELETE_TASK_SUCCESS: 
            return {loading: false, success: true, deletedTask: action.payload}

        case DELETE_TASK_FAILED: 
            return {loading: false, success: false, error: action.payload}

        case DELETE_TASK_RESET :
            return {}
        
        default : return state
    }
}

export {addTaskReducer, getTaskReducer, getAllTaskReducer, updateTaskReducer, deleteTaskReducer}