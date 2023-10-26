import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: black;
  font-family: "Poppins", sans-serif;
}

html{
  scroll-behavior: smooth;
}
body, html {
  margin: 0;
  padding: 0;
}

@media (max-width:768px) {
  html{
    scroll-padding-top: 100px;
  }
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
