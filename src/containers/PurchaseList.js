import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../UI/Input";
import List from "../components/List";
import { addToPreList } from "../store/actions/actionLists";

class PurchaseList extends React.Component {
  render() {
    return (
      <div className={"PurchaseList"}>
        <form onSubmit={(e) => e.preventDefault()}>
          {Object.keys(this.props.controls.formControls).map(
            (control, index) => {
              return (
                <Input
                  key={index}
                  control={this.props.controls.formControls[control]}
                />
              );
            }
          )}
          <button
            disabled={!this.props.controls.formsIsValid}
            onClick={() => {
              this.props.addToPreList(
                this.props.controls.formControls.nameControls.value,
                +this.props.controls.formControls.countControls.value
              );
            }}
          >
            <FontAwesomeIcon icon={"cart-plus"} size="3x" color="white" />
          </button>
        </form>

        <div className={"Lists"}>
          <List
            nameList={"preList"}
            relocate={true}
            list={this.props.list.preList}
            title={"Купить:"}
          />
          <List
            nameList={"compList"}
            relocate={false}
            list={this.props.list.compList}
            title={"Куплено:"}
          />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToPreList: (name, count) => {
      dispatch(addToPreList(name, count));
    },
  };
}

function mapStateToProps(state) {
  return {
    list: state.lists,
    controls: state.controls,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList);
