import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BooksProvider } from "./components/BooksContext";
import { UsersContextProvider } from "./components/UsersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersContextProvider>
    <BooksProvider>
      <App />
    </BooksProvider>
  </UsersContextProvider>
);
