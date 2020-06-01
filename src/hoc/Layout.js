import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
