import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Homepage from "./components/HomePage";
import SignIn from "./components/SignIn";
// import Profile from "./components/Profile";
import Book from "./components/Book";
import SearchResults from "./SearchResults";
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        {/* <Background /> */}
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/searchedBooks" exact element={<SearchResults />} />
          <Route path="/book/:id" exact element={<Book />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/users/:id" element={<Profile />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
