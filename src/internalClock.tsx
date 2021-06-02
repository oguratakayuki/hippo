import React from "react";
export default class Clock extends React.Component<any,{date: Date}> {

  private timer: NodeJS.Timer;
  constructor(props: any) {
    super(props);
    this.timer = setInterval( () => this.tick(), 1000);
    this.state = {date: new Date()};
  }


  componentDidMount() {
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
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
