import * as actionTypes from './actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                results: state.results.concat({id: action.payload.id, name: action.payload.name, age: action.payload.age})
            }
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state
}

export default reducer;