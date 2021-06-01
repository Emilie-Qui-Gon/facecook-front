import React from 'react';
import { Button, Card, Image} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './list.scss';

const List = ({friends, handleDelete}) => { 
  
  const handleDeleteSubmit = (evt) => {
    const id = evt.target.value;
    // on récupère l'id de l'ami à supprimer
    handleDelete(id);
  
  }

  return(
   
  <>
      <div className="list-title">Amis<button className= "add--link" color ='right'color='green'><NavLink  to="/mes-amis/ajout" exact>Ajout d'amis</NavLink></button></div>
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
              icon='user times' 
              color='red'
              value={friend.id}
              onClick={handleDeleteSubmit}
            
            > 
             
             <i className="fas fa-trash-alt"></i> Supprimer
            </Button>
          
            </Card>
          ))}
      </Card.Group>
      </div>
    </>
)
};

List.propTypes = {
  friends: PropTypes.shape({
    pseudonym: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

export default List
