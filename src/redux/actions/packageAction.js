import { PRICE_LESSON } from "./types";

/**
 *
 * @param {*} price
 * @param {*} idiom
 * @param {*} lesson
 * @param {*} time
 * @param {*} months
 * @param {true | false } kids
 * @param {*} id
 * @param {string} cantidad_de_personas
 * @returns dispatch
 */

export const Select_Package =
  (price, idiom, lesson, time, months, kids, id, cantPersons, img) =>
  (dispatch) => {
    if (!months) months = 1;
    console.log(cantPersons);
    return dispatch({
      type: PRICE_LESSON,
      payload: {
        lesson,
        idiom,
        time,
        price,
        months,
        kids,
        id,
        cantPersons,
        img,
      },
    });
  };

export const Delete_Package = (id) => (dispatch) => {
  return dispatch({
    type: "Delete_Package",
    payload: { id },
  });
};

export const Months_lesson = (data, options) => (dispatch) => {
  if (data.value > 0 && data.value <= 12) {
    if (options === 2) {
      dispatch({
        type: "NUMBER_MONTHS",
        payload: data.value,
      });
      return;
    }

    if (options === 1) {
      dispatch({
        type: "NUMBER_MONTHS_INDIVIDUAL",
        payload: data.value,
      });
      return;
    }
  }
};
