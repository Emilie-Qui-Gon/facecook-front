import { connect } from 'react-redux';
import { changeRegisterFieldValue, changeSelect, submit } from 'src/actions/user';

import Registration from 'src/components/Registration';


// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  email: state.user.email,
  password: state.user.password,
  pseudonym: state.user.pseudonym,
  status: state.user.status,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (value, name) => {
    dispatch(changeRegisterFieldValue(value, name));
  },
  changeSelect: (newSelect) => {
    dispatch(changeSelect(newSelect));
  },
  doSubmit: () => {
    dispatch(submit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
