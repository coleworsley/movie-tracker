export const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return action.body.user;
    case 'LOG_IN':
      return action.body.user;
    case 'LOG_OUT':
      return {};
    default:
      return state
  }
}

export const userFailReducer = (state=false, action) => {
  switch (action.type) {
    case 'USER_LOGIN_FAIL':
      return true

    default:
      return false
  }
}
