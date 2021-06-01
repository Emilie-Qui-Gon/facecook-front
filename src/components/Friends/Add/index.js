import React from 'react';
import { Button, Card, Image} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import './add.scss';

const Add = ({friends, handleAdd}) => { 

  const handleAddSubmit = (evt) => {
    const id = evt.target.value;
    // on redirige vers la page mes amis
    history.push("/mes-amis");
    handleAdd(id); 
  }

  let history = useHistory();
  
  return (
 
  <div className="friends">
     
    <div className="list-title">Ajouter des amis <button className= "add--link" color='left'color='blue'><NavLink to="/mes-amis" exact>Liste d'amis</NavLink></button></div>
    <div className="list-cards">
    
      <Card.Group size='mini' className="list-cards__box">
        {friends.map((friend) => (
        <Card size='mini'>
        <Card.Content size='mini'>
        <Image
          floated='right'
          size='small'
          src={`http://ec2-35-175-104-202.compute-1.amazonaws.com/images/avatars/${friend.avatar}`}
        />
        <Card.Description className="card-pseudo">
          {friend.pseudonym} <i className="fas fa-user"></i>
        </Card.Description>
        </Card.Content>
        
              
            <Button 
              id="card-button"
              icon='user plus' 
              color='green'
              // on récupère l'id de l'ami
              value={friend.id}
              onClick={handleAddSubmit}
            >
              Ajouter un ami
                          
            </Button>

          </Card>
       ))}   
      </Card.Group>
      </div>
  </div>
  )
};

Add.propTypes = {
  friends: PropTypes.shape({
    pseudonym: PropTypes.string.isRequired,
  }),
  handleAdd: PropTypes.func.isRequired,
}

export default Add;
