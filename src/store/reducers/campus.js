/*==================================================
/src/store/reducers/campus.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import { FETCH_CAMPUS,EDIT_CAMPUS} from "../actions/actionTypes";  // Import Action Type
import * as at from "../actions/actionTypes";

// Define default Initial State
const initialState = {
  students: [],  // Empty students array
};

// REDUCER:
const campus = (state = initialState, action) => {  // Use "initialState" as default Initial State
  switch (action.type) {
    case at.FETCH_CAMPUS:
      return action.payload;
    default:
      return state;
  }
};

export default campus;