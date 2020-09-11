import {GET_FAILURE, GET_PENDING, GET_SUCCESS, POST_FAILURE, POST_SUCCESS, POST_PENDING} from "../actions";

const initialState = {
    state: "initial",
    smurfs: [],
}

export default function(state = initialState, action) {
    switch(action.type)
    {
        case GET_PENDING:
        case GET_SUCCESS:
        case GET_FAILURE:
        case POST_PENDING:
        case POST_FAILURE:
        case POST_SUCCESS:
        default:
            return state;
    }
}