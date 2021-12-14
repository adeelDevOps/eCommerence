import { USER_SIGN_IN_REQUEST, USER_SIGN_IN_FAIL, USER_SIGN_IN_SUCCESS } from "../userconstant";
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../userconstant";
import { USER_SIGN_OUT_REQUEST, USER_SIGN_OUT_SUCCESS, USER_SIGN_OUT_FAIL } from "../userconstant"

function userSigninReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGN_IN_REQUEST:
            return { loading: true }
        case USER_SIGN_IN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_SIGN_IN_FAIL:
            return { loading: false, error: action.payload }
        case USER_SIGN_OUT_SUCCESS:
            console.log(state)
            debugger
            return {
                ...state,
                userInfo: null,
                loading: false
            }

        default:
            return state
    }
}

// function userSignoutReducer(state = {}, action) {
//     switch (action.type) {
//         case USER_SIGN_OUT_REQUEST:
//             return { loading: true }
//         case USER_SIGN_OUT_SUCCESS:
//             console.log(state)
//             debugger
//             return {
//                 ...state,
//                 userInfo: null,
//                 loading:false
//             }
//         case USER_SIGN_OUT_FAIL:
//             return { loading: false, error: action.payload }

//         default:
//             return state
//     }
// }

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
export { userSigninReducer, userRegisterReducer }