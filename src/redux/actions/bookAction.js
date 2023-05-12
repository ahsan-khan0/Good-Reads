import axios from "axios";
import booksApi from "../../apis/booksApi";
import { actionTypes } from "../constants/action-types";
import xmljs from "xml-js";

export const fetchTwentyBooks = (search) => {
  return async (dispatch) => {
    const { data } = await booksApi.get(
      `/search/index?key=FtRVHgmjzjpzKjCt3SUMw&q=${search.search}`
    );
    const xmlResult = xmljs.xml2js(data, { compact: true, spaces: 4 });
    // console.log("xmlResult", xmlResult.GoodreadsResponse.search.results.work);
    const xmlData = xmlResult.GoodreadsResponse.search.results.work;

    dispatch({ type: actionTypes.ALL_BOOKS, payload: xmlData });
  };
};

export const allBooksOnClick = (search, page) => {
  console.log("search", search);
  return async (dispatch, getState) => {
    const { showsAllBooks } = getState();
    const prevBooks = showsAllBooks.showsAll || [];

    const { data } = await booksApi.get(
      `search/index?key=FtRVHgmjzjpzKjCt3SUMw&q=${search}&page=${page}`
      //         `https://www.goodreads.com/search/index?key=FtRVHgmjzjpzKjCt3SUMw&q=${search.search}`

      // https://www.goodreads.com/search/index?key=FtRVHgmjzjpzKjCt3SUMw&q=${p}&page=${page}
    );
    // console.log("page", page);
    const xmlAllData = xmljs.xml2js(data, { compact: true, spaces: 4 });
    // console.log("xmlAllData", xmlAllData.GoodreadsResponse.search.results.work);
    const xmlAllResult = xmlAllData.GoodreadsResponse.search.results.work;
    const newBooks = prevBooks.concat(xmlAllResult);
    dispatch({ type: actionTypes.SHOW_ALL_BOOKS, payload: newBooks });
  };
};

export const singleBookOnClick = (bookId) => {
  console.log("searching sinngle bookonclick", bookId);
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://www.goodreads.com/book/show?key=FtRVHgmjzjpzKjCt3SUMw&id=${bookId}`
    );
    const xmlSingleData = xmljs.xml2js(data, { compact: true, spaces: 4 });
    console.log("xmlSingleData", xmlSingleData.GoodreadsResponse.book);
    const xmlSingleResult = xmlSingleData.GoodreadsResponse.book;
    dispatch({ type: actionTypes.SHOW_SINGLE_BOOK, payload: xmlSingleResult });
  };
};
