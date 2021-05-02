import React from 'react';
import './App.css';
import Cage from './Cage';
import AnimalInfo from './AnimalInfo';
import Action from './Action';

type Props = {
  name: string;
  age: number;
}

function Hippo<Props>(props) {
  return (
    <div className="wrapper">
      <Cage />
      <AnimalInfo name={props.name} age={props.age} />
      <Action />
    </div>
  );
}

export default Hippo;
