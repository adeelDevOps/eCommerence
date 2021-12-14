import axios from "axios"
// import Cookie from "js-cookie"
import { ADD_TO_CART,CART_REMOVE_ITEM,CART_EMPTY_ITEM} from "./cartconstant"

const addtocart = (productId, qty) => async (dispatch,getState) => {
// debugger
    try {
        const { data } = await axios.get('http://localhost:5000/api/products/' + productId)
        console.log("data",data)
        dispatch({
            type: ADD_TO_CART, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty

            }
        });
    //     const { cart: { cartItems } } = getState();
    // Cookie.set("cartItems", JSON.stringify(cartItems));

    } catch (error) {

    }

}

const removeFromCart = (productId) => (dispatch,getState) => {
debugger
    dispatch({type:CART_REMOVE_ITEM, payload:productId})
}
    const emptycart = () => (dispatch) => {
        debugger
            dispatch({type:CART_EMPTY_ITEM, payload:null})
    
    // const { cart: { cartItems } } = getState();
    // Cookie.set("cartItems", JSON.stringify(cartItems));
}
export { addtocart, removeFromCart,emptycart }