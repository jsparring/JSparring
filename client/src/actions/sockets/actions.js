import setUpSocket from "./setUpSocket";
import * as types from "./types";
import { sageMiddleware } from "../../store";

export const joinRoom = username => {
  return dispatch => {
    const socket = setUpSocket(dispatch, username);
  };
};
