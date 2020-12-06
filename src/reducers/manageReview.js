import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    switch (action.type){
        case 'ADD_REVIEW':

            const newReview = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }

            return [...state, newReview]

        case 'DELETE_REVIEW':
            
            const newReviewArray = state.filter(review => review.id !== action.id)

            return newReviewArray
            

        default: return state
    }
}
