import { connect } from 'react-redux';
import { logout } from 'src/actions/user';

import Profil from 'src/components/Profil';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
    isLogged: state.user.logged,
    pseudonym: state.user.pseudonym,
    status: state.user.status,
    avatar: state.user.avatar,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleLogout: () => {
        dispatch(logout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
