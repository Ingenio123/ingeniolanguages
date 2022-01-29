import { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateOneItems,
  CalculatePricesOne,
} from "../../redux/actions/ItemOnePackageAction";

export default function Optiontime({
  GroupLessons,
  valor,
  InputMonthtow,
  Time,
  setTime,
}) {
  // const  = useSelector(state => state.)
  const { lessonMonth } = useSelector((state) => state.itemPackage);
  const options = [
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "60 minutes" },
  ];

  const dispatch = useDispatch();

  const handleItems = (item) => {
    console.log(lessonMonth);

    if (lessonMonth.value === 1) {
      dispatch(CreateOneItems(item));
      return dispatch(CalculatePricesOne(item));
    }
    dispatch(CreateOneItems(item));

    dispatch({
      type: "CALCULATE_PRICES_ITEMS",
    });
    const inputMonth = InputMonthtow.current;
    inputMonth.value = 1;

    setTime(item);
    valor();
  };

  return (
    <div>
      <Select
        placeholder="Select"
        value={Time}
        options={options}
        onChange={handleItems}
      />
    </div>
  );
}
