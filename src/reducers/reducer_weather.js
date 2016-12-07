import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action received: ', action);

  switch (action.type) {
  case FETCH_WEATHER:
    // concat doesn't change the existing array, but creates a new
    // one that contains all old and the new stuff
    //return state.concat([action.payload.data]);
    // A more ES6 way to do it:
    return [ action.payload.data, ...state ];
  }

  return state;
}
