import React from 'react';
import './App.css';
import Animal from './Animal';
import type { AnimalInfo } from './types/AnimalInfo';

type MyProps = {
  // using `interface` is also ok
  id: number;
  name: string;
};


type CageState = {
  id: number;
  animals: AnimalInfo[];
  currentAnimalId: number;
};

export default class Cage2 extends React.Component<MyProps, CageState> {
  constructor(props: MyProps) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.state = {
      id: props.id,
      animals: [],
      currentAnimalId: 1,
    };
  }
  generateAnimal(){
    return {id: this.state.currentAnimalId, name: 'hoge', hp: 777}
  }
  onClick(){
    this.setState((state) => ({
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
                 return <div className="col-sm-6"><Animal {...object} /></div>
              })}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onClick}>カバ</button>
      </React.Fragment>
    );
  }
}
