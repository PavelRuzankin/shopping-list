import React from "react";
import { connect } from "react-redux";
import Product from "./Product";

class List extends React.Component {
  render() {
    return (
      <div className={"List"}>
        <h1>{this.props.title}</h1>
        {this.props.list.map((elem, index) => {
          return (
            <Product
              key={index}
              nameList={this.props.nameList}
              relocate={this.props.relocate}
              name={elem.name}
              count={elem.count}
              number={index}
            />
          );
        })}
      </div>
    );
  }
}

export default List;
