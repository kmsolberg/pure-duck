const FILTER_REVIEWS = 'FILTER_REVIEWS';

export function filterReviews(reviews) {
    return  {
        type: FILTER_REVIEWS,
        payload: reviews
    };
}

const initialState = {
    reviews: []
}

export function reviewReducer(state = initialState, action) {
    switch(action.type) {
        case FILTER_REVIEWS:
            return {
                reviews: action.payload
            };
        default:
            return state;
    }
}