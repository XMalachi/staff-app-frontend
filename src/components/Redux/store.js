
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools}  from 'redux-devtools-extension'
import rootReducer from './Reducers/Index'

const middleware = [thunk]

let devTools;
if(process.env.NODE_ENV === 'development') {
    devTools = composeWithDevTools(applyMiddleware(...middleware))
}else {
    devTools = applyMiddleware(...middleware)
}


const staffInfoFromLocalStorage = localStorage.getItem('staffInfo') ?  JSON.parse(localStorage.getItem('staffInfo')) : null
console.log("the axis",staffInfoFromLocalStorage)

const initialState = {
    loginStaff: {staff: staffInfoFromLocalStorage}
}

const store = createStore(rootReducer,initialState , devTools)

export default store