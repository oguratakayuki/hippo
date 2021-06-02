import React from "react";
import type { AnimalInfo } from "./types/animalInfo";

export default class Animal extends React.Component<AnimalInfo, AnimalInfo> {
  constructor(props: AnimalInfo) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      hp: props.hp,
      animalType: props.animalType,
    };
  }

  render() {
    const imageSrc = this.state.animalType + ".png";
    console.log(imageSrc);
    return (
      <React.Fragment>
        <img className="svg-class" src={imageSrc} alt="hippo" />
      </React.Fragment>
    );
  }
}
