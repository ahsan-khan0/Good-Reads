import { combineReducers } from "redux";
import { signupReducer } from "./signUpReducer";
import { bookReducer } from "./signUpReducer";
import { showAllBookReducer } from "./signUpReducer";
import { showSingleBookReducer } from "./signUpReducer";

const reducers = combineReducers({
  allUsers: signupReducer,
  firsTbooks: bookReducer,
  showsAllBooks: showAllBookReducer,
  showSingleBook: showSingleBookReducer,
});

export default reducers;
