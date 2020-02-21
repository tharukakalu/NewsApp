
import { FETCH_SUCCEEDED, FETCH_FAILED, FETCH_DATA } from '../actions/actionTypes';
import { CATEGORY_HEADLINES_AVAILABLE, CATEGORY_HEADLINES_SUCCEEDED, CATEGORY_HEADLINES_FAILED } from '../actions/actionTypes';

//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchData() {
    try {
        const receivedData = yield Api.getDataListFromApi();
        console.log('receivedData; ', receivedData);

        yield put({ type: FETCH_SUCCEEDED, receivedData: receivedData });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchDataList() {
    console.log('watchFetchDataList;watchFetchDataList ');
    yield takeLatest(FETCH_DATA, fetchData);
    yield takeLatest(CATEGORY_HEADLINES_AVAILABLE, fetchCustomNews);
}


export function* fetchCustomNews() {
    try {
        const receivedData = yield Api.getCustomNewsFetch();
        console.log('receivedData;fetchCustomNews ', receivedData);

        yield put({ type: CATEGORY_HEADLINES_SUCCEEDED, receivedData: receivedData });
    } catch (error) {
        yield put({ type: CATEGORY_HEADLINES_FAILED, error });
    }
}
export function* watchFetchCustomNews() {
    console.log(';watchFetchCustomNews ');
    yield takeLatest(CATEGORY_HEADLINES_AVAILABLE, fetchCustomNews);
}