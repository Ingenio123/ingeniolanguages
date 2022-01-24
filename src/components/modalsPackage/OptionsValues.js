import { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { CreateOneMonthLesson } from "../../redux/actions/ItemOnePackageAction";
import { CalculatePricesOne } from "../../redux/actions/ItemOnePackageAction";

export default function OptionsValues({ GroupLessons, valor }) {
  const dispatch = useDispatch();

  const options = [
    { value: "1", label: "1 lesson" },
    { value: "4", label: "4 lessons " },
    { value: "8", label: "8 lessons " },
    { value: "12", label: "12 lessons " },
    { value: "16", label: "16 lessons " },
    { value: "20", label: "20 lessons " },
  ];

  //   const [Items, setItems] = useState(options[0]);

  const handleItems = (item) => {
    // setItems(item);
    console.log(item);
    if (item.value === 1) {
      dispatch(CreateOneMonthLesson(item));
      return dispatch(CalculatePricesOne(item));
    }

    dispatch({
      type: "REMOVE_OPTION_CLASS_ONE",
    });

    dispatch(CreateOneMonthLesson(item));

    dispatch({
      type: "CALCULATE_PRICES_ITEMS",
    });

    valor();
  };

  return (
    <div>
      <Select options={options} onChange={handleItems} />
    </div>
  );
}
