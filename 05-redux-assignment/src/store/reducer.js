import * as actionTypes from './actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: 'James',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                results: state.results.concat( newPerson )
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