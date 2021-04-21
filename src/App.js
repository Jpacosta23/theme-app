import "./App.css";
import React, { useContext } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Button from "./components/Button";
import Div from "./components/Div";

function App() {
  return (
    <ThemeProvider>
      <Div />
      <Button />
    </ThemeProvider>
  );
}

export default App;
