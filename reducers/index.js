//This file binds all reducers 

import { combineReducers } from 'redux';
import listReducers from './listReducers';
import catogoryNewsReducers from './catogoryNewsReducers';

const allReducers = combineReducers({
    listReducers,
    catogoryNewsReducers
    //you can add more reducers here, separated by , !
});
export default allReducers;