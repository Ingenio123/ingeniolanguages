import { PRICE_LESSON } from "../actions/types";
export default function cases(state = { items: [] }, action) {
  switch (action.type) {
    case PRICE_LESSON:
      const item = action.payload; //english
      const existItem = state.items.find((x) => x.id === item.id);
      const kids = item.kids;
      //   kids => false   => !kids = true ;  kids = true  => !kids = false
      if (existItem) {
        return {
          ...state,
          idiom: "si existe idioma",
          items: state.items.map((x) =>
            x.idiom === existItem.idiom ? item : x
          ),
        };
      } else {
        return {
          ...state,
          idiom: "no existe el idiom",
          items: [
            ...state.items,
            {
              id: item.id,
              lesson: item.lesson,
              idiom: item.idiom,
              time: item.time,
              price: item.price,
              months: item.months,
              kids: item.kids,
              img: item.img,
            },
          ],
        };
      }

    case "Delete_Package":
      const data = action.payload; // => {idiom: '', kids: false }

      return {
        ...state,
        items: state.items.filter((x) => {
          return x.id !== data.id;
        }),
      };
    default:
      return state;
  }
}
