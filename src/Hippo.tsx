import React from 'react';
import './App.css';
import Cage from './Cage';
import AnimalInfo from './AnimalInfo';
import Action from './Action';

export type HippoProps = {
  name: string;
  age: number;
}

export function Hippo(props: HippoProps) {
  return (
    <div className="wrapper">
      <Cage />
      <AnimalInfo name={props.name} age={props.age} />
      <Action />
    </div>
  );
}

