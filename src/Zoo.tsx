import React from 'react';
import './App.css';
import Cage2 from './Cage2';
import Menu from './Menu';


type MyState = {
  cages: number[]; // like this
};

export default class Zoo extends React.Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.addCage = this.addCage.bind(this)
    this.onMyTextBoxChanged = this.onMyTextBoxChanged.bind(this);
    this.state = {
      cages: [],
    };
  }
  addCage(){
    this.setState((state) => ({
      cages: [...state.cages, 9]
    }));
  }
  onMyTextBoxChanged(){
    console.log('piyo');
    this.addCage();
  }

  render() {
    return (
      <React.Fragment>
        <Menu hoge={this.onMyTextBoxChanged} />
        <div className="container">
          <div className="row">
            
              {this.state.cages.map(function(cage, i){
                       return <div className="col-sm-6"><Cage2 id={i} name='hippos cage' /> </div>
              })}
          </div>
        </div>

        <br />
      </React.Fragment>
    );
  }
}
