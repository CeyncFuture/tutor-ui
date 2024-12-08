import {combineReducers} from "redux";
import user from './user';
import common from "./common";
import tutor from "./tutor";
import question from "./question";
import instructor from "./instructor";

export default combineReducers({
  user,
  common,
  tutor,
  question,
  instructor
});
