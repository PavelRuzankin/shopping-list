import React from "react";
import { connect } from "react-redux";
import { changeControlValue } from "../store/actions/controlActions";

class Input extends React.Component {
  render() {
    const cls = ["Input"];
    if (!this.props.control.valid && this.props.control.touched) {
      cls.push("error");
    }
    const htmlFor = this.props.control.label + parseInt(Math.random() * 1000);
    return (
      <div className={cls.join(" ")}>
        <label htmlFor={htmlFor}>{this.props.control.label}</label>
        <input
          type={this.props.control.type || "text"}
          id={htmlFor}
          value={this.props.control.value}
          placeholder={this.props.control.placeholder}
          onChange={(event) =>
            this.props.changeControlHandler(
              event.target.value,
              this.props.control.name
            )
          }
        />
        <span>
          {!this.props.control.valid && this.props.control.touched
            ? this.props.control.errorMessage
            : null}
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeControlHandler: (value, controlName) =>
      dispatch(changeControlValue(value, controlName)),
  };
}

export default connect(null, mapDispatchToProps)(Input);
