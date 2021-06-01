import { connect } from 'react-redux';
import { modifyRegisterFieldValue, modifyRegisterSelect, modify } from 'src/actions/user';

import ModifyProfil from 'src/components/Profil/ModifyProfil';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  email: state.user.email,
  password: state.user.password,
  pseudonym: state.user.pseudonym,
  status: state.user.status,
  avatar: state.user.avatar,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
    changeField: (value, name) => {
      dispatch(modifyRegisterFieldValue(value, name));
    },
    changeSelect: (newSelect) => {
      dispatch(modifyRegisterSelect(newSelect));
    },
    modifySubmit: () => {
      dispatch(modify());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProfil);
