const initialState = {
    flowers: {
        rose: 10,
        plumeria: 10,
        lily: 10,
        gerbera: 10,
        chamomile: 10,
        orchids: 10,
    },
    price: 200,
};

const prices = {
        rose: 5,
        plumeria: 5,
        lily: 5,
        gerbera: 5,
        chamomile: 5,
        orchids: 5,
};

const builderReducer = (state = initialState, action) => {
      const newState = { ...state };

      switch (action.type) {
       case "ADD_VIEWS":
          newState.flowers[action.flower]++;
          newState.price += prices[action.flower];
        break;
        case "REMOVE_VIEWS":
          newState.flowers[action.flower]--;
          newState.price -= prices[action.flower];
          break;

          default:
          break;
      }

    return newState;
}

export default builderReducer;