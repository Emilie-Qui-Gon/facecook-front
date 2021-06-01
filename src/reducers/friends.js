import { LOAD_FRIENDS_FROM_API,
  SAVE_FRIENDS,
  MODIFY_ID_FRIEND,
  DELETE_ID_FRIEND,
 } from 'src/actions/friends';

const initialState = {
  list: [],
  loadAllFriends: false,
  pseudonym: '',
  friend: '',
  friendToRemove: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_FRIENDS_FROM_API:
      return {
        ...state,
        loadAllFriends: true,
      };
    case SAVE_FRIENDS:
    return {
      ...state,
      list: action.userDataFriends,
    };
    case MODIFY_ID_FRIEND:
    return {
      ...state,
      friend: action.id,
    };
    case DELETE_ID_FRIEND:
    return {
      ...state,
      friendToRemove: action.id,
    };
   
    default:
      return state;
  }
};

SAVE_FRIENDS