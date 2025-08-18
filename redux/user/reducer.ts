import { Action } from "redux";

interface UserState {
    currentUser: string | null;
}

interface LoginAction {
    type: "user/login";
    payload: string;
}

interface LogoutAction {
    type: "user/logout";
}

type UserAction = LoginAction | LogoutAction;

const initialState: UserState = {
  currentUser: null,
};

const userReducer = (state: UserState = initialState, action: UserAction & { payload?: any }) => {
  switch (action.type) {
    case "user/login":
      return { ...state, currentUser: action.payload };

    case "user/logout":
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default userReducer;
