import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import signUpReducer from './signUpReducer';
// import loginReducer from './loginReducer';
// import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  routing: routerReducer,
  // auth: signUpReducer,
  // login: loginReducer,
  // form: formReducer
})

const rootReducer = (state, action) => {
	// console.log("RESET_ALL_DATA action", action)
  if (action.type === 'RESET_ALL_DATA') {
    state = {
      auth: state.auth
    }
  }
  return appReducer(state, action)
}

export default rootReducer
