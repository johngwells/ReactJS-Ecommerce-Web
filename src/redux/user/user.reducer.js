const INITIAL_STATE = {
  currentUser: null
}

// if state is ever undefined state will be INITIAL STATE, 
// note: null is a value so it will be state & not INITIAL
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;
