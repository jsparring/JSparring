import * as types from "./battleActionTypes";

export const saveLeftCode = input => ({
  type: types.SAVE_LEFT_CODE,
  payload: input
});
