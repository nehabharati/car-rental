import { API_URL } from '../../constants';

export const SET_CURRENT_CAR = 'SET_CURRENT_CAR';
export const SET_CAR_PROFILE = 'SET_CAR_PROFILE';

export function setCurrentCar(id) {
    return {
      type: SET_CURRENT_CAR,
      id,
    };
  }
  
  export function setCarProfile(profile) {
    return {
      type: SET_CAR_PROFILE,
      profile
    };
  }
 

  export function getCarProfile(id) {
    return dispatch =>
      fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(profile => {
          dispatch(setCarProfile(profile));
        });
  }