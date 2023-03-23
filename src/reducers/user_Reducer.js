import { LOGIN_HANDLER, LOGOUT_HANDLER } from "../actions/login-actions";

const user = {
  userId: null,
  email: null,
  userName: null,
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case LOGIN_HANDLER:
      return {
        userId: action.payload.userId,
        email: action.payload.email,
        userName: action.payload.name,
      };

    case LOGOUT_HANDLER:
      return {
        userId: null,
        email: null,
        userName: null,
      };
    default:
      return state;
  }
};

export default userReducer;
