import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import './contact.scss';
import emilie from '../../assets/emilie.png';
import oliver from '../../assets/oliver.png';
import sebastien from '../../assets/sebastien.png';
import mariem from '../../assets/mariem.png';
import nolwenn from '../../assets/nolwenn.png';

const Contact = () => (
  <div className="contact">
    <div id="title">
      <h2 className="contact__title">Notre team <i className="fas fa-feather-alt"></i></h2>
    </div>
      
    <div className="contact__card1">
      <Card>
      <Image src={nolwenn} wrapped ui={false} />
      <Card.Content>
      <Card.Header id="name">Nolwenn</Card.Header>
      <Card.Description id="boss">
        Product Owner Lead Dev Back
      </Card.Description>
      </Card.Content>
      <Card.Content extra id="git">
        <a 
          href="https://github.com/Nolwenn-Borgne" target="_blank">
          <Icon name='github' />
        </a>
      </Card.Content>
      </Card>
    </div>

    <div className="contact__card2">
    <Card>
      <Image src={emilie} wrapped ui={false} />
      <Card.Content>
      <Card.Header id="name">Emilie </Card.Header>
      <Card.Description id="boss">
        Scrum Master
      </Card.Description>
      </Card.Content>
      <Card.Content extra id="git">
        <a
          href="https://github.com/Emilie-Qui-Gon" target="_blank">
          <Icon name='github' />
        </a>
      </Card.Content>
      </Card>
    </div>

    <div className="contact__card3">
    <Card>
      <Image src={oliver} wrapped ui={false} />
      <Card.Content>
      <Card.Header id="name">Olivier</Card.Header>
      <Card.Description id="boss">
        Lead Dev Front
      </Card.Description>
      </Card.Content>
      <Card.Content extra id="git">
        <a
          href="https://github.com/olivier-geiger" target="_blank">
          <Icon name='github' />
        </a>
      </Card.Content>
      </Card>
    </div>

    <div className="contact__card4">
    <Card>
      <Image src={mariem} wrapped ui={false} />
      <Card.Content>
      <Card.Header id="name">Mariem</Card.Header>
      <Card.Description id="boss">
        Référent Git
      </Card.Description>
      </Card.Content>
      <Card.Content extra id="git">
        <a
         href="https://github.com/Mariem-K" target="_blank">
          <Icon name='github' />
        </a>
      </Card.Content>
      </Card>
    </div>

    <div className="contact__card5">
    <Card>
      <Image src={sebastien} wrapped ui={false} />
      <Card.Content>
      <Card.Header id="name">Sébastien</Card.Header>
      <Card.Description id="boss">
        Référent Technique
      </Card.Description>
      </Card.Content>
      <Card.Content extra id="git">
        <a
          href="https://github.com/Sebastien-Gonzalez" target="_blank">
          <Icon name='github' />
        </a>
      </Card.Content>
      </Card>
    </div>
  </div>
);


export default Contact;
