import { combineReducers } from 'redux';
import  fetchData  from './fetch_data';

const rootReducer = combineReducers({
  result: fetchData
})

export default rootReducer;
