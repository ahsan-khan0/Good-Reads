import React, { useState } from "react";
// import xmljs from "xml-js";
// import { actionTypes } from "../redux/constants/action-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBooksOnClick } from "../redux/actions/bookAction";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ShowAllBooks = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.showsAllBooks.showsAll);
  console.log("SHOW ALL BOOOKS", state);
  const [page, setPage] = useState(1);
  const { search } = useParams();
  const [loading, setLoading] = useState(true);

  //   const state = useSelector((state) => state.firsTbooks.firstTboks);

  //   const fetchAllBooks = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://www.goodreads.com/search/index?key=FtRVHgmjzjpzKjCt3SUMw&q=${search.search}`
  //       );
  //       const xmlResult = xmljs.xml2js(data, { compact: true, spaces: 4 });
  //       //   console.log("xmlResult", xmlResult.GoodreadsResponse.search.results.work);
  //       const xmlData = xmlResult.GoodreadsResponse.search.results.work;
  //       dispatch({
  //         type: actionTypes.ALL_BOOKS,
  //         payload: xmlData,
  //       });
  //       return xmlData;

  //       console.log(xmlData);
  //     } catch (err) {
  //       console.log("Errr", err);
  //     }
  //   };

  useEffect(() => {
    dispatch(allBooksOnClick(search, page));
    setLoading(true);
  }, [search, page]);

  const handleScroll = () => {
    // console.log("height", document.documentElement.scrollHeight);
    // console.log("top:", document.documentElement.scrollTop);
    // console.log("window", window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [search, page]);

  return (
    <>
      {state ? (
        state.map((book) => {
          return <p> {book.best_book.title._text} </p>;
        })
      ) : (
        <></>
      )}
      {loading ? <Loader /> : <></>}
    </>
  );
};

export default ShowAllBooks;
