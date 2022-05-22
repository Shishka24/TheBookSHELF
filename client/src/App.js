import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Homepage from "./components/HomePage";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Book from "./components/Book";
import SearchResults from "./SearchResults";
import styled from "styled-components";
import backgroundImage from "../src/background/wall-murals-bookshelves-on-a-white-background.jpg.jpg";
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Background />
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/searchedBooks" exact element={<SearchResults />} />
          <Route path="/book/:id" exact element={<Book />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/:username" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
const Background = styled.div`
  background-image: url(${backgroundImage});
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export default App;
