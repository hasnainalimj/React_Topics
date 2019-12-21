import React from "react";

class Lists extends React.Component {
  render() {
    const { data, popUp } = this.props;

    if (data) {
      return (
        <ul>
          {data.map(val => {
            return <li>{val}</li>;
          })}
        </ul>
      );
    } else {
      return <h1 onClick={popUp}>No Lists Found!</h1>;
    }
  }
}

export default Lists;
