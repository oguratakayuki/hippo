import React from 'react';
import './App.css';
import Cage2 from './Cage2';
import Menu from './Menu';

type CageInfo = {
  id: number;
  animalType: string;
};

type Cages = {
  cages: CageInfo[];
};

export default class Zoo extends React.Component<{}, Cages> {
  constructor(props: {}) {
    super(props);
    this.addAnimalCage = this.addAnimalCage.bind(this)
    this.state =  { cages: [] }

  }
  addAnimalCage(animalType: string){
    let currentCageId: number; 
    if (this.state.cages.length > 0) {
      currentCageId = this.state.cages[this.state.cages.length - 1].id
    } else {
      currentCageId = 0
    }
    this.setState((state) => ({
      cages: [...this.state.cages, {id: currentCageId + 1 , animalType: animalType}]
    }));
  }


  render() {
    return (
      <React.Fragment>
        <Menu addCageAction={this.addAnimalCage} />
        <div className="container">
          <div className="row">
            
              {this.state.cages.map(function(cage, i){
                return <div className="col-sm-6"><Cage2 id={cage.id} name='hippos cage' animalType={cage.animalType} /> </div>
              })}
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
