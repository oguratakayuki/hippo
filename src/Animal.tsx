import React from "react";
import type { AnimalInfo } from "./types/animalInfo";

export default class Animal extends React.Component<AnimalInfo, AnimalInfo> {
  private timer: any;
  constructor(props: AnimalInfo) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      hp: props.hp,
      animalType: props.animalType,
      satiation: props.satiation,
      intelligence: props.intelligence,
      power: props.power,
      age: props.age,
      created: props.created,
      status: 'normal',
    };
    this.timer = 0;
  }

  componentDidMount() {
    this.timer = window.setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      satiation: this.state.satiation - 4
    });
    this.reflectStatus();
  }
  reflectStatus() {
    if (this.state.satiation < - 300) {
      this.setState({ status: "dead" });
    } else if (this.state.satiation < - 200) {
    } else if (this.state.satiation < - 100) {
    } else if (this.state.satiation < 0) {
      this.setState({ status: "angry" });
    } else {
      if ( this.state.status != "normal") {
        this.setState({ status: "normal" });
      }
    }
  }

  render() {
    const imageSrc = this.state.status + '-' + this.state.animalType + ".png";
    console.log(imageSrc);
    return (
      <React.Fragment>
        <img className="svg-class" src={imageSrc} alt="hippo" />
      </React.Fragment>
    );
  }
}
