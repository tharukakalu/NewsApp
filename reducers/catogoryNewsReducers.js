//Reducers for actions 

import { CATEGORY_HEADLINES_AVAILABLE, CATEGORY_HEADLINES_SUCCEEDED, CATEGORY_HEADLINES_FAILED } from '../actions/actionTypes';
const catogoryNewsReducers = (listCatogory = [], action) => {
    switch (action.type) {
        case CATEGORY_HEADLINES_SUCCEEDED:
            return action.receivedData;
        case CATEGORY_HEADLINES_FAILED:
            return [];
        default:
            return listCatogory; //state does not change
    }
}

export default catogoryNewsReducers;