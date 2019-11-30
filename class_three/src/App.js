import React from "react";
import "./App.css";

// const list = [
//   {
//     title: "React",
//     url: "https://facebook.github.io/react/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0
//   }
// ];

// const name = "Saad";

// const obj = {
//   name,
//   sayHi() {
//     return "Hello";
//   }
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Run Constructor");
    this.state = {
      users: ["Ali", "Saad", "Hasnain", "Sami", "Faizan"]
      // myData: list,
      // name: "Hasnain"
    };
    // this.saySomething = this.saySomething.bind(this);
    // console.log("this.props", this);
  }

  // callState = () => {
  // console.log(this.state.myData);
  // };

  removeItem = index => {
    const users = this.state.users;
    users.splice(index, 1);
    this.setState(
      {
        users
      },
      () => {
        console.log("state updated");
      }
    );
  };

  saySomething = () => {
    console.log("kiya hal hain", this);
  };

  getData = val => {
    console.log(val);
  };

  render() {
    return (
      <div className="App">
        {/* <h1 onClick={this.callState}>{this.state.name}</h1> */}
        {/* {this.state.users.map((val, index) => {
          return (
            <h1 key={index} onClick={() => this.removeItem(index)}>
              {val}
            </h1>
          );
        })} */}

        {/* {this.state.users.map((val, index) => {
          const onHandleDismiss = () => this.getData(val);
          return (
            <h1 key={index} onClick={onHandleDismiss}>
              {val}
            </h1>
          );
        })} */}
        {/* <button onClick={this.saySomething}>Click</button> */}
      </div>
    );
  }
}

export default App;
