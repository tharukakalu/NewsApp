//Reducers for actions 

import { FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
const listReducers = (list = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedData;
        case FETCH_FAILED:
            return [];
        default:
            return list; //state does not change
    }
}

export default listReducers;