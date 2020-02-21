//rootSaga => to manage other sagas

//Saga effects
import { call, all } from 'redux-saga/effects';
import { watchFetchDataList, fetchCustomNews } from './listSagas';
import { watchFetchCustomNews } from './newsSagas';
//import { watchFetchData } from './dataListSagas';

export default function* rootSaga() {
    yield call(watchFetchDataList);
    yield call(watchFetchCustomNews);
    yield call(fetchCustomNews);
}