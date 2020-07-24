import { getCurrentISSLocation } from '../services/issAPI';

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';

const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION,
});

//representa o evento de receber a location
const receiveISSLocationSuccess = ({ iss_position: { latitude, longitude }}) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  // a location tem o que de informaçao? (latitude e longitude)
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude),
});

const receiveISSLocationFailure = (error) => ({
  type: RECEIVE_ISS_LOCATION_FAILURE,
  error,
});

export function fetchISSLocation() { //essa funçao é interceptada pelo thunk
  return (dispatch) => { // o pacote thunk disponibiliza o dispatch
    dispatch(requestISSLocation()); // envia essa açao para o store

    return getCurrentISSLocation()
      .then(
        (location) => dispatch(receiveISSLocationSuccess(location)),
        (error) => dispatch(receiveISSLocationFailure(error.message)),
      )
  }
}




