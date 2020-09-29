import cars from "../../components/cars"

export const SET_CARS = 'SET_CARS';

export function getCars() {
    return dispatch => { 
        dispatch(setCars(cars))}
}

  export function setCars(cars) {
    return {
      type: SET_CARS,
      cars,
    };
  }