import { ADD_TO_CART, CART_REMOVE_ITEM,CART_EMPTY_ITEM} from "../cartconstant"

function cartReducer (state = {cartItems : []}, action ) {

    switch (action.type) {
        case ADD_TO_CART:
            // const item = action.payload
            return{
                loading:false,
                cartItems:action.payload
            }
            // const product = state.cartItems.find((x) => x.product === item.product)
            // if (product) {

            //     return {cartItems: state.cartItems.map(x => x.product === product.product ? item: x)}
                
            // }
            // return {cartItems : [...state.cartItems, item]}

            case CART_REMOVE_ITEM:
                debugger
                return {cartItems: Object.keys(state.cartItems).filter(x => x.product !== action.payload)}

                case CART_EMPTY_ITEM:
                return {
                    cartItems: null,
                    loading: false}

        default:
            return state
    }
}
export {cartReducer}