import { SET_LOADER, LIST_COUNTRIES,FORM_ERROR} from "./actionTypes"; 
import { MAIN_API_URL } from '../../../constants/constants'
import axios from 'axios';



export const listCountries = () =>{
    return dispatch => {
        dispatch({
            type:SET_LOADER,
            content:{
                loading:true
            }
        }); 
        return axios.get(MAIN_API_URL)
        .then(result=>{
            dispatch({
            type:LIST_COUNTRIES,
                content:{
                    countries: result.data
                } 
            });
        })
        .catch(error=>{
            dispatch({
                type:FORM_ERROR,
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


