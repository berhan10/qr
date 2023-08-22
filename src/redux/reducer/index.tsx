import {combineReducers} from 'redux';

import {reducer as ThemeReducer} from './ThemeRedux';

export default combineReducers({
  theme: ThemeReducer,
});
