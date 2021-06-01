import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { changeUserFieldValue, login, logout } from 'src/actions/user';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  username: state.user.username,
  password: state.user.password,
  isLogged: state.user.logged,
  pseudonym: state.user.pseudonym,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeField: (value, name) => {
    // console.log(` Je veux changer la valeur de ${name} pour y mettre : ${value}`);
    dispatch(changeUserFieldValue(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
