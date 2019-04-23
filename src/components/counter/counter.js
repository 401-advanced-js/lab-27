import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.increment} id="increment">
          Add to counter
        </button>
        <br />
        <button onClick={this.decrement} id="decrement">
          Subtract from counter
        </button>
      </div>
    );
  }
}
export default Counter;
