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
import Method from "./method";
import MenuIdiom from "./menuIdiom";
import MaterialsReducer from "./materialsReducer";
//
//
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
  Method,
  Menu: MenuIdiom,
  materials: MaterialsReducer,
});
