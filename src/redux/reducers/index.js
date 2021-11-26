import { combineReducers } from "redux";
import authReducer from "./authReducer";
import packageReducer from "./packageReducer";
import { shippingData, CardData } from "./CheckOutReducer";
import temary from "./temaryReducer";
import itemPackage from "./ItemPackageReducer";
import stepProgress from "./StepProgress";
import UserDataRedux from "./UserData";
import Proced_to_pay from "./procedTopayment";
import GetIdiomReducer from "./getIdiomReducer";
export default combineReducers({
  auth: authReducer,
  package: packageReducer,
  Shipping: shippingData,
  cardData: CardData,
  UerData: UserDataRedux,
  temary,
  itemPackage,
  stepProgress,
  ProcedToPay: Proced_to_pay,
  GetIdiomReducer,
});
