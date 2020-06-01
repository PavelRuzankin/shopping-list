import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { relocateProduct, deleteProduct } from "../store/actions/actionLists";

const Product = (props) => {
  return (
    <div className={"Product"}>
      <h2>
        {props.number + 1}. {props.name}
      </h2>
      <div className={"buttons"}>
        <h2>{props.count} шт.</h2>
        {props.relocate ? (
          <button onClick={() => props.relocateProduct(props.number)}>
            <FontAwesomeIcon icon="check-circle" className={"icon"} />
          </button>
        ) : null}
        <button
          onClick={() => props.deleteProduct(props.nameList, props.number)}
        >
          <FontAwesomeIcon icon="times-circle" className={"icon"} />
        </button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    relocateProduct: (id) => dispatch(relocateProduct(id)),
    deleteProduct: (nameList, id) => dispatch(deleteProduct(nameList, id)),
  };
}

export default connect(null, mapDispatchToProps)(Product);
