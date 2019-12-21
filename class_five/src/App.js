import React from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lists from "./components/Lists";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      list: [1, 2, 3, 4, 5],
      nestedArray: ["a", "b", ["c", "d", ["e", "f"]]]
    };
  }

  renderEmailInput = () => {
    const { age } = this.state;
    return (
      <div>
        <input
          type="number"
          value={age}
          onChange={e => this.setState({ age: e.currentTarget.value })}
        />
        <h1>{age}</h1>
      </div>
    );
  };

  renderList = list => {
    return <li>{list}</li>;
  };

  showPopup = () => {
    alert("No Lists Found!");
  };

  render() {
    const { name, list, nestedArray } = this.state;
    return (
      <div>
        {/* <input
          type="text"
          value={name}
          onChange={e => this.setState({ name: e.currentTarget.value })}
        />
        <h1>{name}</h1>
        {this.renderEmailInput()}
        <ol>
        {list.map(val => {
          return this.renderList(val)
        })}
      </ol> */}
        {/* <Header title="This is Header" color="green" />
        <Lists data={list} popUp={this.showPopup} />
        <Footer title="Hello World" /> */}

        {/* {nestedArray.map(val => {
          if (typeof val === "string") return <h1>{val}</h1>;
          if (typeof val === "object") {
            return val.map(vals => {
              if (typeof vals === "string") return <h1>{vals}</h1>;
              if (typeof vals === "object") {
                return vals.map(valss => {
                  if (typeof valss === "string") return <h1>{valss}</h1>;
                });
              }
            });
          }
        })} */}
      </div>
    );
  }
}

export default App;
