import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer'
import manageReview from './manageReview'

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  reviews: manageReview
});

export default rootReducer;
