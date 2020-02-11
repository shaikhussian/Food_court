import { ADD_TO_CART, ADD_TO_CART_FINAL } from '../actions/cart';


export default function addItemToCart(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ];
        case ADD_TO_CART_FINAL:
            return action.payload

    }
    return state;
}