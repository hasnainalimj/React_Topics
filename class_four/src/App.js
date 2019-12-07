import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemName : "",
      itemLists : ['Shan'],
      bool : false
    }
    // console.log("this" , this);
    // this.sayHi = this.sayHi.bind(this);
  }

  updateText = (e) => {
    this.setState({
      itemName : e.currentTarget.value
    })
  }

  sayHi = () => {
    console.log("this is say hi" , this);
  }

  sayBye(){
    console.log("bye this" , this);
  }


  addItem = () => {
    const {itemName , itemLists } = this.state;
    let item = itemName;
    let temp = itemLists;

    temp.push(item);

    this.setState({
      itemLists : temp,
      itemName : ""
    })
  }

  render() {
    const {itemLists , itemName , bool } = this.state;
    
    // var obj = {
    //   name : "Ali",
    //   age : 20
    //   }
    //   const {name , age} = obj;

    // var ar = [1 ,2 ,3, 4];
    // const [n1 , n2 , n3 , n4] = ar
    
    return (
      <div className="App">
        {/* <button onClick={this.sayHi}>Say Hi</button>
        <button onClick={this.sayBye.bind(this)}>Say Bye</button> */}
        {/* {this.sayHi} */}

        <input type="text" placeholder="Enter your item....." value={itemName} onChange={(e) => this.updateText(e)}/>
        <button onClick={this.addItem}>Add Item</button>

        {itemLists.map(val => {
        return <p>{val}</p>
        })}
      </div>
    );
  }
}

export default App;
