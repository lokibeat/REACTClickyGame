import React from 'react';
import "./Counter.css";

class Counter extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      count: 0
    };

render() {
    return (
        <div className="container">
        <div className="card-body">
            <p className="card-text">Score: {this.state.count}</p>
        </div>
        </div>
    );
    }
}

export default Counter;