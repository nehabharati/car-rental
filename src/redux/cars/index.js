import { SET_CARS } from './actions';

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_CARS:
        return action.cars;
      default:
        return state;
    }
  };