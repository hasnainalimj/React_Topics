import React from "react";

class Footer extends React.Component {
  render() {
    const { title = "This is Footer" } = this.props;
    return (
      <div
        style={{
          width: "100%",
          height: 30,
          marginTop: 260,
          backgroundColor: "blue"
        }}
      >
        {title}
      </div>
    );
  }
}

export default Footer;
