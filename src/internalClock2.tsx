import React from "react";
export default class Clock extends React.Component<any,{date: Date}> {

  private timer: any;
  constructor(props: {date: Date}) {
    super(props);
    this.state = {date: props.date};
    this.timer = 0;
  }


  componentDidMount() {
    this.timer = window.setInterval( () => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    console.log('here');
    let date = this.state.date;
    date.setHours(date.getHours() + 1);
    this.setState({
      date: date
    });

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
