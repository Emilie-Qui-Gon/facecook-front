import { connect } from 'react-redux';
import axios from 'axios';

import Menu from 'src/components/Menu';
import { logout } from '../../actions/user';


const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
  pseudonym: state.user.pseudonym,
  recipes: state.recipes.list,
  isMenuOpen: state.menu.isOpen,
  
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogout: () => {
    dispatch(logout());    
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
