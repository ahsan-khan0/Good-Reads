import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import ShowAllBooks from "./containers/ShowAllBooks";
import SingleBook from "./containers/SingleBook";
import Protected from "./containers/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route
            path="/ShowAllBooks/:search"
            exact
            element={<Protected Component={ShowAllBooks} />}
          />
          <Route
            path="/SingleBook/:bookId"
            exact
            element={<Protected Component={SingleBook} />}
          />

          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
