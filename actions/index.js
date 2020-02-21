// Redux in React Native - Action Creators

import { FETCH_SUCCEEDED, FETCH_FAILED, FETCH_DATA } from './actionTypes';
import { CATEGORY_HEADLINES_AVAILABLE, CATEGORY_HEADLINES_SUCCEEDED, CATEGORY_HEADLINES_FAILED } from '../actions/actionTypes';

export const fetchDataListAction = (sort) => {
    console.log('fetchSuccessAction;sort ', sort);
    return {
        type: FETCH_DATA,
        sort
    }
}

export const fetchDataSuccessAction = (receivedData) => {
    console.log('fetchSuccessAction; ', receivedData);
    return {
        type: FETCH_SUCCEEDED,
        receivedData
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}




export const fetchNewsCatgoryAction = (sort) => {
    console.log('fetchNewsCatgoryAction;sort ', sort);
    return {
        type: CATEGORY_HEADLINES_AVAILABLE,
        sort
    }
}


export const fetchNewsSuccessAction = (receivedData) => {
    console.log('fetchNewsSuccessAction; ', receivedData);
    return {
        type: CATEGORY_HEADLINES_SUCCEEDED,
        receivedData
    }
}


export const fetchFailedNewsAction = (error) => {
    return {
        type: CATEGORY_HEADLINES_FAILED,
        error
    }
}

