import React from "react";

class Header extends React.Component {
  render() {
    const { title, color = "red" } = this.props;
    return (
      <div style={{ width: "100%", height: 30, backgroundColor: color }}>
        <p>{title}</p>
      </div>
    );
  }
}

export default Header;
