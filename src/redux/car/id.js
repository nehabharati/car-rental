import { SET_CURRENT_CAR } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CAR:
      return action.id + 1;
    default:
      return state;
  }
};