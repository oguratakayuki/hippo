import React from 'react';
import './App.css';
import Cage2 from './Cage2';
import Menu from './Menu';

import constJson from "./settings/const.json";
import { AnimalTypeInterface } from './types/AnimalTypeInterface';
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
  constructor(props: {}) {
    super(props);
    this.addAnimalCage = this.addAnimalCage.bind(this)
    this.state =  { cages: [], infos: [] }

  }
  addAnimalCage(animalType: string){
    let currentCageId: number; 
    if (this.state.cages.length > 0) {
      currentCageId = this.state.cages[this.state.cages.length - 1].id
    } else {
      currentCageId = 0
    }
    const message: string = animalTypes[animalType] + 'を追加しました';
    this.setState((state) => ({
      cages: [...this.state.cages, {id: currentCageId + 1 , animalType: animalType}],
      infos: [...this.state.infos, {message: message}]
    }));
  }


  render() {
    return (
      <React.Fragment>
        <Menu addCageAction={this.addAnimalCage} />
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <div className="container">
                <div className="row">
                  
                    {this.state.cages.map(function(cage, i){
                      return <div className="col-sm-6"><Cage2 id={cage.id} name='hippos cage' animalType={cage.animalType} /> </div>
                    })}
                </div>
              </div>
            </div>
            <div className="col-sm-2">
              {this.state.infos.map(function(info, i){
                return <div className="card info-card"><div className="card-body">{info.message}</div></div>
              })}
            </div>
          </div>
        </div>


        <br />
      </React.Fragment>
    );
  }
}
