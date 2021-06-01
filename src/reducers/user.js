import {
  CHANGE_USER_FIELD_VALUE,
  SAVE_USER, LOGOUT,
  CHANGE_REGISTER_FIELD_VALUE,
  MODIFY_REGISTER_FIELD_VALUE,
  CHANGE_SELECT,
  MODIFY_REGISTER_SELECT,
  LOAD_USERS_FROM_API,
  SAVE_USER_REGISTRATION,
  SAVE_MODIFY_USER,
  SAVE_MODIFY_FRIENDS,
  SAVE_USER_FRIENDS,
} 
from 'src/actions/user';

export const initialState = {
  id: '',
  email: '',
  password: '',
  logged: false,
  pseudonym: '',
  status: '',
  username: '',
  friends: '',
  avatar: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        pseudo: '',
        logged: false,
        email: '',
        paswword: '',
      };
    case SAVE_USER:
      return {
        ...state,
        logged: !state.logged,
        pseudonym: action.userData.user.pseudonym,
        friends: action.userData.user.friends,
        password: action.userData.password,
        username: action.userData.username,
        status: action.userData.user.status,
        id: action.userData.user.id,
        avatar: action.userData.user.avatar,
        password: '',
        username: '',
        email:'',
      };
    case CHANGE_USER_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_REGISTER_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_SELECT:
      return {
        ...state,
        status: action.newSelect,
      };
    case MODIFY_REGISTER_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case MODIFY_REGISTER_SELECT:
      return {
        ...state,
        status: action.newSelect,
      };
    case LOAD_USERS_FROM_API:
    return {
      ...state,
      loadUser: true,
    };
    case SAVE_USER_REGISTRATION:
      return {
        ...state,
        id: action.userData.id,
        pseudonym: action.userData.pseudonym,
        status: action.userData.status,
        password: action.userData.password,
        email: action.userData.email,
        email:'',
        pseudonym:'',
        password:'',
      };
      case SAVE_MODIFY_USER:
      return {
        ...state,
        id: action.userData.id,
        pseudonym: action.userData.pseudonym,
        status: action.userData.status,
        password: action.userData.password,
        email: action.userData.email,
        email:'',
        password:'',
      };
      case SAVE_USER_FRIENDS:
      return {
        ...state,
        friends: action.userData.friends,
      };
    default:
      return state;
  }
};

export default reducer;
