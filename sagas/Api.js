// Send GET / POST api requests to server
let NEWS_API_KEY = 'dd86a58cdff948f2b885f4b507245074'

//API URL
export const API_URL = 'https://newsapi.org/v2';

export const SEARCH = `${API_URL}/everything${NEWS_API_KEY}&sortBy=relevancy`;

const NEWS_HEADLINE_URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + NEWS_API_KEY;


function* getDataListFromApi() {
    console.log('getDataListFromApi')
    const response = yield fetch(NEWS_HEADLINE_URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });

    response.json().then(function (data) {
        list = data
        console.log('request succeeded with JSON response', list)
        return list
    }).catch(function (error) {
        console.log('Data failed', error)

    });

    return list;
    //
}


function* getCustomNewsFetch(query) {
    const url = `${SEARCH}&q=${query.toLowerCase()}`;
    console.log('url', url)
    const response = yield fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });

    response.json().then(function (data) {
        list = data
        console.log('getCustomNewsFetch request succeeded with JSON response', list)
        return list
    }).catch(function (error) {
        console.log('getCustomNewsFetch Data failed', error)

    });

    return list;
    //
}

export const Api = {
    getDataListFromApi, getCustomNewsFetch
}; 