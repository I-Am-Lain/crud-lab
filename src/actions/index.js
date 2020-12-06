export const addRestaurant = (restaurant) => {
    return {
        type: 'ADD_RESTAURANT',
        restaurant
    }
}

export const deleteRestaurant = (id) => {
    return {
        type: 'DELETE_RESTAURANT',
        id
    }
}

export const addReview = (reviewText, restaurantId) => {
    return {
        type: 'ADD_REVIEW',
        reviewText,
        restaurantId
    }
}