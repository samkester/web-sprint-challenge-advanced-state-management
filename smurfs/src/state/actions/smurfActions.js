import axios from "axios";

export const GET_PENDING = "GET_PENDING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export const POST_PENDING = "POST_PENDING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const getSmurfs = () => {
    return(dispatch) => {
        dispatch({type: GET_PENDING});

        axios.get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response)
            dispatch({type: GET_SUCCESS, data: response.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type: GET_FAILURE, data: error})
        })
    }
}

export const postSmurf = smurf => {
    return(dispatch) => {
        dispatch({type: POST_PENDING});

        axios.post("http://localhost:3333/smurfs", smurf)
        .then(response => {
            console.log(response)
            dispatch({type: POST_SUCCESS, data: response.data}) // POST replies with the entire state of the smurfs file
        })
        .catch(error => {
            console.log(error)
            dispatch({type: POST_FAILURE, data: error})
        })
    }
}