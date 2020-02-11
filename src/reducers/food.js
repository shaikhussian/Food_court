import { GET_FOOD } from '../actions/food';
import { SELECTED_CUSTOMER } from '../actions/food';
let initialState = [{
    "id": 1, "type": "Large Pizza",
    "image": "https://www.chewboom.com/wp-content/uploads/2019/06/Pizza-Hut-Offers-5.99-Large-2-Topping-Carryout-Pizzas-Ordered-Online-Through-June-23-2019-678x381.jpg",
    "Description": "15” pizza for four people",
    "Price": 394.99,
    "count": 1
},
{
    "id": 2, "type": "Medium Pizza",
    "image": "https://hip2save.com/wp-content/uploads/2014/05/screen-shot-2014-05-21-at-11-04-31-am.png?fit=423%2C280&strip=all",
    "Description": "12” pizza for two people",
    "Price": 322.99,
    "count": 1
},
{
    "id": 3, "type": "Small Pizza",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_MP4B_9hU1eNr98OJJc9O7-DtGgj17-CMwp8oor5veAAElO_5",
    "Description": "10” pizza for one person",
    "Price": 269.99,
    "count": 1
}
]

export default function getFoodItems(state = { initialState, selectedCustomer: 'Default' }, action) {
    switch (action.type) {
        case GET_FOOD:
            return [];
        case SELECTED_CUSTOMER:
            return {
                ...state,
                selectedCustomer: action.payload
            }
    }
    return state;
}