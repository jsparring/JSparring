import { UPDATE_USERNAME, UPDATE_PASSWORD } from "./loginActionTypes";

export const changeUsernameInput = inputUsername => ({
  type: UPDATE_USERNAME,
  payload: inputUsername
});

export const changePasswordInput = inputPassword => ({
  type: UPDATE_PASSWORD,
  payload: inputPassword
});