import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer
          className="footer"
          style={{ marginLeft: "40%", position: "flex" }}
        >
          <span className="text-muted">
            All Rights Reserved 2022 @TeamIAGI2
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
