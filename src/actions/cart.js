export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_FINAL = 'ADD_TO_CART_FINAL';

export function addItemToCart(cart, cartState, selectedCustomer) {
    let count = 0
    cartState.map((product) => {
        if (product.id === cart.id) {
            count = count + 1
            product.Price = product.Price + (product.Price / product.count)
            product.count = product.count + 1
            if (selectedCustomer === 'Infosys' &&
                product.type === 'Small Pizza' &&
                product.count % 2 == 0) {
                product.count = product.count + 1
            }
            if (selectedCustomer === 'Facebook' &&
                product.type === 'Medium Pizza' &&
                product.count % 4 == 0) {
                product.count = product.count + 1
            }
        }
    })
    if (count == 0) {
        if (selectedCustomer === 'Amazon' && cart.type === 'Large Pizza') {
            let cartProduct = {
                "id": 1, "type": "Large Pizza",
                "image": "https://www.chewboom.com/wp-content/uploads/2019/06/Pizza-Hut-Offers-5.99-Large-2-Topping-Carryout-Pizzas-Ordered-Online-Through-June-23-2019-678x381.jpg",
                "Description": "15” pizza for four people",
                "Price": 299.99,
                "count": 1
            }
            return async dispatch => {
                return dispatch({
                    type: ADD_TO_CART,
                    payload: cartProduct
                });
            };
        }
        else if (selectedCustomer === 'Facebook' && cart.type === 'Large Pizza') {
            let cartProduct = {
                "id": 1, "type": "Large Pizza",
                "image": "https://www.chewboom.com/wp-content/uploads/2019/06/Pizza-Hut-Offers-5.99-Large-2-Topping-Carryout-Pizzas-Ordered-Online-Through-June-23-2019-678x381.jpg",
                "Description": "15” pizza for four people",
                "Price": 389.99,
                "count": 1
            }
            return async dispatch => {
                return dispatch({
                    type: ADD_TO_CART,
                    payload: cartProduct
                });
            };
        } else {
            return async dispatch => {
                return dispatch({
                    type: ADD_TO_CART,
                    payload: cart
                });
            };
        }

    } else {
        return async dispatch => {
            return dispatch({
                type: ADD_TO_CART_FINAL,
                payload: cartState
            });
        };
    }

}

export default {
    ADD_TO_CART,
    ADD_TO_CART_FINAL,
    addItemToCart
};