import {
  ITEM_PACKAGE,
  LESSON_MONTH,
  CALCULATE_PRICES_ITEMS,
  GROUP_CLASS_CANT_PERSONS,
  GROUP_TOW_CLASS_CANT_PERSONS,
  GROUP_MORE_OF_TWO_PERSONS,
  RESET_PRICES,
  CHANGE_LESSON,
  CHANGE_TIME,
  LESSON_MONTHS,
} from "../actions/types";

const initialState = {
  timeLesson: {},
  lessonMonth: {},
  calculatePrices: 0,
  calculatePricesIndividual: 0,
  calculatePricesGroup: 1,
  cantPersons: 1,
  modificacionSelect: false,
  numberMonts: 0,
  addCart: false,
  optionClass: 1, // optioncClass --->  1.- Individual  ##  2.- Group
  pricesGroup: 0,
  valorDescuento: 1,
  groupActive: false,
  individualActive: true,
};

export default function CreateOnePackage(state = initialState, action) {
  switch (action.type) {
    case ITEM_PACKAGE:
      return {
        ...state,
        timeLesson: action.payload,
        modificacionSelect: true,
      };
    case LESSON_MONTH:
      return {
        ...state,
        lessonMonth: action.payload,
        modificacionSelect: true,
      };
    case CALCULATE_PRICES_ITEMS:
      let prices = 0;

      switch (state.timeLesson.value) {
        case "30":
          prices = 15;
          break;
        case "45":
          prices = 22.5;
          break;
        case "60":
          prices = 30;
          break;
        default:
          prices = 0;
          break;
      }
      return {
        ...state,
        calculatePricesIndividual: prices * state.lessonMonth.value,
        calculatePrices: prices * state.lessonMonth.value,
        modificacionSelect: true,
      };
    case "CALCULATE_PRICES_ONE":
      let prices2 = 0;
      switch (state.timeLesson.value) {
        case "30":
          prices2 = 16;
          break;
        case "45":
          prices2 = 24;
          break;
        case "60":
          prices2 = 32;
          break;
        default:
          prices2 = 0;
          break;
      }
      return {
        ...state,
        calculatePricesIndividual: prices2 * state.lessonMonth.value,
        calculatePrices: prices2 * state.lessonMonth.value,
        modificacionSelect: true,
      };
    case GROUP_CLASS_CANT_PERSONS:
      return {
        ...state,
        valuePersons: action.payload.valor,
        // calculatePrices :  state.calculatePrices * 0.75  + state.calculatePrices
      };
    case GROUP_TOW_CLASS_CANT_PERSONS:
      const res = state.calculatePricesIndividual * 0.75;

      return {
        ...state,
        calculatePrices: state.calculatePricesIndividual + res,
        cantPersons: 2,
        modificacionSelect: false,
        calculatePricesGroup: state.calculatePricesIndividual + res,
      };

    case GROUP_MORE_OF_TWO_PERSONS:
      const resultado = state.calculatePricesIndividual * 0.5;
      const calculos = action.payload.valor - 1;
      const total = resultado * calculos;

      return {
        ...state,
        cantPersons: action.payload.valor,
        calculatePrices: state.calculatePricesIndividual + total,
        calculatePricesGroup: state.calculatePricesIndividual + total,
        modificacionSelect: false,
      };
    case "PRICES_GROUP":
      return {
        ...state,
        pricesGroup: state.calculatePrices,
      };

    case RESET_PRICES:
      return {
        ...state,
        calculatePricesIndividual: 0,
        calculatePrices: 0,
        numberMonts: 1,
        calculatePricesGroup: 0,
        timeLesson: {},
        groupActive: false,
        individualActive: true,
        cantPersons: 1,
      };
    case CHANGE_TIME:
      return {
        ...state,
        calculatePrices: 0,
      };
    case CHANGE_LESSON:
      return {
        ...state,
        calculatePrices: 0,
      };
    case "ADD_CART":
      return {
        ...state,
        addCart: true,
      };
    case "REMOVE_ADD_CART":
      return {
        ...state,
        addCart: false,
      };
    case LESSON_MONTHS:
      return {
        ...state,
        calculatePrices: state.pricesGroup * state.numberMonts,
      };
    case "NUMBER_MONTHS":
      return {
        ...state,
        numberMonts: action.payload,
        calculatePrices: state.calculatePricesGroup * action.payload,
      };
    case "NUMBER_MONTHS_INDIVIDUAL":
      return {
        ...state,
        numberMonts: action.payload,
        calculatePrices: state.calculatePricesIndividual * action.payload,
      };
    case "NUMBER_MONTHS_GROUP":
      return {
        ...state,
        calculatePrices: state.calculatePricesGroup * action.payload,
        numberMonts: action.payload,
      };
    case "REMOVE_MONTHS":
      return {
        ...state,
        numberMonts: 1,
      };
    case "GROUP_ACTIVE":
      return {
        ...state,
        groupActive: action.payload,
        individualActive: false,
      };
    case "INIDIVIDUAL_ACTIVE":
      return {
        ...state,
        individualActive: action.payload,
        groupActive: false,
      };
    case "GROUP_CLASS":
      return {
        ...state,
        optionClass: action.payload,
      };
    case "ValorDesc":
      return {
        ...state,
        valorDescuento: action.payload,
      };
    case "REMOVE_OPTION_CLASS_ONE":
      return {
        ...state,
      };
    default:
      return state;
  }
}
