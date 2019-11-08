import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const classDate = "First React Class";
    const list = [
      {
        title: "React",
        url: "https://facebook.github.io/react/",
        author: "Jordan Walke",
        num_comments: 3,
        points: 4,
        objectID: 0
      },
      {
        title: "Redux",
        url: "https://github.com/reactjs/redux",
        author: "Dan Abramov, Andrew Clark",
        num_comments: 2,
        points: 5,
        objectID: 1
      }
    ];
    return (
      <div className="App">
        <h1>React Class One..........</h1>
        <h1>{classDate}</h1>
        {list.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value.title}</h1>
              <p>{value.points}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
