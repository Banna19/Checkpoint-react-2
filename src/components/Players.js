// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Définir des valeurs par défaut pour les props
const defaultProps = {
  name: "Nom du joueur",
  team: "Équipe",
  nationality: "Nationalité",
  shirtNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

const Player = ({ name, team, nationality, shirtNumber, age, image }) => {
  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    textAlign: 'center'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          Nationalité: {nationality}
          <br />
          Numéro de Maillot: {shirtNumber}
          <br />
          Âge: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  shirtNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string
};

Player.defaultProps = defaultProps;

export default Player;
