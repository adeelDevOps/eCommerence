import axios from "axios"
import { USER_SIGN_IN_REQUEST,USER_SIGN_IN_SUCCESS,USER_SIGN_IN_FAIL } from "./userconstant"
import {  USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "./userconstant"
import {  USER_SIGN_OUT_REQUEST, USER_SIGN_OUT_SUCCESS, USER_SIGN_OUT_FAIL } from "./userconstant"

export const signin = (email,password) => async (dispatch) => {

    dispatch({type: USER_SIGN_IN_REQUEST, payload:{email,password}})

    try {
        
        const {data} = await axios.post('http://localhost:5000/api/users/signin', {email, password})
        dispatch({type:USER_SIGN_IN_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:USER_SIGN_IN_FAIL, payload:error.messsage})
    }
}

export const signout = () => async (dispatch) => {

    // dispatch({type: USER_SIGN_IN_REQUEST, payload:{}})

    try {
        
        dispatch({type:USER_SIGN_OUT_SUCCESS, payload:null})
    } catch (error) {
        dispatch({type:USER_SIGN_OUT_FAIL, payload:error.messsage})
    }
}

export const register = (name,email,password) => async (dispatch) => {

    dispatch({type: USER_REGISTER_REQUEST, payload:{name,email,password}})

    try {
        
        const {data} = await axios.post('http://localhost:5000/api/users/register', {name, email, password})
        dispatch({type:USER_REGISTER_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL, payload:error.messsage})
    }
}
