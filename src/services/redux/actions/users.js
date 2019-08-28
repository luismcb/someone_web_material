import { SET_LOADER, REGISTER_USER,USER_ERROR } from "./actionTypes"; 
import { MAIN_API_URL } from '../../../constants/constants'
import axios from 'axios';



export const registerUser = (newUser) =>{
    return dispatch => {
        dispatch({
            type:SET_LOADER,
            content:{
                loading:true
            }
        }); 
        return axios.post(MAIN_API_URL,newUser)
        .then(result=>{
            dispatch({
            type:REGISTER_USER,
            content:{}
            })
        })
        .catch(error=>{
            dispatch({
                type:USER_ERROR,
                content:{
                    error
                }
            })
        })
        .finally(()=>{
            dispatch({
                type:SET_LOADER,
                content:{
                    loading:false
                }
            }); 
        })
    }
}


