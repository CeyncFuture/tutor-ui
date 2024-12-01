import {combineReducers} from "redux";
import user from './user';
import common from "./common";
import admin from "./admin";

export default combineReducers({
  user,
  common,
  admin
});
