import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    switch (action.type){
        case 'ADD_REVIEW':

            const newReview = {
                id: cuid(),
                text: action.reviewText,
                restaurantId: action.restaurantId
            }

            return [...state, newReview]

        default: return state
    }
}
