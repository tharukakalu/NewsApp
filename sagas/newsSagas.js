

import { CATEGORY_HEADLINES_AVAILABLE, CATEGORY_HEADLINES_SUCCEEDED, CATEGORY_HEADLINES_FAILED } from '../actions/actionTypes';

function* fetchCustomNews() {
    try {
        const receivedData = yield Api.getCustomNewsFetch();
        console.log('receivedData;fetchCustomNews ', receivedData);

        yield put({ type: CATEGORY_HEADLINES_SUCCEEDED, receivedData: receivedData });
    } catch (error) {
        yield put({ type: CATEGORY_HEADLINES_FAILED, error });
    }
}
export function* watchFetchCustomNews() {
    yield takeLatest(CATEGORY_HEADLINES_AVAILABLE, fetchCustomNews);
}