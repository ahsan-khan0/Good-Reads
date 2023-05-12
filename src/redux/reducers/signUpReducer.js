import { actionTypes } from "../constants/action-types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "users", // Use the "users" key for storing the array of users.
  storage,
};

const intialState = {
  users: [],
  isLogIn: false,
};

export const signupReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_UP:
      const updatedUsers = Array.isArray(state.users)
        ? [...state.users, payload]
        : [payload];
      return { ...state, users: updatedUsers };
    case actionTypes.SIGN_IN:
      return { ...state, isLogIn: true };

    case actionTypes.LOG_OUT:
      return { ...state, isLogIn: false };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, signupReducer);

export default persistedReducer;

const intialStaate = {
  Books: [],
  single: null,
};
export const bookReducer = (state = intialStaate, { type, payload }) => {
  switch (type) {
    case actionTypes.ALL_BOOKS:
      return { ...state, firstTboks: payload };
    default:
      return state;
  }
};

export const showAllBookReducer = (state = intialStaate, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_ALL_BOOKS:
      return { ...state, showsAll: payload };
    default:
      return state;
  }
};

export const showSingleBookReducer = (
  state = intialStaate,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.SHOW_SINGLE_BOOK:
      return { ...state, single: payload };
    default:
      return state;
  }
};
