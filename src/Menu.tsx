import React from 'react';
import constJson from "./settings/const.json";
import { AnimalTypeInterface } from './types/AnimalTypeInterface';
const animalType: AnimalTypeInterface = constJson.animalType;


type MenuState = {
  mode: string;
};

type MenuProps = {
  addCageAction?: (animalType: string) => void;
};

export default class Menu extends React.Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
    this.state = { mode: 'initial' };
    this.cageType = this.cageType.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  cageType(){
    this.setState(() => ({ mode: 'cage' }));
  }
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if(this.props.addCageAction){
      const animalTypeElement = (document.getElementById("animalType")) as HTMLSelectElement;
      const animalType: string = String(animalTypeElement.options[animalTypeElement.selectedIndex].value);
      this.props.addCageAction(animalType);



      this.setState(() => ({ mode: 'initial' }));
    }
  };

  render() {
    if(this.state.mode == 'initial') {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
                <div className="col-sm-4">
                  <button className="pushable" onClick={this.cageType}> <span className="front"> おり </span> </button>
                </div>
                <div className="col-sm-4">
                  <button className="pushable"> <span className="front"> hippo </span> </button>
                </div>
                <div className="col-sm-4">
                  <button className="pushable"> <span className="front">飼育員</span> </button>
                </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else if(this.state.mode == 'cage') {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <select className="form-select option1" aria-label="Default select example" id="animalType" >
                  <option value="DEFAULT" disabled>Open this select menu</option>
                  {Object.keys(animalType).map(key =>
                    <option value={key}>{animalType[key]}</option>
                  )}
                </select>
              </div>
              <div className="col-sm-6">
                <button type="submit" className="pushable" onClick={this.onClick}> <span className="front">追加</span> </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
