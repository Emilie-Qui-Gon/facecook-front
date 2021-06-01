// == Import npm
import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';

import { ToastContainer } from 'react-toastify';


// == Import components
import Home from 'src/components/Home';
import Contact from 'src/components/Contact';
import NotFound from 'src/components/NotFound';


// == Import containers
import Header from 'src/containers/Header';
import Menu from 'src/containers/Menu';
import LoginForm from 'src/containers/LoginForm';
import Registration from 'src/containers/Registration';
import Profil from 'src/containers/Profil';
import Recipes from 'src/containers/Recipes';
import MyRecipes from 'src/containers/MyRecipes';
import RecipeForm from 'src/containers/RecipeForm';
import Recipe from 'src/containers/Recipe';
import RecipeEdit from 'src/containers/RecipeEdit';
import Friends from 'src/containers/Friends';
import Add from 'src/containers/Add';

import './app.scss';

// == Composant

const App = ({ isLogged, recipes, pseudonym }) => { 


  return (
    <div className="app">
      <Menu />
      <Header />
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/recettes" exact>
            <Recipes/>
        </Route>

        <Route path="/connexion" exact>
          <LoginForm />
        </Route>

        <Route path="/inscription" exact>
            <Registration />
        </Route>

        {isLogged && (
        <Route path="/ajouter-une-recette" exact>
          <RecipeForm/>
        </Route>
        )}

        {isLogged && (
          <Route path="/mes-recettes" exact>
            <MyRecipes />
          </Route>
        )}


        {isLogged && (
        <Route path="/mes-amis" exact>
          <Friends />
        </Route>
        )}
        
        {isLogged && (
        <Route path="/mes-amis/ajout" exact>
          <Add />
        </Route>
        )}

        {isLogged && (
          <Route path="/modifier-mon-profil" exact>
            <Profil/>
          </Route>
        )}

        <Route path="/ajouter-une-recette" exact>
          <RecipeForm/>
        </Route>
        
        {
          // on map sur recipes pour récupérer les différents paramêtres
          // dont le slug pour la recette demandée
            recipes.map((recipe) => (
              <Route path={`/modifier-ma-recette/${recipe.slug}`} exact>
              <RecipeEdit
                key={recipe.title}
                {...recipe}
              />
              </Route>
            ))
          }


          {
            // on map sur recipes pour récupérer les différents paramêtres
            // dont le slug pour la recette demandée
            recipes.map((recipe) => (
              <Route path={`/recette-perso/${recipe.slug}`} exact>
              <Recipe
                key={recipe.slug}
                {...recipe}
                pseudonym={pseudonym}
              />
              </Route>
            ))
          }

        <Route path="/contact" exact>
          <Contact/>
        </Route>
        
        <Route>
        <NotFound />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
};

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  pseudonym: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default App;


              
        

