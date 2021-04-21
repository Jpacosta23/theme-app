import { createContext, useState } from "react";

export const themeCharacteristics = {
  light: {
    color: "#555555",
    background: "#eeeeee",
    fontSize: "25px",
    height: "500px",
    width: "100%",
  },
  dark: {
    color: "#eeeeee",
    background: "#222222",
    fontSize: "25px",
    height: "500px",
    width: "100%",
  },
};

const initialState = {
  Theme: false,
  toggle: () => {},
};

export const ThemeContext = createContext(initialState);

export const ThemeProvider = (props) => {
  const [Theme, setTheme] = useState(false);

  const { children } = props;

  const toggle = () => {
    setTheme(!Theme);
  };

  const context = {
    myTheme: Theme,
    myThemeFunction: toggle,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
