import {GET_FAILURE, GET_PENDING, GET_SUCCESS, POST_FAILURE, POST_SUCCESS, POST_PENDING} from "../actions";

const initialState = {
    mainState: "initial",
    formState: "initial",
    smurfs: [],
}

export default function(state = initialState, action) {
    switch(action.type)
    {
        case GET_PENDING:
            return {...state, mainState: "pending"};
        case GET_SUCCESS:
            return {...state, mainState: "loaded", smurfs: action.data};
        case GET_FAILURE:
            return {...state, mainState: "failed"};
        case POST_PENDING:
            return {...state, formState: "pending"};
        case POST_FAILURE:
            return {...state, formState: "loaded", smurfs: action.data};
        case POST_SUCCESS:
            return {...state, formState: "failed"};
        default:
            return state;
    }
}