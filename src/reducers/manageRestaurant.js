import cuid from 'cuid';

export default function manageRestaurants(state = [], action) {
    switch (action.type){
        case 'ADD_RESTAURANT':

            const newRestaurant = {
                id: cuid(),
                text: action.restaurant
            }

            return [...state, newRestaurant]

        case 'DELETE_RESTAURANT':
            
            const newRestaurantArray = state.filter(rest => rest.id !== action.id)

            return [...newRestaurantArray]


        default: return state
    }
}
