import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../Constants/productConstants"

const initialState = {
    products: [],
    error:"",
    productdetail:{}
}

export function productDetailsReducer(state = initialState, action) {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return ({ loading: true })
            case PRODUCT_DETAILS_SUCCESS:
                return({loading:false, products : action.payload})
                case PRODUCT_DETAILS_FAIL:
                    return({loading:false,error:action.payload})
                    default:
                        return state
            
    
        
            
    }

}