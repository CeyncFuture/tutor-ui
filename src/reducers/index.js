import {combineReducers} from "redux";
import user from './user';
import common from "./common";
import tutor from "./tutor";
import question from "./question";

export default combineReducers({
  user,
  common,
  tutor,
  question
});