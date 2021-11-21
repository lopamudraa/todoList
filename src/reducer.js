import React from 'react';

const initialState = {
    count: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + action.val
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - action.val
            }
        case "STORE_RESULT":
            return {
                ...state,
                results: state.results.concat({ value: action.result, id: new Date().toLocaleTimeString() })
            }
        case "DELETE_RESULT":
            const updatedArray = state.results.filter((res, index) => res.id !== action.resultId)
            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}


export default reducer;