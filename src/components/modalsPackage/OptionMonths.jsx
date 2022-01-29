import { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { CreateOneMonthLesson } from "../../redux/actions/ItemOnePackageAction";
import { CalculatePricesOne } from "../../redux/actions/ItemOnePackageAction";
import styled from "styled-components";

export default function OptionsValues({ GroupLessons, valor }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.itemPackage.numberMonts);
  const [Values, setValues] = useState(null);
  const options = [
    { value: 1, label: "1 Month" },
    { value: 2, label: "2 Months " },
    { value: 3, label: "3 Months " },
    { value: 4, label: "4 Months " },
    { value: 5, label: "5 Months " },
    { value: 6, label: "6 Months " },
    { value: 7, label: "7 Months " },
    { value: 8, label: "8 Months " },
    { value: 9, label: "9 Months " },
    { value: 10, label: "10 Months " },
    { value: 11, label: "11 Months " },
    { value: 12, label: "12 Months " },
  ];

  //   const [Items, setItems] = useState(options[0]);

  const handleItems = (item) => {
    console.log(item);
    // const { value } = item;
    dispatch({
      type: "NUMBER_MONTHS_INDIVIDUAL",
      payload: item.value,
    });
    console.log("########### VALUE ############ ====> " + value);
    setValues(item);
    valor();

    // #########################################
    // if (item.value === 1) {
    //   dispatch(CreateOneMonthLesson(item));
    //   return dispatch(CalculatePricesOne(item));
    // }

    // dispatch({
    //   type: "REMOVE_OPTION_CLASS_ONE",
    // });

    // dispatch(CreateOneMonthLesson(item));

    // dispatch({
    //   type: "CALCULATE_PRICES_ITEMS",
    // });
    //##################################################
  };

  return (
    <SelectOption
      defaultValue={Values}
      options={options}
      onChange={handleItems}
    />
  );
}

const SelectOption = styled(Select)`
  width: 40%;
`;
