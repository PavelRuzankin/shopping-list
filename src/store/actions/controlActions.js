import { validForms } from "../../frameworks/formFramework";
import { MAP_STATE } from "./actionTypes";

export function changeControlValue(value, nameControl) {
  return (dispatch, getState) => {
    const formControls = getState().controls.formControls;
    const control = { ...formControls[nameControl] };

    control.value = value;
    control.touched = true;
    control.valid = validForms(control.value, control.validation);

    formControls[nameControl] = control;

    let formsIsValid = getState().controls.formsIsValid;

    formsIsValid =
      formControls.nameControls.valid && formControls.countControls.valid;

    return dispatch({ type: MAP_STATE, formControls, formsIsValid });
  };
}
