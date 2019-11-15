import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
  }

  caller() {
    alert("hellow");
  }

  callMe = () => {
    this.caller();
  };

  getObj(obj) {
    console.log(obj);
  }

  render() {
    // this.caller();
    // this.callMe();
    console.log("render");

    const classDate = "First React Class";
    const list = ["abc", [1, 2, [1, 3, 4, [9, 8, 7], 5], 3], [4, 5, 6]];

    var users = [
      { id: 1, name: "ali" },
      { id: 2, name: "saad" },
      { id: 3, name: "khan" }
    ];

    return (
      <div className="App">
        <h1>React Class One..........</h1>
        <h1>{classDate}</h1>
        {/* {list.map((value, index) => {
          return value.map(val => {
            return <h1>{val}</h1>;
          });
        })} */}

        {/* {list.map(val => {
          console.log(val);
          if (typeof val == "number" || typeof val == "string") {
            return <h1>{val}</h1>;
          }

          if (typeof val == "object") {
            return val.map(val2 => {
              if (typeof val2 == "number" || typeof val2 == "string") {
                return <h1>{val2}</h1>;
              }

              if (typeof val2 == "object") {
                return val2.map(val3 => {
                  if (typeof val3 == "number" || typeof val3 == "string") {
                    return <h1>{val3}</h1>;
                  }

                  if (typeof val3 == "object") {
                    return val3.map(val4 => {
                      return <h1>{val4}</h1>;
                    });
                  }
                });
              }
            });
          }
        })} */}

        {users.map(val => {
          return (
            <div>
              <h1 onClick={this.getObj.bind(this, val)}>{val.id}</h1>
              <h1>{val.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
