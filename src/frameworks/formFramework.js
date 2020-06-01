export function getControls(config, validation) {
  return {
    ...config,
    touched: false,
    valid: false,
    value: "",
    validation,
  };
}

export function validForms(value, validation) {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (validation.minCount) {
    isValid = +value !== 0 && isValid;
  }

  return isValid;
}
