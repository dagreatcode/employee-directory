import React, { Component } from 'react';
import apiWorkers from "../utils/apiWorkers";
import Employees from "./components/Employees";
import App from "../App.css";

class SearchResult extends Component {
      // Setting the initial state of the Counter component
  state = {
    search: 0
    result: [],
  };

//   componentDidMount() {}

    render() {
        return (
            <div>
                <theOffice className="mt-4"
                    Hello
                />
            </div>
        );
    }
}

export default SearchResult;

// import React from "react";

// // By extending the React.Component class, Counter inherits functionality from it
// class Counter extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0
//   };

//   // handleIncrement increments this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {this.state.count}</p>
//           <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Increment
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
