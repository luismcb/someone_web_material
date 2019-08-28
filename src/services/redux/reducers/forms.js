import { LIST_COUNTRIES,FORM_ERROR } from "../actions/actionTypes";

const initialState = {
  countries:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_COUNTRIES:
      return { ...state, countries: action.content.countries};
    case FORM_ERROR:
      return {...state, error:action.content.error}
    default:
      return state;
  }
}
