import { TOGGLE_MENU,SET_LOADER } from "../actions/actionTypes";

const initialState = {
 showMenu:false,
 loading:false
};

export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, showMenu:!state.showMenu };
    case SET_LOADER:
      return { ...state, loading:action.content.loading };
    default:
      return state;
  }
}
