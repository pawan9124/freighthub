import {
  GET_ALL_SHIPMENT_DETAILS,
  GET_SINGLE_SHIPMENT_DETAILS
} from "../actions/types.js";

const initialState = {
  allShipment: [],
  singleShipment: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHIPMENT_DETAILS:
      return {
        ...state,
        allShipment: action.payload,
        ...state.allShipment
      };
    case GET_SINGLE_SHIPMENT_DETAILS:
      return {
        ...state,
        singleShipment: action.payload
      };
    default:
      return state;
  }
}
