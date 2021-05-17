import { ADD_FLOWER, REMOVE_FLOWER, SET_FLOWERS } from "../actions/types";

const initialState = {
  flowers: {},
  price: 0,
};

const prices = {
  rose: 5,
  plumeria: 5,
  lily: 5,
  gerbera: 5,
  chamomile: 5,
  orchids: 5,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_FLOWER:
      newState.flowers[action.flower]++;
      newState.price += prices[action.flower];
      break;
    case REMOVE_FLOWER:
      newState.flowers[action.flower]--;
      newState.price -= prices[action.flower];
      break;
    case SET_FLOWERS:
      newState.flowers = action.data.flowers;
      newState.price = action.data.price;
      break;

    default:
      break;
  }

  return newState;
};

export default builder;
