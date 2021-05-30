import React from 'react';
import './App.css';
import Animal from './animal';
import type { AnimalInfo } from './types/animalInfo';

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

export default class Cage2 extends React.Component<CageProps, CageState> {
  constructor(props: CageProps) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.state = {
      id: props.id,
      animals: [],
      currentAnimalId: 1,
      animalType: props.animalType,
    };
  }
  generateAnimal(){
    return {id: this.state.currentAnimalId, name: 'hoge', hp: 777, animalType: this.state.animalType}
  }
  onClick(){
    this.setState((state) => ({
      id: state.id,
      animals: [...state.animals, this.generateAnimal()],
      currentAnimalId: state.currentAnimalId + 1,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="cage">
          <div className="container">
            <div className="row">
              {this.state.animals.map(function(object, i){
                 return <div className="col-sm-6" key={object.id}><Animal {...object} /></div>
              })}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onClick}>カバ</button>
      </React.Fragment>
    );
  }
}
