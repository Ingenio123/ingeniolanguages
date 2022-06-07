import { CREATE_ONE_iTEMEN_TEMARY } from "../actions/types";
import axios from "axios";
import Url from "../../components/Urls";
// =============== Create One Item Temary ==================== //
export const CreateOneItemTemary = (data) => async (dispatch) => {
  console.log(data.payload);
  //   let contentItem = [
  //     {
  //       item1: {},
  //       item2: {},
  //       item3: {},
  //     },
  //   ];
  //   if (data.payload.data.item2 === "" || data.payload.data.item3 === "") {
  //     contentItem.item1 = data.payload.data.item1;
  //   }
  //   console.log(contentItem);
  const dataObject = {
    name_level: data.payload.Level,
    content: data.payload.data.item1,
    // sublevel: [
    //   {
    //     // name_sublevel: data.payload.subLevel,
    //     content: [
    //       { item:  },
    //       // { item: data.payload.data.item2 },
    //       // { item: data.payload.data.item3 },
    //     ],
    //     // contnet: contentItem,
    //     // exam: data.payload.data.Exam,
    //   },
    // ],
  };
  console.log(dataObject);
  const res = await axios.post(`${Url.url}/temary/createOne`, dataObject);
  console.log(res);
  dispatch({
    type: CREATE_ONE_iTEMEN_TEMARY,
    payload: data.payload,
  });
};

export const AddItemstoContent = (data) => (dispatch) => {
  // const res = await axios.post('http://localhost:4000/temary/addItemContent',datos);
  // console.log(res.data)
};
