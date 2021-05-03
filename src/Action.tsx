import React from 'react';

export default class Action extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('here');
    this.state = {
      actionType: '',
      actionValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    console.log(this.state);
    event.preventDefault();
  }
  handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }


  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div className="action-form">
            <div className="mb-3">
              <select className="form-select" aria-label="Default select example" name="actionType" onChange={this.handleInputChange} >
                <option value="DEFAULT" disabled>Open this select menu</option>
                <option value="1">feed</option>
                <option value="2">lesson</option>
                <option value="3">walk</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="option-input" className="form-label">action option</label>
              <input type="text" className="form-control" id="option-input" name="actionValue" onChange={this.handleInputChange}  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );

  }
}
