import React from "react";
import "./App.css";
import Cage2 from "./cage2";
import Menu from "./menu";
import InternalClock from "./internalClock";
import InternalClock2 from "./internalClock2";

import constJson from "./settings/const.json";
import { AnimalTypeInterface } from "./types/animalTypeInterface";
const animalTypes: AnimalTypeInterface = constJson.animalType;

type CageInfo = {
  id: number;
  animalType: string;
};
type Info = {
  message: string;
};

type Cages = {
  cages: CageInfo[];
  infos: Info[];
};

export default class Zoo extends React.Component<{}, Cages> {
  private childRefs: React.RefObject<Cage2>[];
  constructor(props: {}) {
    super(props);
    this.addAnimalCage = this.addAnimalCage.bind(this);
    this.state = { cages: [], infos: [] };
    this.childRefs = [];
    this.getZooInfo = this.getZooInfo.bind(this);
  }
  addAnimalCage(animalType: string) {
    let currentCageId: number;
    if (this.state.cages.length > 0) {
      currentCageId = this.state.cages[this.state.cages.length - 1].id;
    } else {
      currentCageId = 0;
    }
    const message: string = animalTypes[animalType] + "を追加しました";
    this.setState((state) => ({
      cages: [
        ...this.state.cages,
        { id: currentCageId + 1, animalType: animalType },
      ],
      infos: [...this.state.infos, { message: message }],
    }));
  }

  getZooInfo() {
    let cageInfo = this.childRefs.map((childRef) => {
      if (childRef && childRef.current) {
        return childRef.current.getCageInfo();
      }
    });
    console.log(cageInfo.filter(Boolean));
  }

  render() {
    return (
      <React.Fragment>
        <Menu addCageAction={this.addAnimalCage} />
        <button onClick={() => this.getZooInfo()}>CageInfo </button>
        <div className="container">
          <div className="row">
            <InternalClock2 date={new Date}/>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <div className="container">
                <div className="row">
                  {this.state.cages.map( (cage, i) => {
                    const ref: React.RefObject<Cage2> = React.createRef();
                    this.childRefs.push(ref);
                    return (
                      <div className="col-sm-6" key={cage.id}>
                        <Cage2
                          id={cage.id}
                          name="hippos cage"
                          animalType={cage.animalType}
                          ref={ref}
                        />{" "}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              {this.state.infos.map(function (info, i) {
                return (
                  <div className="card info-card" key={i}>
                    <div className="card-body">{info.message}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
