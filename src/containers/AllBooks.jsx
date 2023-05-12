import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBooksOnClick, fetchTwentyBooks } from "../redux/actions/bookAction";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";

const AllBooks = (search) => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const state = useSelector((state) => state.firsTbooks.firstTboks);
  const user = useSelector((u) => u.allUsers.users);
  console.log("STATE", state);
  const s = search.search;

  // const fetchBooks = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://www.goodreads.com/search/index?key=FtRVHgmjzjpzKjCt3SUMw&q=${s}`
  //     );
  //     const xmlResult = xmljs.xml2js(data, { compact: true, spaces: 4 });
  //     console.log("xmlResult", xmlResult.GoodreadsResponse.search.results.work);
  //     const xmlData = xmlResult.GoodreadsResponse.search.results.work;
  //     dispatch({
  //       type: actionTypes.ALL_BOOKS,
  //       payload: xmlData,
  //     });
  //     return xmlData;

  //     // console.log(response.data);
  //   } catch (err) {
  //     console.log("Errr", err);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchTwentyBooks(search));
  }, [search]);

  // const handleLinkClick = (e) => {
  //   if (s === "") {
  //     alert("Please enter a search query");
  //   }
  // };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>{" "}
      {/* {s ? (
        <Link to={`/ShowAllBooks/${s}`}>
          <Button variant="contained">ALL BOOKS</Button>
        </Link>
      ) : (
        <Button
          variant="contained"
          onClick={() => alert("Please enter a search query")}
        >
          ALL BOOKS
        </Button>
      )} */}
      {s && (
        <Link to={`/ShowAllBooks/${s}`}>
          <Button variant="contained">ALL BOOKS</Button>
        </Link>
      )}
      {state ? (
        state.map((book) => {
          return (
            <Link
              to={`/SingleBook/${book.best_book.id._text}`}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <p style={{ color: "black" }}>{book.best_book.title._text}</p>
            </Link>
          );
        })
      ) : (
        <p></p>
      )}
    </>
  );
};

export default AllBooks;
