import { REGISTER_USER,USER_ERROR } from "../actions/actionTypes";

const initialState = {
    users:[],
    error:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return state;
    case USER_ERROR:
      return {...state, error:action.content.error}
    default:
      return state;
  }
}
