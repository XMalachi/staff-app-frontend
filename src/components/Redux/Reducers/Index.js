import {combineReducers} from 'redux'
import {getStaffReducer, createStaffReducer, loginInStaffReducer } from './StaffReducers'
// import {contactAdminReducer} from './generalReducers'
import {getAllTaskReducer, addTaskReducer, getTaskReducer, updateTaskReducer, deleteTaskReducer} from './TaskReducers'


const rootReducer = combineReducers({
    createStaff: createStaffReducer,
    loginStaff: loginInStaffReducer,
    getStaffs: getStaffReducer,
    getAllTasks: getAllTaskReducer,
    // contactAdmin:contactAdminReducer,
    getTask: getTaskReducer,
    addTask: addTaskReducer,
    updateTask: updateTaskReducer,
    deleteTask: deleteTaskReducer,
})

export default rootReducer