export const GET_FOOD = 'GET_FOOD';
export const SELECTED_CUSTOMER = 'SELECTED_CUSTOMER';


export function getFood() {
    return async dispatch => {
        return dispatch({
            type: GET_FOOD,
            payload: ''
        });
    };
}

export function handleCustomer(selected) {
    return async dispatch => {
        return dispatch({
            type: SELECTED_CUSTOMER,
            payload: selected
        });
    };
}
export default {
    GET_FOOD,
    SELECTED_CUSTOMER,
    handleCustomer,
    getFood
};