import { connect } from 'react-redux';

import { handleDeleteFriends, deleteIdFriend, loadFriendsFromApi } from 'src/actions/friends';
import List from 'src/components/Friends/List';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  friends: state.user.friends,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDelete: (id) => {
    dispatch(deleteIdFriend(id))
    setTimeout(() => {
        dispatch(handleDeleteFriends());
    }, 500)
},
loadFriends: () => {
  dispatch(loadFriendsFromApi());
}
});

export default connect(mapStateToProps, mapDispatchToProps)(List);