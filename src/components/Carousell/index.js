import React from 'react';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import './carousell.scss';

import pizza from 'src/assets/pizza.png';
import burger from 'src/assets/burger.png';
import dessert from 'src/assets/dessert.png';

const Carousell = () => (
  <div className="box">
    <div className="box__div-text-carousel">
      <h1 className="box__div-text-carousel__h1">Les dernières Recettes postées...</h1>
      <h2 className="box__div-text-carousel__h2">A vite déguster !</h2>
    </div>

    <Carousel id="box__carousel" showThumbs={false} infiniteLoop={true}>
      <div className="box__carousel__image"><img src={pizza}></img></div>
      <div className="box__carousel__image"><img src={burger}></img></div>
      <div className="box__carousel__image"><img src={dessert}></img></div>
    </Carousel>

    <div className="box__div-presentation">
      <h1 className="box__div-presentation__large">Bienvenue ! <i className="fas fa-feather-alt"></i></h1>
      <p>Ici vous pourrez partager toutes vos Meilleures recettes avec vos amis, vos proches... et tout ça gratuitement !</p> 
      <p>Vous pouvez d'ores et déjà accéder à la page des Recettes publiques afin de consulter immédiatement toutes les délicieuses recettes disponibles.</p>      
      <p>En vous inscrivant, vous pourrez vous joindre à nos utilisateurs afin de partager vous aussi, vos recettes favorites.</p>   
      <p className="box__div-presentation__p-bas"> Et... Bon appétit bien sûr !</p>   
    </div>
  </div>
);

export default Carousell;

