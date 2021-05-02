import React from 'react';

export default class Action extends React.Component {
  constructor(props) {
    super(props);
    console.log('here');
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('The link was clicked.');
  }
  render() {
    return (
      <div className="action-form">
          <div className="mb-3">
            <select className="form-select" aria-label="Default select example" >
              <option value="DEFAULT" disabled>Open this select menu</option>
              <option value="1">feed</option>
              <option value="2">lesson</option>
              <option value="3">walk</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="option-input" className="form-label">action option</label>
            <input type="email" className="form-control" id="option-input" />
          </div>
          <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
      </div>
    );

  }
}
