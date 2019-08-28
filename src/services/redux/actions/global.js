import { TOGGLE_MENU, SET_LOADER} from "./actionTypes";



export const toggleMenu= ()=>{
    return {
      type:TOGGLE_MENU,
      content:{
        
      }
    };
};



export const setLoader = (value) => ({
  type: SET_LOADER,
  content: {
    loading:value
  }
});


