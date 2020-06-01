import { getControls } from "../../frameworks/formFramework";
import { MAP_STATE, RESTART_VALUES } from "../actions/actionTypes";

function getRandomName() {
  const names = [
    "Молоко",
    "Печеньки",
    "Рыбка",
    "Печень антилопы",
    "Хлеб",
    "Что-нибудь к чаю",
    "Кетчуп",
    "Сосисочки",
    "Сыр",
    "Картошка",
  ];
  return names[parseInt(Math.random() * names.length)];
}

const initialState = {
  formsIsValid: false,
  formControls: {
    nameControls: getControls(
      {
        name: "nameControls",
        label: "Купить",
        placeholder: "Например: " + getRandomName(),
        errorMessage: "Не забудте ввести назване",
        type: "text",
      },
      { required: true }
    ),
    countControls: getControls(
      {
        name: "countControls",
        label: "В колличестве",
        placeholder: parseInt(Math.random() * 10),
        errorMessage: "Не забудте ввести количество",
        type: "number",
      },
      { required: true, minCount: 1 }
    ),
  },
};

export default function controlReducer(state = initialState, action) {
  switch (action.type) {
    case RESTART_VALUES:
      return {
        formsIsValid: false,
        formControls: {
          nameControls: getControls(
            {
              name: "nameControls",
              label: "Купить",
              placeholder: "Например: " + getRandomName(),
              errorMessage: "Не забудте ввести назване",
              type: "text",
            },
            { required: true }
          ),
          countControls: getControls(
            {
              name: "countControls",
              label: "В колличестве",
              placeholder: parseInt(Math.random() * 10),
              errorMessage: "Не забудте ввести количество",
              type: "number",
            },
            { required: true, minCount: 1 }
          ),
        },
      };
    case MAP_STATE:
      return {
        ...state,
        formControls: action.formControls,
        formsIsValid: action.formsIsValid,
      };

    default:
      return state;
  }
}
