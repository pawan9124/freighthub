import { combineReducers } from "redux";
import fetchShipmentReducer from "./shipmentReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  shipment: fetchShipmentReducer,
  errors: errorReducer
});
