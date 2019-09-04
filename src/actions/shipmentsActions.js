import Axios from "axios";
import {
  GET_ALL_SHIPMENT_DETAILS,
  GET_ERRORS,
  GET_SINGLE_SHIPMENT_DETAILS,
  POST_SHIPMENT_NAME
} from "./types";

//Fetching the localhost details from the localhost
const headers = {
  "Content-Type": "application/json"
};

export const fetchAllShipment = () => dispatch => {
  Axios.get(`http://localhost:3001/shipments`)
    .then(res => {
      dispatch({
        type: GET_ALL_SHIPMENT_DETAILS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const fetchSingleShipment = id => dispatch => {
  Axios.get(`http://localhost:3001/shipments/${id}`)
    .then(res => {
      dispatch({
        type: GET_SINGLE_SHIPMENT_DETAILS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const postShipmentName = data => dispatch => {
  Axios.put(`http://localhost:3001/shipments/${data.id}`, data, {
    headers: headers
  })
    .then(res => {
      dispatch({
        type: POST_SHIPMENT_NAME,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
