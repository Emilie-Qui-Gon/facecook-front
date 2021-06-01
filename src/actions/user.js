// == LOGIN

// action type CHANGE_USER_FIELD_VALUE
export const CHANGE_USER_FIELD_VALUE = 'CHANGE_USER_FIELD_VALUE';

// action creator changeUserFieldValue
// on récupère le nom du champ et la valeur
// et on construit un objet action qui contient ces informations
export const changeUserFieldValue = (value, name) => ({
  type: CHANGE_USER_FIELD_VALUE,
  value,
  name,
});

// action type LOGIN
export const LOGIN = 'LOGIN';

// action creator login
export const login = () => ({
  type: LOGIN,
});


// action type SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// action creator saveUser
export const saveUser = (userData) => ({
  type: SAVE_USER,
  userData,
});

// action type LOGOUT
export const LOGOUT = 'LOGOUT';

// action creator logout
export const logout = () => ({
  type: LOGOUT,
});


// == REGISTRATION

// action type CHANGE_REGISTER_FIELD_VALUE
export const CHANGE_REGISTER_FIELD_VALUE = 'CHANGE_REGISTER_FIELD_VALUE';

// action creator changeRegisterFieldValue
// on récupère le nom du champ et la valeur
// et on construit un objet action qui contient ces informations
export const changeRegisterFieldValue = (value, name) => ({
  type: CHANGE_REGISTER_FIELD_VALUE,
  value,
  name,
});

// action type CHANGE_SELECT
export const CHANGE_SELECT = 'CHANGE_SELECT';

// action creator changeRegisterFieldValue
// on récupère le nom du champ et la valeur
// et on construit un objet action qui contient ces informations
export const changeSelect = (value) => ({
  type: CHANGE_SELECT,
  newSelect: value,
});

// action type Submit
export const SUBMIT = 'SUBMIT';

// action creator submit
export const submit = () => ({
  type: SUBMIT,
});

// == MODIFY PROFIL

// action type MODIFY_REGISTER_FIELD_VALUE
export const MODIFY_REGISTER_FIELD_VALUE = 'MODIFY_REGISTER_FIELD_VALUE';

// action creator modifyRegisterFieldValue
export const modifyRegisterFieldValue = (value, name) => ({
  type: MODIFY_REGISTER_FIELD_VALUE,
  value,
  name,
});

// action type CHANGE_SELECT
export const MODIFY_REGISTER_SELECT = 'MODIFY_REGISTER_SELECT';

// action creator changeRegisterFieldValue
// on récupère le nom du champ et la valeur
// et on construit un objet action qui contient ces informations
export const modifyRegisterSelect = (value) => ({
  type: MODIFY_REGISTER_SELECT,
  newSelect: value,
});

// action type LOAD_USERS_FROM_API
export const LOAD_USERS_FROM_API = 'LOAD_USERS_FROM_API';

// action creator loadUserFromApi
export const loadUsersFromApi = () => ({
  type: LOAD_USERS_FROM_API,
});

// action type SAVE_USER_REGISTRATION
export const SAVE_USER_REGISTRATION = 'SAVE_USER_REGISTRATION';

// action creator saveUser
export const saveUserRegistration = (userData) => ({
  type: SAVE_USER_REGISTRATION,
  userData,
});

// // action type LOAD_RECIPES
// export const LOAD_RECIPES = 'LOAD_RECIPES';

// // action creator loadRecipes
// export const loadRecipes = () => ({
//   type: LOAD_RECIPES,
// });

// action type MODIFY
export const MODIFY = 'MODIFY';

// action creator modify
export const modify = () => ({
  type: MODIFY,
});

// action type SAVE_MODIFY_USER
export const SAVE_MODIFY_USER = 'SAVE_MODIFY_USER';

// action creator saveModifyUser
export const saveModifyUser = (userData) => ({
  type: SAVE_MODIFY_USER,
  userData,
});

// action type SAVE_USER_FRIENDS
export const SAVE_USER_FRIENDS = 'SAVE_USER_FRIENDS';

// action creator saveUserFriends
export const saveUserFriends = (userData) => ({
  type: SAVE_USER_FRIENDS,
  userData,
});

