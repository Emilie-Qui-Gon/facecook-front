import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/menu';

import Header from 'src/components/Header';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.logged,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
// props: () => {
//   dispatch(actionFromAnActionCreator());
// },

toggle: () => {
  // on veut emettre l'intention je veux inverser l'état d'ouverture du composant settings
  // pour cela, j'ai besoin d'envoyer une action au store
  // une action est un objet
  // nous allons utiliser un action creator pour qu'il crée l'objet en question
  dispatch(toggleMenu());
},
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);