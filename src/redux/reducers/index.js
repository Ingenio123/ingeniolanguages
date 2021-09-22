import { combineReducers } from "redux";
import authReducer from "./authReducer";
import packageReducer from "./packageReducer";
import { shippingData, CardData } from "./CheckOutReducer";
import temary from "./temaryReducer";
import itemPackage from "./ItemPackageReducer";
import stepProgress from "./StepProgress";
export default combineReducers({
  auth: authReducer,
  package: packageReducer,
  Shipping: shippingData,
  cardData: CardData,
  temary,
  itemPackage,
  stepProgress,
});
