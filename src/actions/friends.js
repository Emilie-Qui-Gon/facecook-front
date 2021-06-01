// == friends

// action type LOAD_FRIENDS_FROM_API
export const LOAD_FRIENDS_FROM_API = 'LOAD_FRIENDS_FROM_API';

// action creator loadRecipeFromApi
export const loadFriendsFromApi = () => ({
  type: LOAD_FRIENDS_FROM_API,
});

// action type SAVE_FRIENDS
export const SAVE_FRIENDS = 'SAVE_FRIENDS';

// action creator saveRecipes
export const saveFriends = (userDataFriends) => ({
  type: SAVE_FRIENDS,
  userDataFriends,
});

// action type HANDLE_ADD_FRIENDS
export const HANDLE_ADD_FRIENDS = 'HANDLE_ADD_FRIENDS';

// action creator handleAddFriends
export const handleAddFriends = () => ({
  type: HANDLE_ADD_FRIENDS,
});

// action type MODIFY_ID_FRIEND
export const MODIFY_ID_FRIEND = 'MODIFY_ID_FRIEND';

// action creator modifyIdFriend
export const modifyIdFriend = (id) => ({
  type: MODIFY_ID_FRIEND,
  id,
});

// action type HANDLE_DELETE_FRIENDS
export const HANDLE_DELETE_FRIENDS = 'HANDLE_DELETE_FRIENDS';

// action creator handleDeleteFriends
export const handleDeleteFriends = () => ({
  type: HANDLE_DELETE_FRIENDS,
});

// action type DELETE_ID_FRIEND
export const DELETE_ID_FRIEND = 'DELETE_ID_FRIEND';

// action creator deleteIdFriend
export const deleteIdFriend = (id) => ({
  type: DELETE_ID_FRIEND,
  id,
});


