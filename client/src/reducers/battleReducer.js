import * as types from "../actions/battleActionTypes";
import { fromJS, toJS } from "immutable";

const initialState = fromJS({
  leftCode: ""
});

function battleReducer(state = initialState, action) {
  let tempState;
  let leftCode;

  switch (action.type) {
    case types.SAVE_LEFT_CODE:
      tempState = state.toJS();
      leftCode = action.payload;
      console.log("===in reducer==", leftCode);

      return fromJS({
        ...tempState,
        leftCode
      });

    default:
      return fromJS(state);
  }
}

export default battleReducer;
