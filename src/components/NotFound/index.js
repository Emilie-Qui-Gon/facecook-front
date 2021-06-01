// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import notfound from 'src/assets/404-logo.png';
// == Import
import './notfound.scss';

// == Composant
const NotFound = () => (
<div className="notfound">

<div className="notfound__image"><img src={notfound}></img></div> 
 

<div>
    
    <Button id="button"variant="warning"><NavLink className= "recette--link" to="/" exact>Accueil</NavLink></Button>
</div>

</div>
);

// == Export
export default NotFound;

