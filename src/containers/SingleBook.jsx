import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleBookOnClick } from "../redux/actions/bookAction";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const SingleBook = () => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.showSingleBook.single);
  console.log("singleState", book);
  const { bookId } = useParams();
  console.log("bookId:", bookId);
  useEffect(() => {
    dispatch(singleBookOnClick(bookId));
  }, [bookId]);
  return (
    <>
      {/* <p>title</p> */}
      <br />
      {book === null ? (
        <Loader />
      ) : book.title._cdata ? (
        <>
          <br />
          {book.title._cdata}
          <br />
          <img src={book.image_url._text} />
          <br />
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            <Rating
              name="half-rating-read"
              defaultValue={book.average_rating._text}
              precision={0.5}
              readOnly
            />
          </Stack>
        </>
      ) : (
        <>
          {book.title._text}
          <br />
          <img src={book.image_url._text} />
          <br />
          {book.average_rating._text}
        </>
      )}

      {/* {book === null ? ((<img />), book.average_rating._text) : <></>} */}
    </>
  );
};

export default SingleBook;
