import {USER_ACTION_TYPES} from './user.action'

const INITIAL_STATE = {
    currentUser: null,
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case USER_ACTION_TYPES.setCurrentUser:
        return {
          ...state,
          currentUser: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;