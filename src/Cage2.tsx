import React from "react";
import "./App.css";
import Animal from "./animal";
import type { AnimalInfo } from "./types/animalInfo";
import { between } from "./util";

type CageProps = {
  // using `interface` is also ok
  id: number;
  name: string;
  animalType: string;
};

type CageState = {
  id: number;
  animals: AnimalInfo[];
  currentAnimalId: number;
  animalType: string;
};

export type AnimalSummaryType = {
  id: number;
  satiation: number;
}

export type CageSummaryType = {
  id: number;
  animalType: string;
  animalSummary: AnimalSummaryType[];
}


export default class Cage2 extends React.Component<CageProps, CageState> {
  private childRefs: React.RefObject<Animal>[];
  constructor(props: CageProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      id: props.id,
      animals: [],
      currentAnimalId: 1,
      animalType: props.animalType,
    };
    this.childRefs = [];

  }
  generateAnimal() {
    return {
      id: this.state.currentAnimalId,
      animalType: this.state.animalType,
      name: "hoge",
      hp: between(60, 80),
      satiation: 100,
      intelligence: between(60, 80),
      power: between(60, 80),
      age: between(0, 30),
      created: new Date,
    };
  }
  onClick() {
    this.setState((state) => ({
      id: state.id,
      animals: [...state.animals, this.generateAnimal()],
      currentAnimalId: state.currentAnimalId + 1,
    }));
  }

  componentDidMount() {
  }

  getCageInfo(): CageSummaryType {
    let cageSummary: CageSummaryType = {
      id: this.state.id,
      animalType: this.state.animalType,
      animalSummary: []
    }
    if (this.childRefs.length) {
      cageSummary.animalSummary = this.childRefs.filter( (childRef) => {
        return  childRef.current;
      }).map((childRef) => {
        if (childRef.current) {
          return childRef.current.getAnimalInfo();
        } else {
          return {} as AnimalSummaryType;
        }
      }).filter(Boolean);
    }
    return cageSummary;
  }

  render() {
    return (
      <React.Fragment>
        <div className="cage">
          <div className="container">
            <div className="row">
              {this.state.animals.map( (object, i) => {
                const ref: React.RefObject<Animal> = React.createRef();
                this.childRefs.push(ref);
                return (
                  <div className="col-sm-6" key={object.id} >
                    <Animal {...object} ref={ref} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onClick}
        >
          追加
        </button>
      </React.Fragment>
    );
  }
}
