import axios from "axios";
import { ADD_FLOWER, REMOVE_FLOWER, SET_FLOWERS } from "./types";

export const add = (flower) => ({
  type: ADD_FLOWER,
  flower: flower
});

export const remove = (flower) => ({
  type: REMOVE_FLOWER,
  flower: flower
});

export const set = (data) => ({
  type: SET_FLOWERS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('/default.json')
    .then(response => dispatch(set(response.data)));
}