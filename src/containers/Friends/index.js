import { connect } from 'react-redux';

import Friends from 'src/components/Friends';

import { loadFriendsFromApi } from 'src/actions/friends';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  // friends: state.friends.list,
  // friendsUser: state.user.friends,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
    loadFriends: () => {
        dispatch(loadFriendsFromApi());
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);