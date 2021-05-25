import React from 'react';

type MenuState = {
  mode: string;
};

type MenuProps = {
  hoge?: (a: number) => void;
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
    console.log('here');
    if(this.props.hoge){
      console.log('hoge');
      this.props.hoge(11);
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
                  <button type="submit" className="btn btn-success" onClick={this.cageType}>おり</button>
                </div>
                <div className="col-sm-4">
                  <button type="submit" className="btn btn-primary">Hippo</button>
                </div>
                <div className="col-sm-4">
                  <button type="submit" className="btn btn-primary">飼育員</button>
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
                  <input type="number" className="form-control"  id="actionValue" />
                </div>
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-primary" onClick={this.onClick}>add cage</button>
                </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
