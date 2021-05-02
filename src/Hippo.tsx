import React from 'react';
import './App.css';
import Cage from './cage';
import AnimalInfo from './animalInfo';

function Hippo() {
  return (
    <div className="wrapper">
      <Cage />
      <AnimalInfo />
    </div>
  );
}

export default Hippo;
