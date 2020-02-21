/**
 * @format
 */


import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';

import AppNavigator from './navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome'

Icon.loadFont()

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent("ListView", () => App);
