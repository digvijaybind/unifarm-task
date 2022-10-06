import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sample from "./pages/Sample";

function App() {
  return (
    <div className="App">
      <Sample />
    </div>
  );
}

export default App;
