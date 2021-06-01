import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';
import menuReducer from './menu';
import friendsReducer from './friends';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  menu: menuReducer,
  friends: friendsReducer,
});

export default rootReducer;
