import axios from "axios";
import { url } from "../Urls";
async function getIpClient() {
  const res = await axios.get("https://api.ipify.org");
  return res.data;
}

export const SendDataPayClient = async (
  shippingData,
  Cobrar,
  SumaPrices,
  items,
  id,
  email,
  phone
) => {
  const {
    City,
    Country,
    PostCode,
    firstName,
    lastName,
    numberCedula,
    secondName,
  } = shippingData;
  const ipClient = await getIpClient();
  const data = {
    City,
    Country,
    PostCode,
    firstName,
    lastName,
    numberCedula,
    numberCellPhone: phone,
    secondName,
    ipClient,
    Cobrar,
    SumaPrices,
    items,
    id,
    email,
  };
  // console.log(url);
  const EndPoint = url + "/payIngenioLanguages";
  // const res = await  axios.post('https://www.ingenioapi.com/payIngenioLanguages',data)
  const res = await axios.post(EndPoint, data);
  return res.data;
};
