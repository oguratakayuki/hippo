import React from "react";
import "./App.css";
import Cage from "./cage";
import AnimalInfo from "./animalInfo";
import Action from "./action";

export type HippoProps = {
  id: number;
  name: string;
  age: number;
};

export function Hippo(props: HippoProps) {
  return (
    <div className="wrapper">
      <Cage />
      <AnimalInfo id={props.id} name={props.name} age={props.age} />
      <Action id={props.id} />
    </div>
  );
}
